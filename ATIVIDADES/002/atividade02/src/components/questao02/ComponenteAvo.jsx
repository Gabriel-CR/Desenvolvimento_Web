import Context from "./MyContext";
import ComponenteFilho from "./ComponenteFilho";

const ComponenteAvo = () => {
  const imgNumber = 1;
  return (
    <Context.Provider value={imgNumber}>
      <h2>Avo</h2>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imgNumber}.png`}
        alt="imagem do pokemon"
      />
      <ComponenteFilho />
    </Context.Provider>
  );
};

export default ComponenteAvo;
