import React from 'react'
import Header from '../components/header';
import ItemsTables from '../components/itemsTable';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

function Items() {
  const history = useHistory();
  const NewBillHandler = () =>{
    history.push("/bill")
  }
  
  return (
    <Grid>
      <Grid container style={{marginBottom:"20px"}}>
        <Header/>
      </Grid>
      <Grid>
        <ItemsTables/>
      </Grid>
      <Grid>
        <Button onClick={NewBillHandler} style={{backgroundColor:"#535886",width:"18vw",height:"7vh",fontSize:"1.7rem",color:"white",marginTop:"2vh"}}>PLACE ORDER</Button>
      </Grid>
    </Grid>
  )
}

export default Items
