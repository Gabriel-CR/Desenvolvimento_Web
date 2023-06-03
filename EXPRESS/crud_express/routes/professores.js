const professorService = require("../services/professor.service");

var express = require("express");
var router = express.Router();

router.get("/listar", (req, res, next) => {
  res.json(professorService.list());
});

router.post("/register", (req, res, next) => {
  const professor = professorService.register(req.body);
  res.json(professor);
});

router.put("/update/:id", (req, res, next) => {
  const professor = professorService.update(req.params.id, req.body);
  res.json(professor);
});

router.delete("/delete/:id", (req, res, next) => {
  const ok = professorService.delete(req.params.id);
  if (ok) {
    res.json({ sucess: true });
  } else {
    res.json({ sucess: false });
  }
});

router.get("/retrive/:id", (req, res, next) => {
  const out = professorService.retrive(req.params.id);
  res.json(out);
});

module.exports = router;
