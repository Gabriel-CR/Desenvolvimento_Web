import "./App.css";
import HelloWorld from "./components/00HelloWorld.jsx";
import Calculadora from "./components/01Calculadora.jsx";
import MyProps from "./components/02MyProps.jsx";

function App() {
  return (
    <div className="App">
      {/* <HelloWorld /> */}
      {/* <Calculadora /> */}
      <MyProps nome="Gabriel" curso="Ciência da Computação" />
    </div>
  );
}

export default App;
