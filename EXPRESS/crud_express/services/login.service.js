const LoginModel = require("../models/login.models");

let logins = [{ id: 0, login: "admin", senha: "admin" }];

let id = 1;

class LoginService {
  static signin(req, res) {
    const { login, senha } = req.body;
    const user = logins.find(
      (user) => user.login == login && user.senha == senha
    );
    if (user) {
      return res.status(200).json({ res: true });
    }
    return res.status(404).json({ res: false });
  }
}

module.exports = LoginService;
