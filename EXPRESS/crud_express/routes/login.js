const LoginService = require("../services/login.service");

var express = require("express");
var router = express.Router();

// router.get("/listar", (req, res, next) => {
//   LoginService.list(req, res);
// });

router.post("/signin", (req, res, next) => {
  LoginService.signin(req, res);
});

module.exports = router;
