var express = require("express");
var router = express.Router();
const professorController = require("../controller/professorController");
const multer = require("../config/multer");

//listar todos os dados
router.get("/", professorController.list);
//listar dados com filtro
router.post("/", professorController.listfiltro);
//abre addprof
router.get("/addprof", professorController.abreadd);
//adicionar dados no banco
router.post("/addprof", multer.single("foto"), professorController.add);
//abrir editar
router.get("/edtprof/:id", professorController.abreedt);
//editar dados no banco
router.post("/edtprof/:id", multer.single("foto"), professorController.edt);
//deletar dados
router.get("/delprof/:id", professorController.del);

module.exports = router;