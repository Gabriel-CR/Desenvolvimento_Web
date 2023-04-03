import { useContext } from "react";
import imgNumber from "./MyContext";

const ComponenteNeto = () => {
  const number = useContext(imgNumber);
  return (
    <div>
      <h2>Neto</h2>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          number + 2
        }.png`}
        alt="imagem do pokemon"
      />
    </div>
  );
};

export default ComponenteNeto;
