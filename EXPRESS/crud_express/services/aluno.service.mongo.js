const AlunoModel = require("../models/aluno.models.mongo");

class AlunoService {
  static list(request, response) {
    AlunoModel.find().then((professores) => {
      response.status(201).json(professores);
    });
  }

  static register(request, response) {
    AlunoModel.create(request.body).then((professor) => {
      response.status(201).json(professor);
    });
  }

  static delete(request, response) {
    AlunoModel.findByIdAndDelete(request.params.id).then((professor) => {
      response.status(201).json(professor);
    });
  }

  static retrive(request, response) {
    AlunoModel.findById(request.params.id).then((professor) => {
      response.status(201).json(professor);
    });
  }

  static update(request, response) {
    AlunoModel.findByIdAndUpdate(request.params.id, request.body, {
      new: true,
    }).then((professor) => {
      response.status(201).json(professor);
    });
  }
}

module.exports = AlunoService;
