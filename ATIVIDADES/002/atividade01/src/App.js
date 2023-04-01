import "./App.css";

import Pai from "./components/questao01/01Pai";
import * as PC from "./components/questao02/02MeuPC";
import { World, Arena, Hero, Enemy } from "./components/questao03/03Batalha";

import batman from "./img/batman.jpg";
import robin from "./img/robin.webp";

function App() {
  return (
    <div className="App">
      {/* questao01 */}
      <Pai />
      <hr />

      {/* questao02 */}
      <PC.Memoria nome="HiperX 2400Mhz" preco={240.0} />
      <PC.PlacaMae nome="Asrock A320M-HD" preco={528.0} />
      <PC.PlacadeVideo nome="RTX 3080 TI" preco={6240.48} />
      <hr />

      {/* questao03 */}
      <World>
        <Arena nome="Arena 01">
          <Hero name="Batman" img={batman} alt="imagem do Batman" />
          <Enemy name="Robin" img={robin} alt="imagem do Robin" />
          <Hero name="Batman" img={batman} alt="imagem do Batman" />
          <Enemy name="Robin" img={robin} alt="imagem do Robin" />
        </Arena>
        <Arena nome="Arena 02">
          <Hero name="Batman" img={batman} alt="imagem do Batman" />
          <Enemy name="Robin" img={robin} alt="imagem do Robin" />
        </Arena>
        <Arena nome="Arena 03">
          <Hero name="Batman" img={batman} alt="imagem do Batman" />
          <Enemy name="Robin" img={robin} alt="imagem do Robin" />
        </Arena>
      </World>
    </div>
  );
}

export default App;
