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
      >
        Id - 1
      </button>
    </>
  );
};

export default BotaoDecrementar;
