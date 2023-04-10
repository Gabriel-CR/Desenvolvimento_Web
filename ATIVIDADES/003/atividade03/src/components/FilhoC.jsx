import React from "react";

const FilhoC = ({ vetor, comunicacao }) => {
  const calcMedia = () => {
    let soma = vetor.reduce((soma, i) => {
      return soma + i;
    });
    comunicacao(soma / 5);
  };

  return (
    <div>
      <button onClick={calcMedia}>Calcular Média</button>
    </div>
  );
};

export default FilhoC;
