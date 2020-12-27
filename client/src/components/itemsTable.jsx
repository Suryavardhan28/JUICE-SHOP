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
import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { order } from '../reducers/orderSlice';
import { useDispatch } from 'react-redux';

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

const useStyles = makeStyles({
  minWidth:700,
});


export default function ItemsTables() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { newOrder } = useSelector(
    (state) => state.order
  );
  const {data}=newOrder;
  const [value,setValue] = React.useState("");
  const [id,setId] = React.useState("");
  const CalculatrPrice = (e) =>{
    setValue(e.target.value)
    setId(e.target.id)
  }
  
  const AddToCart = () =>{
    dispatch (order (value,id))
  }
 
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow >
            <StyledTableCell>NAME</StyledTableCell>
            <StyledTableCell >OUANTITY</StyledTableCell>
            <StyledTableCell >PRICE PER ITEM</StyledTableCell>
            <StyledTableCell>ADD</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                {row.juice_name}
              </StyledTableCell>
              <StyledTableCell ><div>
           <select  onChange={CalculatrPrice} id={row.juice_id}>
               <option value={0}  selected>0</option>
               <option value={1} >1</option>
               <option value={2} >2</option>
               <option value={4} >4</option>
               <option value={5} >5</option>
               <option value={6} >6</option>
               <option value={7} >7</option>
               <option value={8} >8</option>
               <option value={9} >9</option>
               <option value={10} >10</option>
           </select>
       </div>
       </StyledTableCell>
              <StyledTableCell >{row.juice_price}</StyledTableCell>
              <StyledTableCell ><Button onClick={AddToCart}><AddCircleIcon/></Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
