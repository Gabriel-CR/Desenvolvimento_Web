import { useEffect, useState } from "react";

import FilhoA from "./FilhoA.jsx";
import FilhoB from "./FilhoB.jsx";
import FilhoC from "./FilhoC.jsx";

const Pai = () => {
  const [maior, setMaior] = useState(0);
  const [menor, setMenor] = useState(0);
  const [media, setMedia] = useState(0);

  useEffect(() => {
    maiorElem(maior);
    menorElem(menor);
    mediaElem(media);
  }, [maior, menor, media]);

  const vet = [1, 2, 3, 10, 5];

  const maiorElem = (m) => setMaior(m);
  const menorElem = (m) => setMenor(m);
  const mediaElem = (m) => setMedia(m);

  return (
    <div>
      <h3>Maior: {maior}</h3>
      <h3>Menor: {menor}</h3>
      <h3>Média: {media}</h3>

      <FilhoA vetor={vet} comunicacao={setMaior} />
      <FilhoB vetor={vet} comunicacao={setMenor} />
      <FilhoC vetor={vet} comunicacao={setMedia} />
    </div>
  );
};

export default Pai;
