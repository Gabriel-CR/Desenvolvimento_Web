import { Box, Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const login = () => {
    const login = { email, senha };
    axios
      .post(`http://localhost:3005/login/signin`, login)
      .then((res) => {
        console.log(res.data.res);
        if (res.data.res) {
          navigate("/listarAluno");
        } else {
          alert("senha incorreta");
        }
      })
      .catch((err) => {
        console.log("deu ruim");
      });
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 8,
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          autoFocus
          label="Endereço de e-mail"
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Senha"
          id="password"
          name="password"
          type="password"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
        />
        <Button fullWidth variant="contained" sx={{ my: 2 }} onClick={login}>
          Sign in
        </Button>
      </Box>
    </Container>
  );
};

export default Signin;
