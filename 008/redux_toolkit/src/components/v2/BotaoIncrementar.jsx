import React from "react";
import { useDispatch } from "react-redux";
import { incrementar, incrementarValor } from "./slices/idSlice";

const BotaoIncrementar = () => {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "4px",
        margin: "10px",
      }}
    >
      <button
        onClick={() => {
          dispatch(incrementar());
        }}
        style={{
          borderRadius: "5px",
          width: "100px",
          height: "30px",
          background: "#fff",
          border: "1px solid #000",
        }}
      >
        Id + 1
      </button>
      <button
        onClick={() => {
          dispatch(incrementarValor(10));
        }}
        style={{
          borderRadius: "5px",
          width: "100px",
          height: "30px",
          background: "#fff",
          border: "1px solid #000",
        }}
      >
        Id + 10
      </button>
    </div>
  );
};

export default BotaoIncrementar;
