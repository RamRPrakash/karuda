import React , {Component} from 'react'
import Button from '@material-ui/core/Button';
import { green,purple,orange } from '@material-ui/core/colors';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import * as emailjs from 'emailjs-com'
import KarudaSelectField from '../../../Component/KarudaSelectField'
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));
  
  const theme = createMuiTheme({
    palette: {
      primary: orange,
    },
  });
  
  var carListItem = [
    "Sedan - Dzire" ,
    "Sedan - Sunny" ,
    "Sedan - Xcent" ,
    "Sedan - Zest" ,
    "Sedan - Only Etios" ,
    "SUV - Xylo" ,
    "SUV - Marazzo" ,
    "SUV - Loggy" ,
    "SUV - Tavera" ,
    "SUV - Only Innova" ,   
]
    

class Trip extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name : '',
            selectedDate : new Date(),
            hour : new Date(),
            startDestination : '',
            endDestination : '',
            vehicle : '',
            phone : '',
            email : '' ,
            showCarList : false ,
            setColor : 'white',
            setTextColor : 'black',
            setColor1 : 'white',
            setTextColor1 : 'black' , 
            setWay : 0
         }
    }
    changeColor=(data)=>{
        this.setState({
           setColor : data ?  '#55bde3' : 'white',
           setTextColor : data ?  'white' : 'black',
        })    
       }
    changeColor1=()=>{
        this.setState({
           setColor1 : '#55bde3',
           setTextColor1 : 'white',
           setColor : 'white',
           setTextColor : 'black'
        })    
       }   

       showCar=()=>{
        this.setState({showCarList : !this.state.showCarList})
        this.props.getCarList(!this.state.showCarList)
       }
       updateWindowSize() {
        this.setState({
            windowWidth: window.innerWidth
        });
    }
    componentDidMount() {
        this.updateWindowSize();
        window.addEventListener("resize", this.updateWindowSize.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowSize.bind(this));
    }   
    storeMail=()=>{
        console.log('comimng')
       
        var data = {
            name : this.state.name,
            selectedDate : this.state.selectedDate,
            hour : this.state.hour,
            startDestination : this.state.startDestination,
            endDestination : this.state.endDestination,
            vehicle : this.props.selectedCar,
            phone : this.state.phone,
            email : this.state.email ,
            setWay : this.state.setWay
        }
        console.log(this.state.phone.length)
        console.log(this.state.name)
        
        if (!this.state.selectedDate){
            alert("Please Fill the Date")
            return
        }
        else if (this.state.name.length == ''){
            alert("Please Fill the Name")
            return
        }
        else if (this.state.startDestination.length == ''){
            alert('Please Fill Start Destination')
            return
        }
        else if (this.state.endDestination.length == ''){
            alert('Please Fill End Destination')
            return
        }
        // else if (this.state.vehicle.length == ''){
        //     alert('Please Select vehicle')
        //     return
        // }
        else if (this.state.phone.length == '' ){
            alert('Please Fill Mobile Number')
            return
        }
        else if ((this.state.phone.length < 10) && (this.state.phone.length > 11 || this.state.phone.length < 11 )){
            alert('Please Fill the Valid Phone Number')
            return
        }
        else if (this.state.email){
            var Regex = /^(([^*&%$#!^+='~`{}<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
            if (!Regex.test(this.state.email)){
                alert('Please Fill valid mail ')
                return
            }
            else {
                alert('Thanks you Booking karudacabs. Our Manager will contact you soon !!!')
                this.setState({
                    selectedDate: new Date(),
                    hour: new Date(),
                    startDestination: '',
                    endDestination: '',
                    vehicle: '',
                    phone: '',
                    email: ''
                })
                let templateParams = {
                    from_name: 'prakashparthi1996@gmail.com',
                    to_name: 'prakashparthi1996@gmail.com',
                    user_id: 'prakashparthi1996@gmail.com',
                    user_email: 'prakashparthi1996@gmail.com',
                    reply_to: data.email,
                    subject: this.state.setWay ? 'One way' : 'Round Trip' +'Booking Confirmation',
                    message_html: 'Karuda Booking Detail:',
                    Name: data.name,
                    Phone: data.phone,
                    Date: data.selectedDate,
                    Time: data.hour,
                    Start: data.startDestination,
                    End: data.endDestination,
                    Vehicle: data.vehicle + this.state.setWay ? 'One way' : 'Round Trip',
                    message_html: 'Happy Journey..!'    
                }
                emailjs.send(
                    'service_nzqo20s',
                    'template_xcax20u',
                    templateParams,
                    'user_uuJ5kVkOo8NtBGucRNg3S'
                )
            }
        }
        else{
            alert('Thanks you Booking karuacabs. Our Manager will contact you soon !!!')
            this.setState({
                selectedDate: new Date(),
                hour: new Date(),
                startDestination: '',
                endDestination: '',
                vehicle: '',
                phone: '',
                email: ''
            })
            let templateParams = {
                from_name: 'prakashparthi1996@gmail.com',
                to_name: 'prakashparthi1996@gmail.com',
                user_id: 'prakashparthi1996@gmail.com',
                user_email: 'prakashparthi1996@gmail.com',
                reply_to: data.email,
                subject: 'Booking Confirmation',
                message_html: 'Karuda Booking Detail:',
                Name: data.name , 
                Phone: data.phone,
                Date: data.selectedDate,
                Time: data.hour,
                Start: data.startDestination,
                End: data.endDestination,
                Vehicle: data.vehicle,

            }
            emailjs.send(
                'service_nzqo20s',
                'template_xcax20u',
                templateParams,
                'user_uuJ5kVkOo8NtBGucRNg3S'
            )

            // api.post('/sendMail', data).then(response => {
            //     console.log('sasffa')
            // })
        }
    }
    
    
    render() { 
        return ( 
            <React.Fragment>
                <Card  className="karudaBackGround" style={{margin:'0%' , backgroundColor : '#f6f6f6'}}>
                    <div style={{margin : '2%'}}>
                        <div style={{width : '100%'}}><h2 style={{textAlign : 'center'}}>Book Now</h2></div>
                <div style={{width : '100%' , display : 'flex' }}>    
                   
                        <Button variant="outlined"  style={{width : '50%' ,height:'57px', backgroundColor : this.state.setWay ? 'white' : '#55bde3' , color : this.state.setWay ? '#55bde3' : 'white' , fontSize : '20px' , borderRadius : '5px 0px 0px 5px' , border : '1px solid #55bde3'}} onClick={()=>this.setState({setWay : 0})}>
                        One Way
                        </Button>
                        <Button variant="outlined"  style={{width : '50%',height:'57px', color : this.state.setWay ? 'white' : '#55bde3' , backgroundColor: this.state.setWay ? '#55bde3' : 'white', fontSize : '20px' , borderRadius : '0px 5px 5px 0px' , border : '1px solid #55bde3'}} onClick={()=>this.setState({setWay : 1})}>
                        Round Trip
                        </Button>
                </div>
                <Grid style={{marginTop : '4%', marginLeft: this.state.windowWidth >= 700 ? '0%' : '10%'}} container xs={12} sm={12} md={12} lg={12}  >
                    <Grid  item xs={12} sm={12} md={6} lg={4}>
                     <div style={{fontSize : '22px' , marginBottom : '3%'}}>Name</div> <TextField value={this.state.name} onChange={(e) => {
                                            this.setState({
                                                name: e.target.value
                                            })
                                        }} style={{width : '300px' , }} id="outlined-basic"  variant="outlined" />
                    </Grid>
                    <Grid  item xs={12} sm={12} md={6} lg={4}>
                     <div style={{fontSize : '22px', marginBottom : '3%'}}>Phone</div>  <TextField value={this.state.phone} onChange={(e) => {
                                            var content = e.target.value
                                            content = content.replace(/[^0-9.]/gi, '')
                                            this.setState({
                                                phone: content
                                            })
                                        }} style={{width : '300px' , }} id="outlined-basic"  variant="outlined" />
                    </Grid>
                    <Grid  item xs={12} sm={12} md={6} lg={4}>
                     <div style={{fontSize : '22px', marginBottom : '3%'}}>Email</div> <TextField value={this.state.email} onChange={(e) => {
                                            this.setState({
                                                email: e.target.value
                                            })
                                        }} style={{width : '300px' , }} id="outlined-basic"  variant="outlined" />
                    </Grid>
                </Grid>
                <Grid style={{marginTop : '2%', marginLeft: this.state.windowWidth >= 700 ? '0%' : '10%'}} container xs={12} sm={12} md={12} lg={12}>
                    <Grid  item xs={12} sm={12} md={6} lg={4}>
                     <div style={{fontSize : '22px', marginBottom : '3%'}}>Date</div> 
                            {/* <TextField
                                id="datetime-local"
                                //label="Next appointment"
                                type="datetime-local"
                                defaultValue="2017-05-24T10:30"
                                //className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            /> */}
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <KeyboardDatePicker
                                                disableToolbar
                                                variant="inline"
                                                format="MM/dd/yyyy"
                                                color ="white"
                                                style={{ width: '300px' , color : 'white' , fontSize : '30px' ,  marginTop : '5%'}}
                                                margin="normal"
                                                id="date-picker-inline"
                                                label=""
                                                value={this.state.selectedDate}
                                                onChange={(day) => {
                                                    this.setState({ selectedDate: day })
                                                }}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />
                                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid  item xs={12} sm={12} md={6} lg={4}>
                     <div style={{fontSize : '22px', marginBottom : '3%'}}>Time</div> 
                            <MuiPickersUtilsProvider utils={DateFnsUtils} >
                                        <KeyboardTimePicker
                                            margin="normal"
                                            id="time-picker"
                                            label=""
                                            value={this.state.hour}
                                            onChange={(e) => {
                                                console.log(e)
                                                this.setState({
                                                    hour: e
                                                })
                                            }} 
                                            KeyboardButtonProps={{
                                                'aria-label': 'change time',
                                            }}
                                            style={{ color: '#f6f6f6', backgroundColor: '#f6f6f6', borderRadius: '10px', width: '300px' , height : '56px' , marginTop : '5%'}}
                                        />
                                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid   item xs={12} sm={6} md={4} lg={4} style={{display : this.state.windowWidth >= 700 ? 'none' : 'none' }}>
                        <Button variant="outlined" style={{color:'white',backgroundColor:'#55bde3',marginTop:'6%',width:'300px',height:'62px',fontFamily:'sans-serif',fontSize:'20px' , }} onClick={this.showCar} >Search</Button>
                    </Grid>
                    <Grid  item xs={12} sm={12} md={6} lg={4}>
                     <div style={{fontSize : '22px', marginBottom : '3%'}}>Start Destination</div> <TextField value={this.state.startDestination} id="outlined-basic" onChange={(e) => {
                                            this.setState({
                                                startDestination: e.target.value
                                            })
                                        }} style={{width : '300px' , }} id="outlined-basic"  variant="outlined" />
                    </Grid>
                </Grid>
                <Grid style={{marginTop : '2%',marginLeft: this.state.windowWidth >= 700 ? '0%' : '10%'}} container xs={12} sm={12} md={12} lg={12}>
                    
                    <Grid  item xs={12} sm={12} md={6} lg={4}>
                     <div style={{fontSize : '22px', marginBottom : '3%',  }}>End Destination</div>  <TextField  style={{height :'17px' }} value={this.state.endDestination} onChange={(e) => {
                                            this.setState({
                                                endDestination: e.target.value
                                            })
                                        }} style={{width : '300px' , }} id="outlined-basic"  variant="outlined" />
                    </Grid>
                    <Grid  item xs={12} sm={12} md={6} lg={4} style={{display : this.state.windowWidth > 700 ? 'block' : 'block' }}>
                        {/* <ThemeProvider theme={theme}>
                            <Button variant="contained" color="primary" style={{marginTop:'5%', color:'White',width:'300px'}} onClick={this.storeMail} >
                            Search
                            </Button>
                        </ThemeProvider> */}
                        <Button variant="outlined" style={{color:'white',backgroundColor:'#55bde3',marginTop:'9%',width:'300px',height:'62px',fontFamily:'sans-serif',fontSize:'20px'}} onClick={this.showCar} >Search</Button>

                    </Grid>
                </Grid>
                </div>
                </Card>
            </React.Fragment>
         
         );
    }
}
 
export default Trip;