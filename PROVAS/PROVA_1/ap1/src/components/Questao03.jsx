import { useEffect, useState } from "react";

const Questao03 = () => {
  const [countries, setCountries] = useState([]);
  const [maior, setMaior] = useState({ capital: "", population: "" });
  const [menor, setMenor] = useState({ capital: "", population: "" });

  // Faz uma requisição dos países da Europa para a API.
  // Recebe como resposta uma lista de países com as suas capitais e população
  // O dado recebido é armazenado no state coutries que será usado para as próximas funções
  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/region/europe?fields=capital,population"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.table(
        //   data.map((country) => country.capital[0] + "-" + country.population)
        // );
        setCountries(data);
      })
      .catch((error) => console.log(error));
  }, []);

  // Quando o state countries for atualizado, calcula o país com a maior e menor população
  useEffect(() => {
    // Percorre o vetor countries e
    // armazena a capital e a população do país com a maior população
    // no state maior
    let maior = countries[0];
    for (let i = 1; i < countries.length; i++) {
      if (maior.population < countries[i].population) {
        maior = countries[i];
      }
    }
    setMaior(maior);

    // Percorre o vetor countries e
    // armazena a capital e a população do país com a menor população
    // no state menor
    let menor = countries[0];
    for (let i = 1; i < countries.length; i++) {
      if (menor.population > countries[i].population) {
        menor = countries[i];
      }
    }
    setMenor(menor);
  }, [countries]);

  // Calculei a maior e menor população no useEffect
  // e armazenei no state maior e menor
  // Agora é só exibir os dados
  return (
    <div>
      <h2>Questao 03</h2>
      {console.log({ maior })}
      {console.log({ menor })}
      {/*Exibe maior e menor*/}
      <p>Exibi no console</p>

      {/* <p>
        Maior: {maior.capital} - {maior.population}
      </p>
      <p>
        Menor: {menor.capital} - {menor.population}
      </p> */}
    </div>
  );
};

export default Questao03;
