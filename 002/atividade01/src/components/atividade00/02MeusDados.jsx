import React from "react";

const MeusDados = ({ nome, curso, universidade }) => {
  return (
    <div className="principal">
      <h1>Nome: {nome}</h1>
      <h1>Curso: {curso}</h1>
      <h1>Universidade: {universidade}</h1>
    </div>
  );
};

export default MeusDados;
