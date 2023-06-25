import { Box, TextField, Typography, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cadastrar = () => {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [ira, setIra] = useState("0.0");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const aluno = { nome, curso, ira };
    axios
      .post(`http://localhost:3005/aluno/register`, aluno)
      .then((response) => {
        alert(`Aluno ${response.data.nome} criado com sucesso!`);
        navigate("/listarAluno");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Typography variant="h5" fontWeight="bold">
        Cadastrar Aluno
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
          margin="normal"
          required
          fullWidth
          id="ira"
          label="IRA"
          name="ira"
          type="number"
          inputProps={{
            maxLength: 10,
            step: "0.1",
          }}
          onChange={(e) => setIra(parseFloat(e.target.value))}
        />

        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button variant="contained" type="submit">
            Cadastrar
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Cadastrar;
