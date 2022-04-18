const { Op } = require("sequelize");
const Professor = require("../models/Professor");

async function abreadd(req, res) {
  res.render("professor/addProf.ejs", {});
}

//alterar dados
async function add(req, res) {
  const { nome, turma, nivel } = req.body;
  const trabalho = req.file.filename;
  await Professor.create({
    nome,
    turma,
    nivel,
    trabalho,
  }).then((professor) => {
    res.redirect("/professor");
  });
}

async function abreedt(req, res) {
  let professor = await Professor.findByPk(req.params.id);
  res.render("professor/edtProf.ejs", { professor: professor });
}

//alterar dados
async function edt(req, res) {
  let professor = await Professor.findByPk(req.params.id);
  professor.nome = req.body.nome;
  professor.turma = req.body.turma;
  professor.nivel = req.body.nivel;

  if (req.file.filename != "") {
    professor.trabalho = req.file.filename;
  }
  await professor.save();
  res.redirect("..views/professor");
}

async function list(req, res) {
  let professores = await Professor.findAll();
  res.render("professor/index.ejs", { Professores: professores });
}

//pode ter alteração
async function listfiltro(req, res) {
  let pesquisar = req.body.pesquisar;
  let professores = await Professor.findAll({
    where: { nome: { [Op.like]: "%" + pesquisar + "%" } },
  });
  res.render("professor/index.ejs", { Professores: professores });
}

async function del(req, res) {
  let professor = await Professor.findByPk(req.params.id);
  await professor.destroy();
  res.redirect("/professor");
}

module.exports = { abreadd, add, abreedt, edt, list, listfiltro,  del };