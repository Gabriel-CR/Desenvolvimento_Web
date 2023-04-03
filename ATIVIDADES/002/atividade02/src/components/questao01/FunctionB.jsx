import { useContext } from "react";
import ColorTheme from "./MyColorContext";

const FunctionB = () => {
  const { bkgB } = useContext(ColorTheme);

  return (
    <div>
      <h1 style={{ backgroundColor: bkgB }}>Contexto B</h1>
    </div>
  );
};

export default FunctionB;
