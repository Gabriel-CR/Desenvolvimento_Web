import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyMenu from "./MyMenuv1";
import { Container } from "@mui/material";

import CadastrarProfessor from "./professor/Cadastrar";
import EditarProfessor from "./professor/Editar";
import ListarProfessor from "./professor/Listar";

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
          <Route path="cadastrarProfessor" element={<CadastrarProfessor />} />
          <Route path="listarProfessor" element={<ListarProfessor />} />
          <Route path="editarProfessor/:id" element={<EditarProfessor />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default MainPage;
