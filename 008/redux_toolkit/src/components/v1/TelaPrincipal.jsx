import { useState } from "react";
import Image from "./Image";
import BotaoIncrementar from "./BotaoIncrementar";
import BotaoDecrementar from "./BotaoDecrementar";

const TelaPrincipal = () => {
  const [id, setId] = useState(120);

  const incrementar = () => {
    setId((prev) => prev + 1);
  };

  const decrementar = () => {
    setId((prev) => prev - 1);
  };

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              <Image id={id} />
            </td>
          </tr>
          <tr>
            <td>
              <BotaoIncrementar incrementar={incrementar} />
            </td>
            <td>
              <BotaoDecrementar decrementar={decrementar} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TelaPrincipal;
