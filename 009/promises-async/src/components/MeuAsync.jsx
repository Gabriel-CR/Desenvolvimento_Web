import { useEffect } from "react";

const minhaPromessa = new Promise((resolve, reject) => {
  const x = true;
  if (x) {
    resolve({ msg: "Deu certo" });
  } else {
    reject({ msg: "Deu errado" });
  }
});

const MeuAsync = () => {
  function getPromessaThen() {
    minhaPromessa
      .then((data) => {
        console.log(data.msg);
      })
      .catch((err) => {
        console.log(err.msg);
      });
  }

  async function getPromessaAsync() {
    try {
      const data = await minhaPromessa;
      console.log(data.msg);
    } catch (error) {
      console.log(error.msg);
    }
  }

  useEffect(() => {
    getPromessaThen();
    getPromessaAsync();
  }, []);
  return (
    <>
      <h2>Testando async</h2>
    </>
  );
};

export default MeuAsync;
