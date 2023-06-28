const AlunoService = require("../services/aluno.service.mongo");

var express = require("express");
var router = express.Router();

/*
router.get("/listar", (req, res, next) => {
  res.json(professorService.list());
});

router.post("/register", (req, res, next) => {
  const professor = professorService.register(req.body);
  res.json(professor);
});

router.delete("/delete/:id", (req, res, next) => {
  const ok = professorService.delete(req.params.id);
  res.json({ sucess: ok });
});

router.get("/recover/:id", (req, res, next) => {
  const professor = professorService.recuperar(req.params.id);
  res.json(professor);
});

router.put("/update/:id", (req, res, next) => {
  const professor = professorService.update(req.params.id, req.body);
  res.json(professor);
});
*/

router.get("/listar", (req, res, next) => {
  AlunoService.list(req, res);
});

router.post("/register", (req, res, next) => {
  AlunoService.register(req, res);
});

router.delete("/delete/:id", (req, res, next) => {
  AlunoService.delete(req, res);
});

router.get("/recover/:id", (req, res, next) => {
  AlunoService.retrive(req, res);
});

router.put("/update/:id", (req, res, next) => {
  AlunoService.update(req, res);
});

// router.get("/retrive/:id", (req, res, next) => {
//   const out = professorService.retrive(req.params.id);
//   res.json(out);
// });

module.exports = router;
