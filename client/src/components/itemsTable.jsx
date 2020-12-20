import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159,1212),
  createData('Ice cream sandwich', 237,1313),
  createData('Eclair', 262 ,1313),
  createData('Cupcake', 305,1313),
  createData('Gingerbread', 356,131331),
];

const useStyles = makeStyles({
  minWidth:700,
});

export default function ItemsTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow >
            <StyledTableCell>NAME</StyledTableCell>
            <StyledTableCell >OUANTITY</StyledTableCell>
            <StyledTableCell >PRICE</StyledTableCell>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell>ADD</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell ><div>
           <select name="QUANTITY">
               <option value="0" selected>0</option>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="4">4</option>
               <option value="5">5</option>
               <option value="6">6</option>
               <option value="7">7</option>
               <option value="8">8</option>
               <option value="9">9</option>
               <option value="10">10</option>
           </select>
       </div>
       </StyledTableCell>
              <StyledTableCell >{row.fat}</StyledTableCell>
              <StyledTableCell >{row.carbs}</StyledTableCell>
              <StyledTableCell ><AddCircleIcon/></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
