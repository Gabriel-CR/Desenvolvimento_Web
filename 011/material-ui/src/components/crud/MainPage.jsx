import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyMenu from "./MyMenuv1";
import { Container } from "@mui/material";

import CadastrarProfessor from "./professor/Cadastrar";
import EditarProfessor from "./professor/Editar";
import ListarProfessor from "./professor/Listar";
import CadastrarAluno from "./aluno/Cadastrar";
import EditarAluno from "./aluno/Editar";
import ListarAluno from "./aluno/Listar";
import AlunoAprovado from "./aluno/AlunoAprovado";

import Signin from "../signin/Signin";

const MainPage = () => {
  return (
    <BrowserRouter>
      <MyMenu />
      <Container
        sx={{
          mt: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Routes>
          <Route path="/" element={<Signin />} />

          <Route path="/cadastrarProfessor" element={<CadastrarProfessor />} />
          <Route path="listarProfessor" element={<ListarProfessor />} />
          <Route path="editarProfessor/:id" element={<EditarProfessor />} />

          <Route path="cadastrarAluno" element={<CadastrarAluno />} />
          <Route path="listarAluno" element={<ListarAluno />} />
          <Route path="editarAluno/:id" element={<EditarAluno />} />
          <Route path="alunoAprovado" element={<AlunoAprovado />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default MainPage;
