import Image from "./Image";
import BotaoIncrementar from "./BotaoIncrementar";
import BotaoDecrementar from "./BotaoDecrementar";

const TelaPrincipal = () => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              <Image />
            </td>
          </tr>
          <tr>
            <td>
              <BotaoIncrementar />
            </td>
            <td>
              <BotaoDecrementar />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TelaPrincipal;
