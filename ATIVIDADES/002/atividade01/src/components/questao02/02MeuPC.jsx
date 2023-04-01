const PlacaMae = ({ nome, preco }) => {
  return (
    <div>
      <h1>PlacaMae</h1>
      <h3>Nome: {nome}</h3>
      <h3>Preco: {preco}</h3>
    </div>
  );
};

const Memoria = ({ nome, preco }) => {
  return (
    <div>
      <h1>Memoria</h1>
      <h3>Nome: {nome}</h3>
      <h3>Preco: {preco}</h3>
    </div>
  );
};

const PlacadeVideo = ({ nome, preco }) => {
  return (
    <div>
      <h1>PlacadeVideo</h1>
      <h3>Nome: {nome}</h3>
      <h3>Preco: {preco}</h3>
    </div>
  );
};

export { PlacaMae, Memoria, PlacadeVideo };
