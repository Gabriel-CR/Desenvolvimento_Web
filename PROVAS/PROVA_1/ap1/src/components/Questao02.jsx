import { useState } from "react";

const Questao02 = () => {
  const [visao, setVisao] = useState(true);

  /*
    Função que altera o state visão para o seu oposto
        se estriver true, passa para false
        se estiver false, passa para true
    Função chamada no evento onClick do botão do componente
  */
  const changeVisao = () => {
    setVisao((visao) => !visao);
  };

  return (
    <div>
      <h2>Questao 02</h2>
      {/*Alternando entre as imagens de frente e de costas
        de acordo com o state visao*/}
      {visao ? <h2>Pokemon de frente</h2> : <h2>Pokemon de costas</h2>}
      {visao ? (
        <img
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          }
          alt="pokemon frente"
        />
      ) : (
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"
          alt="pokemon costas"
        />
      )}
      {/*
        Botão muda de nome de acordo com o state visao
        Se o state estiver true, o botão mostra a palavra Costas
        Se o state estiver false, o botão mostra a palavra Frente
      */}
      <button onClick={changeVisao}>{visao ? "Costas" : "Frente"}</button>
    </div>
  );
};

export default Questao02;
