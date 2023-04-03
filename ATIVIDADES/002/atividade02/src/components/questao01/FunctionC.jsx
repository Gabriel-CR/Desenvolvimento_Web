import ColorTheme from "./MyColorContext";
import FunctionD from "./FunctionD";

const FunctionC = () => {
  return (
    <ColorTheme.Consumer>
      {({bkgC}) => {
        return (
          <div>
            <h1 style={{ backgroundColor: bkgC }}>Contexto C</h1>
            <FunctionD />
          </div>
        );
      }}
    </ColorTheme.Consumer>
  );
};

export default FunctionC;
