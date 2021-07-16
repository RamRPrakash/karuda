import React , {useState , useEffect} from 'react';
import { useHistory } from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MobAppBar from './MobAppBar';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(-1),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function NewAppBar(props) {
  const history = useHistory();
  const classes = useStyles();
  const [windowWidth , setWindowSize] = useState()

  useEffect(() => {
   
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 console.log({windowWidth})
  return (
    <div className={classes.root} style={{width : '100%' , display : 'flex' , direction : 'row'}}>
      <AppBar style={{backgroundColor : '#55bde3' , display :windowWidth && windowWidth.width > 700 ? 'block' : 'none' }} position="fixed">
        <Toolbar >
           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
           <SmartphoneIcon/>
          </IconButton>
          <Typography variant="h7" style={{verticalAlign : 'middle' ,  marginLeft : '0.2%'}}>
          <span>9384841107</span>  <span style={{marginLeft : '7px'}}>|</span>  <span style={{marginLeft : '7px'}}>9940035922</span>
        </Typography>
        <IconButton edge="start" className={`${classes.menuButton} `} style={{marginLeft : '3%', verticalAlign : 'middle' , fontSize : '32px'}} color="inherit" aria-label="menu">
           <MailOutlineIcon/>
        </IconButton>
        <Typography variant="h7" className={classes.title} style={{verticalAlign : 'middle' , marginLeft : '0.5%'}}>
                karudaCabs@gmail.com
        </Typography>



          <div style={{ display : 'flex' , width : '10%' , justifyContent:'space-between'}}>
          <FacebookIcon/>
          <TwitterIcon/>
          <InstagramIcon/>
          <LinkedInIcon/>
          </div>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      <AppBar style={{ display :windowWidth && windowWidth.width > 700 ?'block' : 'none' , backgroundColor : 'white' , color : '#55bde3' , marginTop : windowWidth && windowWidth.width > 700 ?'4%' :'17%'}} position="fixed" >
        <Toolbar style={{paddingTop : '0%' , paddingBottom : '0%' , paddingRight : '0%'}}>
          <Box>
            <img src="karuda.png" style={{height:'70px',width:'40% '}}/>
          </Box>
          <Typography variant="h6" className={classes.title}>
            <Box display="flex" justifyContent="space-between" m={1} p={1} bgcolor="background.paper" style={{cursor : 'pointer' , marginLeft : '18%'}}>
              <Box p={1} onClick={()=>{
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
              });
                history.push('/NewHome')
              }} >
               <b style={{lineHeight:'60px' , position : 'relative' , top : '3px'}}> Home</b>
              </Box>
              {/* <Box p={1} onClick={()=>{
                history.push('/KarudaCar')
              }} >
               <b> ABOUT US </b>
              </Box> */}
              <Box p={1} onClick={()=>{
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
              });
                history.push('/KarudaOnlineBooking')
              }}>
               <b style={{lineHeight:'60px', position : 'relative' , top : '3px'}}> Online Booking </b>
              </Box>
              <Box p={1} onClick={()=>{
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
              });
                history.push('/Tariff')
              }}>
               <b style={{lineHeight:'60px', position : 'relative' , top : '3px'}}> Tariff </b>
              </Box>
              <Box p={1} onClick={()=>{
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
              });
                history.push('/KarudaCheckBooking')
              }}>
               <b style={{lineHeight:'60px', position : 'relative' , top : '3px'}}> Contact Us </b>
              </Box>
              <Box p={1} style={{marginTop : '0.5%'}} >
              <Button variant="contained" style={{backgroundColor : '#55bde3' , color : 'white' ,marginTop:'0.5%' , height : '46px' }} onClick={()=>{
                window.scrollTo({
                  top: 0,
                  behavior: "smooth"
              });
                history.push('/KarudaOnlineBooking')
              }}>
                Book Now
              </Button>
              </Box>
            </Box>  
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>

      <MobAppBar props={history} />
    </div>
  );
}
