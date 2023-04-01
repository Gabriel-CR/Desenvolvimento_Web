import React from "react";
import "./01MeusDados.modules.css";

// function
// function MeusDados() {
//   return (
//     <div>
//       <h1>Nome: Carlos Gabriel de Castro Rodrigues</h1>
//       <h1>Curso: Ciência da Computação</h1>
//       <h1>Universidade: Universidade Federal do Ceará</h1>
//     </div>
//   );
// }

// arrow function com return
const MeusDados = () => {
  return (
    <div className="principal">
      <h1>Nome: Carlos Gabriel de Castro Rodrigues</h1>
      <h1>Curso: Ciência da Computação</h1>
      <h1>Universidade: Universidade Federal do Ceará</h1>
    </div>
  );
};

// arrow function sem return
// const MeusDados = () =>
//   <div>
//     <h1>Nome: Carlos Gabriel de Castro Rodrigues</h1>
//     <h1>Curso: Ciência da Computação</h1>
//     <h1>Universidade: Universidade Federal do Ceará</h1>
//   </div>;

// classes
// class MeusDados extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Nome: Carlos Gabriel de Castro Rodrigues</h1>
//         <h1>Curso: Ciência da Computação</h1>
//         <h1>Universidade: Universidade Federal do Ceará</h1>
//       </div>
//     );
//   }
// }

export default MeusDados;
