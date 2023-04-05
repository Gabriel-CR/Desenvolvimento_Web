import { useEffect, useState } from "react";

const Contador = () => {
  const [count, setCount] = useState(0);
  const [ehPar, setEhPar] = useState(true);

  useEffect(() => {
    count % 2 === 0 ? setEhPar(true) : setEhPar(false);
  }, [count]);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Contador: {count}</h2>
      <h2>É par: {ehPar + ""}</h2>
      <button onClick={handleCount}>Contar + 1</button>
    </div>
  );
};

export default Contador;
