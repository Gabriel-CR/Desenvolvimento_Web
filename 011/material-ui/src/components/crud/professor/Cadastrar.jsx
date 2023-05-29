import { Box, TextField, Typography, Button } from "@mui/material";
import { useState } from "react";

const Cadastrar = () => {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ nome, curso });
  };

  return (
    <>
      <Typography variant="h5" fontWeight="bold">
        Cadastrar Professor
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
          onChange={(event) => setNome(event.target.value)}
        />
        <TextField
          required
          fullWidth
          margin="normal"
          label="Curso"
          id="curso"
          name="curso"
          onChange={(event) => setCurso(event.target.value)}
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
