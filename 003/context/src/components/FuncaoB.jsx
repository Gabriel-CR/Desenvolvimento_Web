import MyColor from "./MyContext";

const FuncaoB = () => {
  return (
    <MyColor.Consumer>
      {({ cor }) => {
        return <h1 style={{ backgroundColor: cor }}>Funcao B</h1>;
      }}
    </MyColor.Consumer>
  );
};

export default FuncaoB;
