const Calculadora = () => {
  function somar(x, y) {
    return x + y;
  }

  const subtrair = (x, y) => {
    return x - y;
  };

  const multiplicar = (x, y) => x * y;

  const dividir = (x, y) => x / y;

  const chamarDividir = (funcaoDeDivisao) => {
    return funcaoDeDivisao(10, 5);
  };

  return (
    <div>
      <h1>Calculadora</h1>
      <p>A soma dos números é: {somar(10, 5)}</p>
      <p>A subtração dos números é: {subtrair(10, 5)}</p>
      <p>A multiplicação dos números é: {multiplicar(10, 5)}</p>
      <p>A divisão dos números é: {chamarDividir(dividir)}</p>
    </div>
  );
};

export default Calculadora;
