// const MyProps = (props) => {
//   return (
//     <div>
//       <h1>MyProps</h1>
//       <p>Meu nome é: {props.nome}</p>
//       <p>Meu curso é: {props.curso}</p>
//     </div>
//   );
// };

// const MyProps = (props) => {
//   let nome = props.nome;
//   let curso = props.curso;

//   return (
//     <div>
//       <h1>MyProps</h1>
//       <p>Meu nome é: {nome}</p>
//       <p>Meu curso é: {curso}</p>
//     </div>
//   );
// };

// const MyProps = (props) => {
//   let { nome, curso } = props;
//   return (
//     <div>
//       <h1>MyProps</h1>
//       <p>Meu nome é: {nome}</p>
//       <p>Meu curso é: {curso}</p>
//     </div>
//   );
// };

const MyProps = ({ nome, curso }) => {
  return (
    <div>
      <h1>MyProps</h1>
      <p>Meu nome é: {nome}</p>
      <p>Meu curso é: {curso}</p>
    </div>
  );
};

export default MyProps;
