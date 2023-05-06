import { useEffect, useState } from "react";

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const num = Math.floor(Math.random() * (10 - 1) + 1);
    // const num = 2;
    // console.log(num);
    if (num === 1) {
      reject({ msg: "ERRO DE CONEXÃO", num });
    } else if (num === 2) {
      reject({ msg: "ERRO DE DADOS INVÁLIDOS", num });
    } else {
      resolve({
        data: [
          { id: 1, nome: "Beltrano", ira: 6.7 },
          { id: 2, nome: "Fulano", ira: 8.3 },
          { id: 3, nome: "Sicrano", ira: 5.2 },
        ],
      });
    }
  }, 3000);
});

const Questao01 = () => {
  const [dados, setDados] = useState(false);

  useEffect(() => {
    myPromise.then((res) => setDados(res.data)).catch((err) => alert(err.msg));
  }, []);

  return (
    <div>
      <h2>Questão 1</h2>
      {!dados ? (
        <p>Carregando dados...</p>
      ) : (
        dados.map((dado) => {
          return (
            <div key={dado.id}>
              <p>
                Nome: {dado.nome}, ira: {dado.ira}
              </p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Questao01;
