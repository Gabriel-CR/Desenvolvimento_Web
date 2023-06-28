const LoginModel = require("../models/login.models");

let logins = [
  { id: 0, login: "admin", senha: "admin" },
  { id: 1, login: "teste", senha: "1234" },
];

let id = 2;

class LoginService {
  static signin(data) {
    for (let i = 0; i < logins.length; i++) {
      if (logins[i].login == data.email && logins[i].senha == data.senha) {
        return { res: true };
      }
    }
    return { res: false };
  }
}

module.exports = LoginService;
