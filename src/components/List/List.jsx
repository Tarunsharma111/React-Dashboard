import React from "react";
import "./list.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [
  {
    id:2112123323566,
    product: "Nexus 32Inch TV",
    customer: "Tanuj Sharma",
    date: "27th December",
    amount: 300,
    method: "cash on delivery",
    status: "Approved" 
  },
  {
    id:2112123323566,
    product: "Nexus 32Inch TV",
    customer: "Tanuj Sharma",
    date: "27th December",
    amount: 300,
    method: "cash on delivery",
    status: "Pending" 
  },
  {
    id:2112123323566,
    product: "Nexus 32Inch TV",
    customer: "Tanuj Sharma",
    date: "27th December",
    amount: 300,
    method: "cash on delivery",
    status: "Approved" 
  },
  {
    id:2112123323566,
    product: "Nexus 32Inch TV",
    customer: "Tanuj Sharma",
    date: "27th December",
    amount: 300,
    method: "cash on delivery",
    status: "Approved" 
  },
  {
    id:2112123323566,
    product: "Nexus 32Inch TV",
    customer: "Tanuj Sharma",
    date: "27th December",
    amount: 300,
    method: "cash on delivery",
    status: "Approved" 
  },
  {
    id:2112123323566,
    product: "Nexus 32Inch TV",
    customer: "Tanuj Sharma",
    date: "27th December",
    amount: 300,
    method: "cash on delivery",
    status: "Approved" 
  },
  {
    id:2112123323566,
    product: "Nexus 32Inch TV",
    customer: "Tanuj Sharma",
    date: "27th December",
    amount: 300,
    method: "cash on delivery",
    status: "Approved" 
  },
];

const List = () => {
  return (
    <div className="list">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Tracking ID</TableCell>
              <TableCell className="tableCell">Product</TableCell>
              <TableCell className="tableCell">Customer</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Amount</TableCell>
              <TableCell className="tableCell">Payment Method</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} >
                <TableCell className="tableCell">{row.id}</TableCell>
                <TableCell className="tableCell">{row.product}</TableCell>
                <TableCell className="tableCell">{row.customer}</TableCell>
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell className="tableCell">{row.amount}</TableCell>
                <TableCell className="tableCell">{row.method}</TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span>
                  </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default List;
