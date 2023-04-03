import React from "react";
import ColorTheme from "./MyColorContext";

const FunctionD = () => {
  return (
    <ColorTheme.Consumer>
      {({ bkgD }) => {
        return (
          <div>
            <h1 style={{ backgroundColor: bkgD }}>Contexto D</h1>
          </div>
        );
      }}
    </ColorTheme.Consumer>
  );
};

export default FunctionD;
