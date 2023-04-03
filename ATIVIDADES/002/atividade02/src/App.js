import "./App.css";

import FunctionA from "./components/questao01/FunctionA";
import ComponenteAvo from "./components/questao02/ComponenteAvo";
import ComponenteAvoo from "./components/questao03/ComponenteAvo";

function App() {
  return (
    <div className="App">
      {/* Questao 1 */}
      <FunctionA />
      <hr />

      {/* Questao 2 */}
      <ComponenteAvo />
      <hr />

      {/* Questao 3 */}
      <ComponenteAvoo />
    </div>
  );
}

export default App;
