import { useContext, useEffect, useState } from "react";
import PaisNome from "../context";

const Questao03 = () => {
  const pais = useContext(PaisNome);
  const [population, setPopulation] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${pais}`)
      .then((res) => res.json())
      .then((json) => setPopulation(json[0].population))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Questão 3</h2>
      <p>Pais: {pais}</p>
      <p>População: {population} mil</p>
    </div>
  );
};

export default Questao03;
