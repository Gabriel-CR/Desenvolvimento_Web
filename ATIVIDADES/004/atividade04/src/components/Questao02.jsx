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

const Questao02 = () => {
  const [dados, setDados] = useState(false);

  const getData = async () => {
    try {
      const res = await myPromise;
      setDados(res.data);
    } catch (error) {
      alert(error.msg);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Questão 02</h2>
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

export default Questao02;
