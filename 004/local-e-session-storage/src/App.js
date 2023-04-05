import "./App.css";
import { SaveData, LoadData } from "./components/MyStorage";

function App() {
  return (
    <div className="App">
      <h1>Local e Session Storage</h1>
      <SaveData />
      <LoadData />
    </div>
  );
}

export default App;
