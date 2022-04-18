var express = require("express");
var router = express.Router();
const professorController = require("../controller/professorController");
const multer = require("../config/multer");

//listar todos os dados
router.get("/professor", professorController.list);
//listar dados com filtro
router.post("/professor", professorController.listfiltro);
//abre addprof
router.get("/addProf", professorController.abreadd);
//adicionar dados no banco
router.post("/addProf", multer.single("foto"), professorController.add);
//abrir editar
router.get("/edtProf/:id", professorController.abreedt);
//editar dados no banco
router.post("/edtProf/:id", multer.single("foto"), professorController.edt);
//deletar dados
router.get("/delProf/:id", professorController.del);

module.exports = router;