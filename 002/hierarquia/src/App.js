import "./App.css";
import FunctionA from "./components/FunctionA";
import * as Site from "./components/Multiplo";
import { Supermercado, Legume, Bebida } from "./components/Children";

function App() {
  return (
    <div className="App">
      {/* Hierarquia
        <FunctionA x={10} y={15} /> 
      */}
      {/* Multiplos Components
        <Site.Header />
        <Site.Body />
        <Site.Footer /> 
      */}
      <Supermercado nome="DuPovu">
        <Legume nome="Batata" />
        <Bebida nome="Café" />
      </Supermercado>
    </div>
  );
}

export default App;
