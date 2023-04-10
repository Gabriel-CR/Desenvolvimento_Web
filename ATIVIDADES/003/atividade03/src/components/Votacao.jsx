import { useEffect, useState } from "react";

const Votacao = () => {
  const [fortaleza, setFortaleza] = useState(0);
  const [quixada, setQuixada] = useState(0);
  const [quixeramobim, setQuixeramobim] = useState(0);
  const [sobral, setSobral] = useState(0);

  const [mais, setMais] = useState("");
  const [menos, setMenos] = useState("");

  useEffect(() => {
    let cidades = [fortaleza, quixada, quixeramobim, sobral];
    let nomes = ["Fortaleza", "Quixadá", "Quixeramobim", "Sobral"];
    let maior = cidades[0];
    let menor = cidades[0];

    for (let i = 0; i < cidades.length; i++) {
      if (cidades[i] > maior) maior = cidades[i];
      if (cidades[i] < menor) menor = cidades[i];
    }

    setMais("");
    setMenos("");
    for (let i = 0; i < cidades.length; i++) {
      if (cidades[i] === maior) setMais((prev) => `${prev} ${nomes[i]}`);
      if (cidades[i] === menor) setMenos((prev) => `${prev} ${nomes[i]}`);
    }
  }, [fortaleza, quixada, quixeramobim, sobral]);

  return (
    <div>
      <h3>Fortaleza: {fortaleza}</h3>
      <h3>Quixadá: {quixada}</h3>
      <h3>Quixeramobim: {quixeramobim}</h3>
      <h3>Sobral: {sobral}</h3>

      <button onClick={() => setFortaleza((prev) => prev + 1)}>
        Votar Fortaleza
      </button>
      <button onClick={() => setQuixada((prev) => prev + 1)}>
        Votar Quixadá
      </button>
      <button onClick={() => setQuixeramobim((prev) => prev + 1)}>
        Votar Quixeramobim
      </button>
      <button onClick={() => setSobral((prev) => prev + 1)}>
        Votar Sobral
      </button>

      <h3>Mais Votada: {mais}</h3>
      <h3>Menos Votada {menos}</h3>
    </div>
  );
};

export default Votacao;
