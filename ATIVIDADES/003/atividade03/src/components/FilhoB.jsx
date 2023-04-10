import React from "react";

const FilhoB = ({ vetor, comunicacao }) => {
  const calcMenor = () => {
    let menor = vetor[0];
    for (let i = 1; i < vetor.length; i++) {
      if (vetor[i] < menor) {
        menor = vetor[i];
      }
    }
    comunicacao(menor);
  };

  return (
    <div>
      <button onClick={calcMenor}>Calcular Menor</button>
    </div>
  );
};

export default FilhoB;
