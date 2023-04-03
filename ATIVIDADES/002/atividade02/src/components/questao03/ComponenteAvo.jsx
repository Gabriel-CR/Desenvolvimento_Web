import Context from "./MyContext";
import ComponenteFilho from "./ComponenteFilho";
import { useState } from "react";

const ComponenteAvo = () => {
  const [contador, setContador] = useState(1);

  const onButtonClick = () => {
    setContador(contador + 1);
  };

  return (
    <Context.Provider value={contador}>
      <h2>Avo</h2>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${contador}.png`}
        alt="imagem do pokemon"
      />
      <button onClick={onButtonClick}>Incrementar</button>
      <ComponenteFilho />
    </Context.Provider>
  );
};

export default ComponenteAvo;
