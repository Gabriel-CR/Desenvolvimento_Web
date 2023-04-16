import { useState, useEffect } from "react";

const VotacaoV2 = () => {
  const [cidades, setCidades] = useState([
    { nome: "Fortaleza", votos: 0 },
    { nome: "Quixadá", votos: 0 },
    { nome: "Quixeramobim", votos: 0 },
    { nome: "Sobral", votos: 0 },
  ]);
  const [flag, setFlag] = useState(true);
  const [mais, setMais] = useState("");
  const [menos, setMenos] = useState("");

  useEffect(() => {
    let maior = cidades[0].votos;
    let menor = cidades[0].votos;

    for (let i = 0; i < cidades.length; i++) {
      if (cidades[i].votos > maior) maior = cidades[i].votos;
      if (cidades[i].votos < menor) menor = cidades[i].votos;
    }

    setMais("");
    setMenos("");
    for (let i = 0; i < cidades.length; i++) {
      if (cidades[i].votos === maior) {
        setMais((prev) => `${prev} ${cidades[i].nome}`);
      }
      if (cidades[i].votos === menor) {
        setMenos((prev) => `${prev} ${cidades[i].nome}`);
      }
    }
  }, [cidades]);

  const votarNaCidade = (nome) => {
    const index = cidades.findIndex((cidade) => cidade.nome === nome);
    cidades[index].votos += 1;
    setFlag((prev) => !prev);
  };

  const votarNaCidadeV2 = (nome) => {
    // const newCidades = cidades.map((item) => {
    //   if (item.nome === nome) return { ...item, votos: item.votos + 1 };
    //   return { ...item };
    // });

    const newCidades = cidades.map((item) => {
      if (item.nome === nome) item.votos += 1;
      return item;
    });
    setCidades(newCidades);
  };

  return (
    <div>
      {cidades.map(({ nome, votos }, key) => (
        <h3 key={key}>{`${nome}: ${votos}`}</h3>
      ))}
      {/* 
        <h3>{`${cidades[0].nome}: ${cidades[0].votos}`}</h3>
        <h3>{`${cidades[1].nome}: ${cidades[1].votos}`}</h3>
        <h3>{`${cidades[2].nome}: ${cidades[2].votos}`}</h3>
        <h3>{`${cidades[3].nome}: ${cidades[3].votos}`}</h3> 
      */}

      {cidades.map(({ nome }, key) => (
        <button key={key} onClick={() => votarNaCidadeV2(nome)}>
          Votar {nome}
        </button>
      ))}

      {/* <button onClick={() => votarNaCidade("Fortaleza")}>
        Votar Fortaleza
      </button>
      <button onClick={() => votarNaCidade("Quixadá")}>Votar Quixadá</button>
      <button onClick={() => votarNaCidadeV2("Quixeramobim")}>
        Votar Quixeramobim
      </button>
      <button onClick={() => votarNaCidadeV2("Sobral")}>Votar Sobral</button> */}

      <h3>Mais Votadas: {mais}</h3>
      <h3>Menos Votadas: {menos}</h3>
    </div>
  );
};

export default VotacaoV2;
