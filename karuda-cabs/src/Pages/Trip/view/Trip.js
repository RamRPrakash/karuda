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
           setColor : data ?  '#A5032E' : 'white',
           setTextColor : data ?  'white' : 'black',
        })    
       }
    changeColor1=()=>{
        this.setState({
           setColor1 : '#A5032E',
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
                <Card style={{margin:'2%'}}>
                    <div style={{margin : '2%'}}>
                <div style={{width : '100%' , display : 'flex' }}>    
                   
                        <Button variant="outlined"  style={{width : '50%' , backgroundColor : this.state.setWay ? 'white' : '#A5032E' , color : this.state.setWay ? '#A5032E' : 'white'}} onClick={()=>this.setState({setWay : 0})}>
                        One Way
                        </Button>
                        <Button variant="outlined"  style={{width : '50%', color : this.state.setWay ? 'white' : '#A5032E' , backgroundColor: this.state.setWay ? '#A5032E' : 'white' }} onClick={()=>this.setState({setWay : 1})}>
                        Round Trip
                        </Button>
                </div>
                <Grid style={{marginTop : '2%'}} container xs={12} sm={12} md={12} lg={12}  >
                    <Grid  item xs={12} sm={12} md={6} lg={4}>
                     <div>Name</div> <TextField value={this.state.name} onChange={(e) => {
                                            this.setState({
                                                name: e.target.value
                                            })
                                        }} style={{width : '300px' , }} id="outlined-basic"  variant="outlined" />
                    </Grid>
                    <Grid  item xs={12} sm={12} md={6} lg={4}>
                     <div>Phone</div>  <TextField value={this.state.phone} onChange={(e) => {
                                            var content = e.target.value
                                            content = content.replace(/[^0-9.]/gi, '')
                                            this.setState({
                                                phone: content
                                            })
                                        }} style={{width : '300px' , }} id="outlined-basic"  variant="outlined" />
                    </Grid>
                    <Grid  item xs={12} sm={12} md={6} lg={4}>
                     <div>Email</div> <TextField value={this.state.email} onChange={(e) => {
                                            this.setState({
                                                email: e.target.value
                                            })
                                        }} style={{width : '300px' , }} id="outlined-basic"  variant="outlined" />
                    </Grid>
                </Grid>
                <Grid style={{marginTop : '2%'}} container xs={12} sm={12} md={12} lg={12}>
                    <Grid  item xs={12} sm={12} md={6} lg={4}>
                     <div>Date</div> 
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
                                                style={{ width: '300px' , color : 'white'}}
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
                     <div>Time</div> 
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
                                            style={{ color: 'white', backgroundColor: 'white', borderRadius: '10px', width: '300px' , height : '56px'}}
                                        />
                                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid   item xs={12} sm={6} md={4} lg={4} style={{display : this.state.windowWidth >= 700 ? 'block' : 'none' }}>
                     {/* <div>Choose vehicle</div> <KarudaSelectField 
                                            lebel=''
                                            backgroundColor = 'white'
                                            borderRadius= '10px'
                                            width = '300px'
                                            // width={ this.state.windowWidth >= 700 ? '370px' : '190px' }
                                            height = '60px'
                                            value={this.state.vehicle}
                                            menuData={carListItem}
                                            onChange={(e) => {
                                                console.log(e)


                                                this.setState({
                                                    vehicle: e.target.value
                                                })
                                              
                                            }}
                                            /> */}
                        {/* <ThemeProvider theme={theme}>
                            <Button variant="contained" color="primary" style={{marginTop:'6%', color:'White',width:'300px'}} onClick={this.storeMail} >
                            Search
                            </Button>
                        </ThemeProvider> */}
                        <button style={{color:'white',backgroundColor:'#A5032E',marginTop:'6%',width:'300px',height:'40px',fontFamily:'sans-serif',fontSize:'20px'}} onClick={this.showCar} >Search</button>
                    </Grid>
                </Grid>
                <Grid style={{marginTop : '2%'}} container xs={12} sm={12} md={12} lg={12}>
                    <Grid  item xs={12} sm={12} md={6} lg={4}>
                     <div>Start Destination</div> <TextField value={this.state.startDestination} id="outlined-basic" onChange={(e) => {
                                            this.setState({
                                                startDestination: e.target.value
                                            })
                                        }} style={{width : '300px' , }} id="outlined-basic"  variant="outlined" />
                    </Grid>
                    <Grid  item xs={12} sm={12} md={6} lg={4}>
                     <div>End Destination</div>  <TextField  value={this.state.endDestination} onChange={(e) => {
                                            this.setState({
                                                endDestination: e.target.value
                                            })
                                        }} style={{width : '300px' , }} id="outlined-basic"  variant="outlined" />
                    </Grid>
                    <Grid  item xs={12} sm={12} md={6} lg={4} style={{display : this.state.windowWidth > 700 ? 'none' : 'block' }}>
                        {/* <ThemeProvider theme={theme}>
                            <Button variant="contained" color="primary" style={{marginTop:'5%', color:'White',width:'300px'}} onClick={this.storeMail} >
                            Search
                            </Button>
                        </ThemeProvider> */}
                        <button style={{color:'white',backgroundColor:'#A5032E',marginTop:'6%',width:'300px',height:'40px',fontFamily:'sans-serif',fontSize:'20px'}} onClick={this.showCar} >Search</button>

                    </Grid>
                </Grid>
                </div>
                </Card>
            </React.Fragment>
         
         );
    }
}
 
export default Trip;