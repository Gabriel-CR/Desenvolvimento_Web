"use strict";

var _express = _interopRequireDefault(require("express"));
var _professores = _interopRequireDefault(require("../services/professores.services"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.get("/listar", function (req, res, next) {
  _professores["default"].list(req, res);
});