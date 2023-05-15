import "./App.css";
import Questao01X from "./components/Questao01";
import Questao02 from "./components/Questao02";
import Questao03 from "./components/Questao03";
import Questao04 from "./components/Questao04";

function App() {
  return (
    <div className="App">
      <h1>Prova 1</h1>
      <hr />
      <h2>Questão 01</h2>
      <Questao01X />
      <hr />
      <Questao02 />
      <hr />
      <Questao03 />
      <hr />
      <Questao04 />
    </div>
  );
}

export default App;
