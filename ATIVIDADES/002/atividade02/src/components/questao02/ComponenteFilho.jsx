import { useContext } from "react";
import ComponenteNeto from "./ComponenteNeto";
import imgNumber from "./MyContext";

const ComponenteFilho = () => {
  const number = useContext(imgNumber);

  return (
    <div>
      <h2>Filho</h2>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          number + 1
        }.png`}
        alt="imagem do pokemon"
      />
      <ComponenteNeto />
    </div>
  );
};

export default ComponenteFilho;
