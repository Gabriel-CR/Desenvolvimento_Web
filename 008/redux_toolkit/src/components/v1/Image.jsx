import React from "react";

const Image = ({ id }) => {
  return (
    <>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt="image"
        style={{ width: "400px" }}
      />
    </>
  );
};

export default Image;
