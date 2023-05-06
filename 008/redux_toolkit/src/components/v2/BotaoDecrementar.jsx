import { useDispatch } from "react-redux";
import { decrementar, decrementarValor } from "./slices/idSlice";

const BotaoDecrementar = () => {
  const dispath = useDispatch();
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
          dispath(decrementar());
        }}
        style={{
          borderRadius: "5px",
          width: "100px",
          height: "30px",
          background: "#fff",
          border: "1px solid #000",
        }}
      >
        Id - 1
      </button>
      <button
        onClick={() => {
          dispath(decrementarValor(10));
        }}
        style={{
          borderRadius: "5px",
          width: "100px",
          height: "30px",
          background: "#fff",
          border: "1px solid #000",
        }}
      >
        Id - 10
      </button>
    </div>
  );
};

export default BotaoDecrementar;
