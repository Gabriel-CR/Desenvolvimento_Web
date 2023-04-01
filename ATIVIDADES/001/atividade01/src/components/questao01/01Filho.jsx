const Filho = ({ altura, peso }) => {
  const calcImc = () => {
    return (peso / (altura * altura)).toFixed(2);
  };

  const avaliarImc = () => {
    let imc = calcImc();

    if (imc > 25) {
      return <h3>Acima do peso</h3>;
    } else if (imc < 18) {
      return <h3>Abaixo do peso</h3>;
    }
    return <h3>Peso Ideal</h3>;
  };

  return (
    <div>
      <h1>Imc: {calcImc()}</h1>
      {avaliarImc()}
      <p>Peso: {peso}</p>
      <p>Altura: {altura}</p>
    </div>
  );
};

export default Filho;
