const { Op } = require("sequelize");
const Professor = require("../models/Professor");

async function abreadd(req, res) {
  res.render("addProf.ejs", {});
}
//aletrar
async function add(req, res) {
  const { nome, turma, nivel } = req.body;
  const foto = req.file.filename;
  const trabalho = req.file.filename;
  await Professor.create({ nome, turma, nivel, foto, trabalho }).then((professor) => {
    res.redirect("/");
  });
}

async function abreedt(req, res) {
  let professor = await Professor.findByPk(req.params.id);
  res.render("edtProf.ejs", { professor: professor });
}

async function edt(req, res) {
  let professor = await Professor.findByPk(req.params.id);
  professor.nome = req.body.nome;
  professor.turma = req.body.turma;
  professor.nivel = req.body.nivel;

  if (req.file.filename != "") {
    professor.foto = req.file.filename;
    professor.trabalho = req.file.filename;
  }
  await professor.save();
  res.redirect("/");
}

async function list(req, res) {
  let professores = await Professor.findAll();
  res.render("index.ejs", { Professores: professores });
}

async function listfiltro(req, res) {
  let pesquisar = req.body.pesquisar;
  let professores = await Professor.findAll({
    where: { nome: { [Op.like]: "%" + pesquisar + "%" } },
  });
  res.render("index.ejs", { Professores: professores });
}

async function del(req, res) {
  let professor = await Professor.findByPk(req.params.id);
  await professor.destroy();
  res.redirect("/");
}

module.exports = { abreadd, add, list, listfiltro, abreedt, edt, del };
