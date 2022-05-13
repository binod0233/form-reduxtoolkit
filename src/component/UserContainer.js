import React, { useEffect, useState } from "react";
import { fetchUserCategory, deleteUserCategory } from "../redux";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FormContainer from "./FormContainer";
import { Button } from "@mui/material";

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
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const UserContainer = () => {
  const [id, setId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchUserCategory());
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch]);

  const allUserCategory = useSelector((state) => state.user.userCategory);

  console.log(allUserCategory);
  return id === null ? (
    <div className="UserContainer">
      <h1>UserContainer</h1>
      <FormContainer data={id} />

      <br />
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name </StyledTableCell>
              <StyledTableCell align="right">Layout</StyledTableCell>
              <StyledTableCell align="right">Capacity</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Image</StyledTableCell>
              <StyledTableCell align="right">Update/Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allUserCategory.map((values) => (
              <StyledTableRow key={values.id}>
                <StyledTableCell component="th" scope="values">
                  {values.name}
                </StyledTableCell>
                <StyledTableCell align="right">{values.layout}</StyledTableCell>
                <StyledTableCell align="right">
                  {values.capacity}
                </StyledTableCell>
                <StyledTableCell align="right">{values.status}</StyledTableCell>
                <StyledTableCell align="right">
                  <img src={values.image} alt="req" height="60px" />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: "20px" }}
                    onClick={() => setId(values.id)}
                  >
                    UPDATE
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => dispatch(deleteUserCategory(values.id))}
                  >
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  ) : (
    <>
      <FormContainer data={id} />
      <br />
      <Button variant="contained" color="secondary" onClick={() => setId(null)}>
        Home
      </Button>
    </>
  );
};
export default UserContainer;
