import {
  Box,
  TextField,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Editar = () => {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [titulacao, setTitulacao] = useState("GRAD");
  const [ai, setAi] = useState({ cg: false, mc: false, al: false, es: false });
  const navigate = useNavigate();

  let { id } = useParams();

  useEffect(() => {
    // const { nome, curso, titulacao, ai } = getProfessorById(id);
    axios
      .get(`http://localhost:3005/professor/recover/${id}`)
      .then((response) => {
        setNome(response.data.nome);
        setCurso(response.data.curso);
        setTitulacao(response.data.titulacao);
        setAi(response.data.ai);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const professor = { nome, curso, titulacao, ai };
    axios
      .put(`http://localhost:3005/professor/update/${id}`, professor)
      .then((response) => {
        alert(`Professor ${response.data.nome} atualizado com sucesso!`);
        navigate("/listarProfessor");
      })
      .catch((error) => console.log(error));
  };

  const handleCheckbox = (event) => {
    setAi({ ...ai, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <Typography variant="h5" fontWeight="bold">
        Editar Professor {id}
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

        <FormControl sx={{ marginTop: 2, width: "100%" }} required>
          <InputLabel id="select-tit-label">Titulação</InputLabel>
          <Select
            labelId="select-tit-label"
            label="Titulação"
            value={titulacao}
            onChange={(event) => setTitulacao(event.target.value)}
          >
            <MenuItem value="GRAD">Graduação</MenuItem>
            <MenuItem value="MEST">Mestrado</MenuItem>
            <MenuItem value="DOUT">Doutorado</MenuItem>
          </Select>
        </FormControl>

        <FormControl
          sx={{ mt: 2, ml: 2 }}
          component="fieldset"
          variant="standard"
        >
          <FormLabel component="legend" sx={{ fontSize: 12, mb: 2 }}>
            Áreas de Interesse
          </FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={ai.cg} name="cg" onChange={handleCheckbox} />
              }
              label="Computaçõa Gráfica"
            />
            <FormControlLabel
              control={
                <Checkbox checked={ai.mc} name="mc" onChange={handleCheckbox} />
              }
              label="Matemática Compultacional"
            />
            <FormControlLabel
              control={
                <Checkbox checked={ai.al} name="al" onChange={handleCheckbox} />
              }
              label="Algoritmos"
            />
            <FormControlLabel
              control={
                <Checkbox checked={ai.es} name="es" onChange={handleCheckbox} />
              }
              label="Engenharia de Software"
            />
          </FormGroup>
        </FormControl>

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
