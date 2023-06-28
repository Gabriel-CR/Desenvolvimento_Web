const LoginModel = require("../models/login.models");

let logins = [
  { login: "admin", senha: "admin" },
  { login: "teste", senha: "1234" },
];

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
