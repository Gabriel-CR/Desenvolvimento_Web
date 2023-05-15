import { useEffect, useState } from "react";

function Questao01X() {
  const alunos = [
    { nome: "Sicrano", notas: { ap1: 8.4, ap2: 5.4 } },
    { nome: "Beltrano", notas: { ap1: 6.7, ap2: 3.5 } },
    { nome: "Fulano", notas: { ap1: 7.3, ap2: 9.2 } },
  ];

  const [media, setMedia] = useState([]);

  // Função que recebe as médias que foram calculadas no seu componente filho
  // que retorna um vetor com as médias de cada aluno
  const receiveMedias = (medias) => {
    setMedia(medias);
  };

  return (
    <div>
      <Questao01Y alunos={alunos} medias={receiveMedias} />
      {/* 
      Estou atrelando as máedias no vetor media ao aluno
      Essa referencia se dá pela posição do aluno no vetor aluno
      Estou usando a key do map para pegar esta posição 
      */}
      {alunos.map((m, k) => {
        return (
          <div key={k}>
            {media[k] >= 7 ? (
              <p>
                {m.nome} - {media[k]}
              </p>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
}

const Questao01Y = ({ alunos, medias }) => {
  // Estou fazendo um map onde passo pelo vetor de objetos alunos recebidos
  // do seu pai, para cada aluno estou pegando as suas notas e calculando a média
  useEffect(() => {
    const media = [];
    alunos.map((aluno) => {
      media.push((aluno.notas.ap1 + aluno.notas.ap2) / 2);
    });

    medias(media);
  }, []);

  return <div></div>;
};

export default Questao01X;
