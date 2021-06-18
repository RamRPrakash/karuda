import React, { Component } from 'react'
import './../css/Home.css'
import Grid from '@material-ui/core/Grid';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import * as emailjs from 'emailjs-com'

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import CustomerCare from '../../../images/caller.png'
import Button from '@material-ui/core/Button';
import api from 'axios';
import KarudaSelectField from '../../../Component/KarudaSelectField'

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


class GetBookTaxi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: new Date() , 
            hour: new Date(),
            startDestination : '',
            endDestination : '',
            vehicle : '',
            phone : '',
            email : ''





        }
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
        // if (this.state.selectedDate.length == ''){
        //     alert('')
        // }
        var data = {
            name : this.state.Name ,
            selectedDate: this.state.selectedDate ,
            hour: this.state.hour,
            startDestination: this.state.startDestination,
            endDestination: this.state.endDestination,
            vehicle: this.state.vehicle,
            phone: this.state.phone,
            email: this.state.email
        }
        console.log(this.state.phone)
        console.log(this.state.phone.length)
        console.log(this.state.phone.length > 11 || this.state.phone < 11)
        if (this.state.selectedDate.length == ''){
            alert('Please Fill Date')
            return
        }
        else if (this.state.hour.length == ''){
            alert('Please Fill Time')
            return
        }
        else if (this.state.Name.length == ''){
            alert('Please Fill Name')
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
        else if (this.state.vehicle.length == ''){
            alert('Please Select vehicle')
            return
        }
        else if (this.state.phone.length == '' ){
            alert('Please Fill Mobile Number')
            return
        }
        else if (!(this.state.phone.length == 10) && (this.state.phone.length > 11  || this.state.phone.length < 11 ) ){
            alert('Please Fill valid Mobile Number')
            return
        }
        else if (this.state.email.length == ''){
            alert('Please Fill Email')
            return
        }
        else if(this.state.email){
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
                    subject: 'Booking Confirmation',
                    message_html: 'Karuda Booking Detail:',
                    Name: data.name,
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
     //height: this.state.windowWidth >= 700 ? '900px' : '1500px'
        return (
            <React.Fragment>
                <div style={{
                    width: '98%', padding: '10px', backgroundColor: '#0a0a0a', marginTop: this.state.windowWidth >= 700 ? '' : '65%' }} >
                    <Grid container xs={12} sm={12} md={12} lg={12}>
                        <Grid item xs={12} sm={12} md={12} lg={6} >
                            <div style={{ color: 'white' }}>
                                <h1 style={{ textAlign: 'center' }}>Book Taxi Now</h1><br></br>
                                <div style={{ display: 'flex', width: '100%', marginTop: '2%' }}>
                                    <div style={{ width: '50%', color: 'yellow', }}>
                                        <h2 style={{ marginLeft: this.state.windowWidth >= 700 ? '30%' : '15%' }}>Name</h2></div>
                                    <div style={{ marginTop: '2%' }}>
                                        {/* <input type="text" style={{ backgroundColor: '#292929',  color: 'white', fontSize: '20px', width: this.state.windowWidth >= 700 ? '370px' : '', borderRadius: '10px'  }}
                                            onChange={(e) => {
                                                this.setState({
                                                    startDestination: e.target.value
                                                })
                                            }} ></input> */}

                                        <TextField value={this.state.Name} id="outlined-basic" onChange={(e) => {
                                            this.setState({
                                                Name: e.target.value
                                            })
                                        }} variant="outlined" style={{ width: this.state.windowWidth >= 700 ? '370px' : '190px', backgroundColor: 'white', borderRadius: '10px', }} />
                                    </div>
                                </div><br></br>
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <div style={{ width: '50%', color: 'yellow', }}>
                                        <h2 style={{ marginLeft: this.state.windowWidth >= 700 ? '30%' : '15%' }}>Phone</h2></div>
                                    <div style={{ marginTop: '2%' }}>
                                        {/* <input type="text" style={{ backgroundColor: '#292929', color: 'white', fontSize: '20px', width: this.state.windowWidth >= 700 ? '370px' : '', borderRadius: '10px' }} 
                                        onChange={(e) => {
                                            this.setState({
                                                phone: e.target.value
                                            })
                                        }}></input> */}
                                        <TextField value={this.state.phone} onChange={(e) => {
                                            var content = e.target.value
                                            content = content.replace(/[^0-9.]/gi, '')
                                            this.setState({
                                                phone: content
                                            })
                                        }}
                                            id="outlined-basic" variant="outlined" style={{ width: this.state.windowWidth >= 700 ? '370px' : '190px', backgroundColor: 'white', borderRadius: '10px' }} />
                                    </div>
                                </div><br></br>
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <div style={{ width: '50%', color: 'yellow', }}>
                                        <h2 style={{ marginLeft: this.state.windowWidth >= 700 ? '30%' : '15%' }}>Email</h2></div>
                                    <div style={{ marginTop: '2%' }}>
                                        {/* <input type="text" style={{ backgroundColor: '#292929',  color: 'white', fontSize: '20px', width: this.state.windowWidth >= 700 ? '370px' : '', borderRadius: '10px'  }} 
                                            onChange={(e) => {
                                                this.setState({
                                                    email: e.target.value
                                                })
                                            }}
                                        ></input> */}
                                        <TextField value={this.state.email} onChange={(e) => {
                                            this.setState({
                                                email: e.target.value
                                            })
                                        }} id="outlined-basic" variant="outlined" style={{ width: this.state.windowWidth >= 700 ? '370px' : '190px', backgroundColor: 'white', borderRadius: '10px' }} />
                                    </div>
                                </div><br></br>
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <div style={{ color: 'yellow', width: '50%', }}>
                                        <h2 style={{ marginLeft: this.state.windowWidth >= 700 ?'30%' : '15%'}}>Date</h2>
                                    </div>
                                    <div style={{  backgroundColor: 'white' ,  borderRadius : '10px' }}>
                                      
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <KeyboardDatePicker
                                                disableToolbar
                                                variant="inline"
                                                format="MM/dd/yyyy"
                                                color ="white"
                                                style={{ width: this.state.windowWidth >= 700 ? '370px' : '190px' , color : 'white'}}
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
                                     
                                    </div>
                                </div><br></br>

                                <div style={{ display: 'flex', width: '100%' }}>
                                    <div style={{ width: '50%', color: 'yellow', }}>
                                        <h2 style={{ marginLeft: this.state.windowWidth >= 700 ? '30%' : '15%' }}>Time</h2></div>
                                    <div style={{ backgroundColor: 'white', borderRadius: '10px' }}>
                                        {/* <input type="text" style={{ backgroundColor: '#292929', color: 'white', fontSize: '20px', width: this.state.windowWidth >= 700 ? '370px' : '', borderRadius: '10px' }} 
                                        onChange={(e)=>{
                                            this.setState({
                                                hour : e.target.value
                                            })
                                        }} 
                                        ></input> */}
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
                                            style={{ color: 'white', backgroundColor: 'white', borderRadius: '10px', width: this.state.windowWidth >= 700 ? '370px' : '190px' , height : '56px'}}
                                        />
                                        </MuiPickersUtilsProvider>
                                        {/* <TextField id="outlined-basic" variant="outlined" onChange={(e) => {
                                            this.setState({
                                                hour: e.target.value
                                            })
                                        }} 
                                           
                                            style={{ color: 'white', backgroundColor: 'white', borderRadius: '10px' ,  width: this.state.windowWidth >= 700 ?'370px' : '' }} /> */}
                                    </div>
                                </div> <br></br>
                                <div style={{ display: 'flex', width: '100%' , marginTop : '2%' }}>
                                    <div style={{ width: '50%', color: 'yellow', }}>
                                        <h2 style={{ marginLeft: this.state.windowWidth >= 700 ? '30%' : '15%' }}>Start Destination</h2></div>
                                    <div style={{ marginTop: '2%' }}>
                                        {/* <input type="text" style={{ backgroundColor: '#292929',  color: 'white', fontSize: '20px', width: this.state.windowWidth >= 700 ? '370px' : '', borderRadius: '10px'  }}
                                            onChange={(e) => {
                                                this.setState({
                                                    startDestination: e.target.value
                                                })
                                            }} ></input> */}

                                        <TextField value={this.state.startDestination} id="outlined-basic" onChange={(e) => {
                                            this.setState({
                                                startDestination: e.target.value
                                            })
                                        }} variant="outlined" style={{ width: this.state.windowWidth >= 700 ? '370px' : '190px', backgroundColor: 'white', borderRadius: '10px', }}/>
                                    </div>
                                </div><br></br>
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <div style={{ width: '50%', color: 'yellow', }}>
                                        <h2 style={{ marginLeft: this.state.windowWidth >= 700 ? '30%' : '15%' }}>End Destination</h2></div>
                                    <div style={{ marginTop: '2%'  }}>
                                        {/* <input type="text" style={{ backgroundColor: '#292929', color: 'white', fontSize: '20px', width: this.state.windowWidth >= 700 ? '370px' : '', borderRadius: '10px' }} 
                                            onChange={(e) => {
                                                this.setState({
                                                    endDestination: e.target.value
                                                })
                                            }}
                                        ></input> */}

                                        <TextField value={this.state.endDestination} onChange={(e) => {
                                            this.setState({
                                                endDestination: e.target.value
                                            })
                                        }} id="outlined-basic" variant="outlined" style={{ width: this.state.windowWidth >= 700 ? '370px' : '190px', backgroundColor: 'white', borderRadius: '10px' }}/>
                                    </div>
                                </div><br></br>
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <div style={{ width: '50%', color: 'yellow', }}>
                                        <h2 style={{ marginLeft: this.state.windowWidth >= 700 ? '30%' : '15%' }}>Choose Vehicle</h2></div>
                                    <div style={{ borderRadius: '10px', marginTop: '2%'  }}>
                                        {/* <input type="text" style={{ backgroundColor: '#292929',  color: 'white', fontSize: '20px', width: this.state.windowWidth >= 700 ? '370px' : '', borderRadius: '10px' }} 
                                            onChange={(e) => {
                                                this.setState({
                                                    vehicle: e.target.value
                                                })
                                            }}
                                            ></input> */}
                                            <KarudaSelectField 
                                            lebel=''
                                            backgroundColor = 'white'
                                            borderRadius= '10px'
                                            width={ this.state.windowWidth >= 700 ? '370px' : '190px' }
                                            height = '60px'
                                            value={this.state.vehicle}
                                            menuData={carListItem}
                                            onChange={(e) => {
                                                console.log(e)


                                                this.setState({
                                                    vehicle: e.target.value
                                                })
                                              
                                            }}
                                            />
                                        {/* <TextField onChange={(e) => {
                                            this.setState({
                                                vehicle: e.target.value
                                            })
                                        }} id="outlined-basic" variant="outlined" style={{ width: this.state.windowWidth >= 700 ? '370px' : '', backgroundColor: 'white', borderRadius: '10px' }} /> */}
                                    </div>
                                </div><br></br>
                                
                                <div>
                                    <Button style={{ marginLeft: this.state.windowWidth >= 700 ? '14%' : '7%' , color : 'black' , backgroundColor : 'yellow' , borderColor : 'yellow' , borderRadius : '30px' , width : '140px' , height : '55px'}} variant="outlined" size="medium" onClick={this.storeMail}  >
                                        <span style={{fontSize : '18px'}}>Book Now</span>
                                    </Button>
                                </div><br></br>

                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={6} >
                            <img style={{ marginLeft: this.state.windowWidth >= 700 ? '20%' : '10%', width: '70%', height: this.state.windowWidth >= 700 ?'900px' : '600px' }} alt="Customer Care" src={CustomerCare}  ></img>
                        </Grid>
                    </Grid>
                </div>

            </React.Fragment>
        );
    }
}

export default GetBookTaxi;