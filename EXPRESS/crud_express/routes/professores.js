const professorService = require("../services/professor.service");
const professorServiceMongo = require("../services/professor.service.mongo");

var express = require("express");
var router = express.Router();

router.get("/listar", (req, res, next) => {
  professorServiceMongo.list(req, res);
});

router.post("/register", (req, res, next) => {
  professorServiceMongo.register(req, res);
});

router.delete("/delete/:id", (req, res, next) => {
  professorServiceMongo.delete(req, res);
});

router.get("/recover/:id", (req, res, next) => {
  professorServiceMongo.retrive(req, res);
});

router.put("/update/:id", (req, res, next) => {
  professorServiceMongo.update(req, res);
});

router.get("/retrive/:id", (req, res, next) => {
  const out = professorService.retrive(req.params.id);
  res.json(out);
});

module.exports = router;
