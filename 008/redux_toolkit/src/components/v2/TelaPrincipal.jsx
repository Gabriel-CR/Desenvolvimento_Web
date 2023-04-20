import Image from "./Image";
import BotaoIncrementar from "./BotaoIncrementar";
import BotaoDecrementar from "./BotaoDecrementar";

const TelaPrincipal = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Image />
      <BotaoIncrementar />
      <BotaoDecrementar />
    </div>
  );
};

export default TelaPrincipal;
