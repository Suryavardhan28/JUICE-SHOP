import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function BillHeader() {
  const history = useHistory();
  const classes = useStyles();
  const BackToOrderHandler = () =>{
    
    history.push("/items")
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{background:"#1D1D44",borderRadius:"10px"}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Button color="inherit" onClick={BackToOrderHandler}><ArrowBackIosIcon style={{width:"1.2rem"}}></ArrowBackIosIcon>Back to order</Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
