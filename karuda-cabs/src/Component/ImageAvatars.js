import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import rounded1 from '../images/rounded1.jpg'
import rounded2 from '../images/rounded2.jpg'
import rounded3 from '../images/rounded3.jpg'
import Card from '@material-ui/core/Card';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  imageSize : {
    width : '200px',
    height : '200px'
  },
  imageText :{
    marginLeft : '25%'
  }
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    //TamilNadu, Pondy, Kerala, Karnataka, Andhra Pradesh & Telangana.
    <Card style={{marginTop:'2%' ,}}>    
    <div >
     <div style={{textAlign : 'center'}}>
       <h2 style={{ marginBottom : '2%'}}>Our Cab Service available around</h2>
       </div> 
  
      <Grid container lg={12} sm={12} md={12} justify={'center'} style={{ marginLeft : '1.5%'}}>
        <Grid item lg={2} sm={12} md={6} >
          <Avatar className={classes.imageSize} alt="Remy Sharp" src={rounded1} />
          <h3 className={classes.imageText} style={{marginLeft : '23%'}}>TamilNadu</h3>
        </Grid>
        <Grid item lg={2} sm={12} md={6}>
        <Avatar className={classes.imageSize}alt="Travis Howard" src={rounded2} />
        <h3 className={classes.imageText} style={{marginLeft : '30%'}}>Pondy</h3>

        </Grid>
        <Grid item lg={2} sm={12} md={6}>
        <Avatar className={classes.imageSize} alt="Cindy Baker" src={rounded3} />
        <h3 className={classes.imageText} style={{marginLeft : '30%'}}>Kerala</h3>

        </Grid>
        <Grid item lg={2} sm={12} md={6}>
        <Avatar className={classes.imageSize} alt="Remy Sharp" src={rounded1} />
        <h3 className={classes.imageText} style={{marginLeft : '25%'}}>Karnataka</h3>

        </Grid>
        <Grid item lg={2} sm={12} md={6}>
        <Avatar className={classes.imageSize}alt="Travis Howard" src={rounded2} />
        <h3 className={classes.imageText} style={{marginLeft : '15%'}}>Andhra Pradesh</h3>

        </Grid>
        <Grid item lg={2} sm={12} md={6}>
        <Avatar className={classes.imageSize} alt="Cindy Baker" src={rounded3} />
        <h3 className={classes.imageText}style={{marginLeft : '23%'}} >Telangana</h3>

        </Grid>
      </Grid>
   
    </div>
    </Card>
  );
}