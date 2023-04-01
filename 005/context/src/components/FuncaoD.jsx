import MyColor from "./MyContext";
import { useContext } from "react";

const FuncaoD = () => {
  const { cor, nome } = useContext(MyColor);

  return (
    <div>
      <h1 style={{ backgroundColor: cor }}>Funcao D de {nome}</h1>
    </div>
  );
};

export default FuncaoD;
