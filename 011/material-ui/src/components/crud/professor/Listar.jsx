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
  const professores = [
    { id: 0, nome: "Vito Corleone", curso: "SI", titulacao: "MEST" },
    { id: 1, nome: "Michael Corleone", curso: "DD", titulacao: "GRAD" },
    { id: 2, nome: "Luca Brasi", curso: "SI", titulacao: "MEST" },
    { id: 3, nome: "Kay Adams", curso: "SI", titulacao: "DOUT" },
    { id: 4, nome: "Peter Clemenza", curso: "CC", titulacao: "MEST" },
  ];

  const deleteProfessorById = (id) => {
    if (window.confirm("Deseja excluir")) {
      alert(`Professor ${id} exluído com sucesso`);
    }
  };

  return (
    <>
      <Typography variant="h5" fontWeight="bold">
        Listar Professor
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 4, mb: 4 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">ID</StyledTableCell>
              <StyledTableCell>NOME</StyledTableCell>
              <StyledTableCell>CURSO</StyledTableCell>
              <StyledTableCell>TITULAÇÃO</StyledTableCell>
              <StyledTableCell>AÇÕES</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {professores.map(({ id, nome, curso, titulacao }) => {
              return (
                <StyledTableRow key={id}>
                  <StyledTableCell>{id}</StyledTableCell>
                  <StyledTableCell>{nome}</StyledTableCell>
                  <StyledTableCell>{curso}</StyledTableCell>
                  <StyledTableCell>{titulacao}</StyledTableCell>
                  <StyledTableCell>
                    <Box>
                      <IconButton
                        aria-label="edit"
                        color="primary"
                        component={Link}
                        to={`/editarProfessor/${id}`}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        aria-label="delete"
                        color="error"
                        onClick={() => deleteProfessorById(id)}
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
