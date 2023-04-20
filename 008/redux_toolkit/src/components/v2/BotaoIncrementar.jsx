import React from "react";
import { useDispatch } from "react-redux";
import { incrementar } from "./slices/idSlice";

const BotaoIncrementar = () => {
  const dispatch = useDispatch();

  return (
    <>
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
          marginBottom: "5px",
        }}
      >
        Id + 1
      </button>
    </>
  );
};

export default BotaoIncrementar;
