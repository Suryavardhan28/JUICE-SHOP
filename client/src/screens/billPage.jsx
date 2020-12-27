import { Grid } from '@material-ui/core';
import React from 'react'
import BillHeader from '../components/billHeader'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0),
  createData('Ice cream sandwich', 237, 9.0),
  createData('Eclair', 262, 16.0),
  createData('Cupcake', 305, 3.7),
  createData('Gingerbread', 356, 16.0),
];

function BillPage() {
  const classes = useStyles();
  const { newOrder } = useSelector(
    (state) => state.order
  );
  const { newBill } = useSelector(
    (state) => state.order
  );
  const { newId } = useSelector(
    (state) => state.order
  );

  const {data}=newOrder;
  const {qty}=newBill;
  const {billId}=newId;

  return (
    <Grid container>
      <Grid item container style={{marginBottom:"2vh"}}>
        <BillHeader/>
      </Grid>
      <Grid item container>
        <TableContainer component={Paper}>
          <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead style={{background:"#f0e9e9"}}>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell >Quantity</TableCell>
                <TableCell >Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow>
                  <TableCell component="th" scope="row">
                    {row.juice_name}
                  </TableCell>
                  <TableCell >{qty}</TableCell>
                  <TableCell >{qty*row.juice_price}</TableCell>
                </TableRow>     
              ))}        
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}

export default BillPage
