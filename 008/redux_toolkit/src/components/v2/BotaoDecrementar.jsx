import { useDispatch } from "react-redux";
import { decrementar } from "./slices/idSlice";

const BotaoDecrementar = () => {
  const dispath = useDispatch();
  return (
    <>
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
    </>
  );
};

export default BotaoDecrementar;
