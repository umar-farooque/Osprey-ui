import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Typography } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F5F9FF",
    color: theme.palette.primary.main,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // "&:nth-of-type(odd)": {
  //   backgroundColor: theme.palette.action.hover,
  // },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name,
  schoolName,
  intakeDate,
  applicationStarted,
  paymentStatus,
  action
) {
  return {
    name,
    schoolName,
    intakeDate,
    applicationStarted,
    paymentStatus,
    action,
  };
}
const column = [
  "Program Name",
  "School Name",
  "Intake Start Date",
  "Application Started",
  "Payment Status",
  "Action",
];

const rows = [
  createData(
    "Geo Science",
    "Vancouver Island University",
    "Sep.2022 ",
    "Oct 2021",
    "Not Paid",
    "NA"
  ),
  createData(
    "Pharmacy Technician",
    "Lambton College",
    "Sep.2022 ",
    "Oct 2021",
    "Not Paid",
    "NA"
  ),
];

export default function applications() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>My Applied Applications</h1>
      <Box sx={{ px: 4 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                {column.map((c) => (
                  <StyledTableCell align="center" key={c}>
                    {c}
                  </StyledTableCell>
                ))}
                {/* <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                <StyledTableCell align="right">Calories</StyledTableCell>
                <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                <StyledTableCell align="right">
                  Protein&nbsp;(g)
                </StyledTableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.schoolName}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.intakeDate}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.applicationStarted}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.paymentStatus}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <EditIcon color="primary" />
                    <DeleteIcon color="primary" />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}
