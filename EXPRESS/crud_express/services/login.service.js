const LoginModel = require("../models/login.models");

let logins = [{ id: 0, login: "admin", senha: "admin" }];

let id = 1;

class LoginService {
  static signin(data) {
    for (let i = 0; i < logins.length; i++) {
      if (logins[i].email == data.login && logins[i].senha == data.senha) {
        return { res: true };
      }
    }
    return { res: false };
  }
}

module.exports = LoginService;
