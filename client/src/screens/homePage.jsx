import React from 'react'
import { Grid } from '@material-ui/core';
import Header from '../components/header';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import fruits from '../images/fruits.jpg';

function HomePage() {
  return (
   <Grid container >
     <Grid item xs={12}>
      <Header/>
     </Grid>
     <Grid item container direction="row" justify="center" alignItems="center" style={{}}>
      <Card style={{width:"75vw",marginTop:"8vh",height:"68vh",background:`url(${fruits}) no-repeat center center/cover`}}>
        <CardContent>
          <p style={{margin:"20px",fontFamily:"sans-serif",fontSize:"4rem",textAlign:"center",fontWeight:"500",color:"#000000",backgroundColor:"#F7F7F7",borderRadius:"10px",opacity:"0.9"}}>SJ JUICE CENTER</p>
        </CardContent>
        <CardActions>
          <Button style={{margin:"auto",backgroundColor:"#535886",marginTop:"30vh",width:"18vw",height:"7vh",fontSize:"1.7rem",color:"white"}}>NEW ORDER</Button>
        </CardActions>
      </Card>
    </Grid>
   </Grid>
  
  );
}

export default HomePage
