import express from "express";
var router = express.Router();
import professorService from "../services/professores.services";

router.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

router.get("/listar", (req, res, next) => {
  professorService.list(req, res);
});
