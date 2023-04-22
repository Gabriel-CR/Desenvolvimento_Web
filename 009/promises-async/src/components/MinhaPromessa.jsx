import { useEffect } from "react";

const minhaPromise = new Promise((resolve, reject) => {
  // logica que esta produzindo algo que demora algum tempo
  //   console.log("iniciando a lógica");
  setTimeout(() => {
    // console.log("lógica terminada");
    const myRand = Math.floor(Math.random() * 10) + 1;
    // console.log({ myRand });

    if (myRand % 2 === 0) {
      resolve({ myRand, msg: "Deu certo" });
    } else {
      reject({ myRand, msg: "Deu errado" });
    }
  }, 3000);
});

const meuGet = (url) => {
  //   console.log({ url });
  return minhaPromise;
};

const MinhaPromessa = () => {
  useEffect(() => {
    // meuGet("http://exampleurl.com")
    //   .then((res) => console.log({ res }))
    //   .catch((err) => console.log({ err }));

    meuGet("http://exemplo.com")
      .then((res) => {
        console.log(res.myRand);
        console.log(res.msg);
      })
      .catch((err) => {
        console.log(err.myRand);
        console.log(err.msg);
      });
  }, []);

  return (
    <>
      <h2>Testando a Promise...</h2>
    </>
  );
};

export default MinhaPromessa;
