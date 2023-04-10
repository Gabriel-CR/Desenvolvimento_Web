import React from "react";

const FilhoA = ({ vetor, comunicacao }) => {
  const calcMaior = () => {
    let maior = vetor[0];
    for (let i = 1; i < vetor.length; i++) {
      if (vetor[i] > maior) {
        maior = vetor[i];
      }
    }
    comunicacao(maior);
  };

  return (
    <div>
      <button onClick={calcMaior}>Calcular Maior</button>
    </div>
  );
};

export default FilhoA;
