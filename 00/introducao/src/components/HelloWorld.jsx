import React from "react";

// function HelloWorld() {
//   return (
//     <div>
//       <h2>Function</h2>
//     </div>
//   );
// }

// const HelloWorld = () => {
//   return (
//     <div>
//       <h2>Arrow function</h2>
//     </div>
//   );
// };

// const HelloWorld = () =>
//   <div>
//     <h2>Único componente</h2>
//   </div>

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h2>Classes</h2>
      </div>
    );
  }
}

export default HelloWorld;
