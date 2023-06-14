import {
  TableContainer,
  Typography,
  Table,
  Paper,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Listar = () => {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3005/aluno/listar`)
      .then((response) => setAlunos(response.data))
      .catch((error) => console.log(error));
  }, []);

  const deleteAlunoById = (id) => {
    if (window.confirm("Deseja excluir")) {
      axios
        .delete(`http://localhost:3005/aluno/delete/${id}`)
        .then((response) => {
          alert(`Aluno ${response.data.nome} excluído com sucesso`);
          setAlunos(alunos.filter((professor) => professor._id !== id));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <Typography variant="h5" fontWeight="bold">
        Listar Aluno
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 4, mb: 4 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">ID</StyledTableCell>
              <StyledTableCell>NOME</StyledTableCell>
              <StyledTableCell>CURSO</StyledTableCell>
              <StyledTableCell>IRA</StyledTableCell>
              <StyledTableCell>AÇÕES</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {alunos.map(({ _id, nome, curso, ira }) => {
              return (
                <StyledTableRow key={_id}>
                  <StyledTableCell>{_id}</StyledTableCell>
                  <StyledTableCell>{nome}</StyledTableCell>
                  <StyledTableCell>{curso}</StyledTableCell>
                  <StyledTableCell>{ira}</StyledTableCell>
                  <StyledTableCell>
                    <Box>
                      <IconButton
                        aria-label="edit"
                        color="primary"
                        component={Link}
                        to={`/editarAluno/${_id}`}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        aria-label="delete"
                        color="error"
                        onClick={() => deleteAlunoById(_id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Listar;
