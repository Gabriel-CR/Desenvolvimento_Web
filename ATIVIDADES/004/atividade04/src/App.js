import "./App.css";
import Questao01 from "./components/Questao01";
import Questao02 from "./components/Questao02";
import Questao03 from "./components/Questao03";
import PaisNome from "./context";

function App() {
  return (
    <PaisNome.Provider value="brazil">
      <div className="App">
        <h1>Atividade 04</h1>
        <Questao01 />
        <hr />
        <Questao02 />
        <hr />
        <Questao03 />
      </div>
    </PaisNome.Provider>
  );
}

export default App;
