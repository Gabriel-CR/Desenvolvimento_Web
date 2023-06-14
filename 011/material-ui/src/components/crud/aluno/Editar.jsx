import { Box, TextField, Typography, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Editar = () => {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [ira, setIra] = useState(0);
  const navigate = useNavigate();

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3005/aluno/recover/${id}`)
      .then((response) => {
        setNome(response.data.nome);
        setCurso(response.data.curso);
        setIra(response.data.ira);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const aluno = { nome, curso, ira };
    axios
      .put(`http://localhost:3005/aluno/update/${id}`, aluno)
      .then((response) => {
        alert(`Aluno ${response.data.nome} atualizado com sucesso!`);
        navigate("/listarAluno");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Typography variant="h5" fontWeight="bold">
        Editar ALuno {id}
      </Typography>

      <Box sx={{ width: "80%" }} component="form" onSubmit={handleSubmit}>
        <TextField
          required
          fullWidth
          autoFocus
          margin="normal"
          label="Nome Completo"
          id="nome"
          name="nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
        <TextField
          required
          fullWidth
          margin="normal"
          label="Curso"
          id="curso"
          name="curso"
          value={curso}
          onChange={(event) => setCurso(event.target.value)}
        />
        <TextField
          required
          fullWidth
          margin="normal"
          label="Ira"
          id="ira"
          name="ira"
          value={ira}
          onChange={(event) => setIra(event.target.value)}
        />

        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button variant="contained" type="submit">
            Atualizar
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Editar;
