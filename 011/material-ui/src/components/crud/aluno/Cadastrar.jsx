import {
  Box,
  TextField,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cadastrar = () => {
  const [nome, setNome] = useState("");
  /*
   * Cria um estado curso para armazenar o valor do curso selecionado
   * no select com o campo curso
   */
  const [curso, setCurso] = useState("CC");
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
        <FormControl sx={{ marginTop: 2, width: "100%" }} required>
          <InputLabel id="select-tit-label">Curso</InputLabel>
          <Select
            labelId="select-tit-label"
            label="Curso"
            value={curso}
            onChange={(event) => setCurso(event.target.value)}
          >
            {/*
             * Faz um map em um vetor com a sigla dos cursos e
             * coloca os valores em um MenuItem para serem selecionados na interface
             * Com isso só permite que o usuário só coloque os cursos listados
             */}
            {["DD", "SI", "CC", "ES", "EC", "RC"].map((value, key) => (
              /*
               * Usa a key para identificar o curso selecionado
               * A key serve como um indice para identificar unicamente um componente no map,
               * é usado pelo JS para fazer essa identificação e
               * conseguir obter o valor que foi selecionado
               */
              <MenuItem value={value} key={key}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
