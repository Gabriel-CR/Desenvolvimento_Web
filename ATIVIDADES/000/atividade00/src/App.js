import "./App.css";

import MeusDados1 from "./components/atividade00/01MeusDados";
import MeusDados2 from "./components/atividade00/02MeusDados";
import Temperatura from "./components/atividade00/03Temperatura";

function App() {
  return (
    <div className="App">
      <MeusDados1 />
      <MeusDados2
        nome="Carlos Gabriel de Castro Rodrigues"
        curso="Ciência da Computação"
        universidade="Universidade Federal do Ceará"
      />
      <Temperatura />
    </div>
  );
}

export default App;
