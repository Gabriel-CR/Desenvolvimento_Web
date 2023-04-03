import ColorTheme from "./MyColorContext.jsx";

import FunctionB from "./FunctionB.jsx";
import FunctionC from "./FunctionC.jsx";

const FunctionA = () => {
  const cores = { bkgA: "green", bkgB: "white", bkgC: "yellow", bkgD: "blue" };

  return (
    <ColorTheme.Provider value={cores}>
      <h1 style={{ backgroundColor: cores.bkgA }}>Contexto A</h1>
      <FunctionB />
      <FunctionC />
    </ColorTheme.Provider>
  );
};

export default FunctionA;
