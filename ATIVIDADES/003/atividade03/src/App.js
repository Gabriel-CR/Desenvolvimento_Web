import "./App.css";
import Votacao from "./components/Votacao";
import Pai from "./components/Pai";

function App() {
  return (
    <div className="App">
      <h1>Atividade 03</h1>
      <hr />
      <h2>Questão 1</h2>
      <Votacao />
      <hr />
      <h2>Questão 2</h2>
      <Pai />
    </div>
  );
}

export default App;
