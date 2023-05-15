import codeimage from "../img/code.png";

const Questao04 = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>Questao 04</h2>
      <p
        style={{
          width: "50%",
          textAlign: "justify",
        }}
      >
        O uso de contextos pode ser muito útil quando se tem uma aplicação com
        muitos componentes e há uma comunicação entre eles, ou seja, quando um
        componente precisa passar informações para outro componente.
      </p>
      <p
        style={{
          width: "50%",
          textAlign: "justify",
        }}
      >
        Sem o uso de contextos essa comunicação seria feita com o uso de props,
        porém, com uma comunicação entre componentes mais frequente, essa
        passagem por props não seria a melhor opção, visto que teriamos dados
        sendo passados a vários componentes, que muita das vezes não precisariam
        desses dados, a fim de chegar ao componente que realmente faria uso
        desses dados.
      </p>
      <p
        style={{
          width: "50%",
          textAlign: "justify",
        }}
      >
        Temos um exemplo na seguinte situação:
      </p>
      <img src={codeimage} alt="code image" />
      <p
        style={{
          width: "50%",
          textAlign: "justify",
        }}
      >
        O Avo queria apenas mandar uma mensagem para o seu neto (Filho na
        imagem), porém teve que passar essa mensagem para o Pai, mesmo que a
        mensagem não fosse útil para ele, com o uso do contexto poderiamos ter
        essa comunicação Avo e neto diretamente, já que o contexto é acessível
        por todos os componentes filhos daquele que proveu o contexto.
      </p>
    </div>
  );
};

export default Questao04;
