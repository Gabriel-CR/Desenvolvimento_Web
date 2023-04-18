import React from "react";

const BotaoIncrementar = ({ incrementar }) => {
  return (
    <>
      <button onClick={incrementar}>Id + 1</button>
    </>
  );
};

export default BotaoIncrementar;
