const SaveData = () => {
  const saveData = () => {
    const aluno = {
      matricula: "123456",
      nome: "Gabriel",
      curso: "Ciência da Computação",
    };

    // sessionStorage.setItem(aluno.matricula, JSON.stringify(aluno));
    localStorage.setItem(aluno.matricula, JSON.stringify(aluno));
  };

  return (
    <>
      <h3>Salvando os dados...</h3>
      {saveData()}
    </>
  );
};

const LoadData = () => {
  const loadData = () => {
    const { matricula, nome, curso } = JSON.parse(
      localStorage.getItem("123456")
    );

    return (
      <>
        <p>Matrícula: {matricula} </p>
        <p>Nome: {nome} </p>
        <p>Curso: {curso} </p>
      </>
    );
  };

  return (
    <>
      <h3>Carregando dados</h3>
      {loadData()}
    </>
  );
};

export { SaveData, LoadData };
