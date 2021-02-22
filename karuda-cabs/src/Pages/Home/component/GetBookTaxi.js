import React, { Component } from 'react'
import './../css/Home.css'
import Grid from '@material-ui/core/Grid';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,

    KeyboardDatePicker,
} from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import CustomerCare from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/caller.png'
import Button from '@material-ui/core/Button';
import api from 'axios';


class GetBookTaxi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: new Date() , 
            hour : '',
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
            selectedDate: this.state.selectedDate ,
            hour: this.state.hour,
            startDestination: this.state.startDestination,
            endDestination: this.state.endDestination,
            vehicle: this.state.vehicle,
            phone: this.state.phone,
            email: this.state.email
        }
        api.post('http://localhost:1330/sendMail', data).then(response=>{
            console.log('sasffa')
        })
    }
    render() {
     //height: this.state.windowWidth >= 700 ? '900px' : '1500px'
        return (
            <React.Fragment>
                <div style={{
                    width: '98%', padding : '10px' , backgroundColor: '#0a0a0a' }} >
                    <Grid container xs={12} sm={12} md={12} lg={12}>
                        <Grid item xs={12} sm={12} md={12} lg={6} >
                            <div style={{ color: 'white' }}>
                                <h1 style={{ textAlign: 'center' }}>Book Taxi Now</h1><br></br>
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <div style={{ color: 'yellow', width: '50%', }}>
                                        <h2 style={{ marginLeft: this.state.windowWidth >= 700 ?'30%' : '15%'}}>Date</h2>
                                    </div>
                                    <div style={{  backgroundColor: 'white' , width : '374px' , borderRadius : '10px' }}>
                                      
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <KeyboardDatePicker
                                                disableToolbar
                                                variant="inline"
                                                format="MM/dd/yyyy"
                                                color ="white"
                                                style={{width : '370px' , color : 'white'}}
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
                                    <div style={{ }}>
                                        {/* <input type="text" style={{ backgroundColor: '#292929', color: 'white', fontSize: '20px', width: this.state.windowWidth >= 700 ? '370px' : '', borderRadius: '10px' }} 
                                        onChange={(e)=>{
                                            this.setState({
                                                hour : e.target.value
                                            })
                                        }} 
                                        ></input> */}
                                        <TextField id="outlined-basic" variant="outlined" onChange={(e) => {
                                            this.setState({
                                                hour: e.target.value
                                            })
                                        }} 
                                           
                                            style={{ color: 'white', backgroundColor: 'white', borderRadius: '10px' ,  width: this.state.windowWidth >= 700 ?'370px' : '' }} />
                                    </div>
                                </div> <br></br>
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <div style={{ width: '50%', color: 'yellow', }}>
                                        <h2 style={{ marginLeft: this.state.windowWidth >= 700 ? '30%' : '15%' }}>start destination</h2></div>
                                    <div style={{ }}>
                                        {/* <input type="text" style={{ backgroundColor: '#292929',  color: 'white', fontSize: '20px', width: this.state.windowWidth >= 700 ? '370px' : '', borderRadius: '10px'  }}
                                            onChange={(e) => {
                                                this.setState({
                                                    startDestination: e.target.value
                                                })
                                            }} ></input> */}

                                        <TextField id="outlined-basic" onChange={(e) => {
                                            this.setState({
                                                startDestination: e.target.value
                                            })
                                        }} variant="outlined" style={{ width: this.state.windowWidth >= 700 ? '370px' : '', backgroundColor: 'white', borderRadius: '10px', }}/>
                                    </div>
                                </div><br></br>
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <div style={{ width: '50%', color: 'yellow', }}>
                                        <h2 style={{ marginLeft: this.state.windowWidth >= 700 ? '30%' : '15%' }}>end destination</h2></div>
                                    <div style={{  }}>
                                        {/* <input type="text" style={{ backgroundColor: '#292929', color: 'white', fontSize: '20px', width: this.state.windowWidth >= 700 ? '370px' : '', borderRadius: '10px' }} 
                                            onChange={(e) => {
                                                this.setState({
                                                    endDestination: e.target.value
                                                })
                                            }}
                                        ></input> */}

                                        <TextField onChange={(e) => {
                                            this.setState({
                                                endDestination: e.target.value
                                            })
                                        }} id="outlined-basic" variant="outlined" style={{ width: this.state.windowWidth >= 700 ? '370px' : '', backgroundColor: 'white', borderRadius: '10px' }}/>
                                    </div>
                                </div><br></br>
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <div style={{ width: '50%', color: 'yellow', }}>
                                        <h2 style={{ marginLeft: this.state.windowWidth >= 700 ? '30%' : '15%' }}>choose vehicle</h2></div>
                                    <div style={{  }}>
                                        {/* <input type="text" style={{ backgroundColor: '#292929',  color: 'white', fontSize: '20px', width: this.state.windowWidth >= 700 ? '370px' : '', borderRadius: '10px' }} 
                                            onChange={(e) => {
                                                this.setState({
                                                    vehicle: e.target.value
                                                })
                                            }}
                                            ></input> */}
                                        <TextField onChange={(e) => {
                                            this.setState({
                                                vehicle: e.target.value
                                            })
                                        }} id="outlined-basic" variant="outlined" style={{ width: this.state.windowWidth >= 700 ? '370px' : '', backgroundColor: 'white', borderRadius: '10px' }} />
                                    </div>
                                </div><br></br>
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <div style={{ width: '50%', color: 'yellow', }}>
                                        <h2 style={{ marginLeft: this.state.windowWidth >= 700 ? '30%' : '15%' }}>phone</h2></div>
                                    <div style={{}}>
                                        {/* <input type="text" style={{ backgroundColor: '#292929', color: 'white', fontSize: '20px', width: this.state.windowWidth >= 700 ? '370px' : '', borderRadius: '10px' }} 
                                        onChange={(e) => {
                                            this.setState({
                                                phone: e.target.value
                                            })
                                        }}></input> */}
                                        <TextField onChange={(e) => {
                                            this.setState({
                                                phone: e.target.value
                                            })}}
                                            id="outlined-basic" variant="outlined" style={{ width: this.state.windowWidth >= 700 ? '370px' : '', backgroundColor: 'white', borderRadius: '10px'}} />
                                    </div>
                                </div><br></br>
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <div style={{ width: '50%', color: 'yellow', }}>
                                        <h2 style={{ marginLeft: this.state.windowWidth >= 700 ? '30%' : '15%' }}>Email</h2></div>
                                    <div style={{ }}>
                                        {/* <input type="text" style={{ backgroundColor: '#292929',  color: 'white', fontSize: '20px', width: this.state.windowWidth >= 700 ? '370px' : '', borderRadius: '10px'  }} 
                                            onChange={(e) => {
                                                this.setState({
                                                    email: e.target.value
                                                })
                                            }}
                                        ></input> */}
                                        <TextField onChange={(e) => {
                                            this.setState({
                                                email: e.target.value
                                            })
                                        }} id="outlined-basic" variant="outlined" style={{ width: this.state.windowWidth >= 700 ? '370px' : '', backgroundColor: 'white', borderRadius: '10px'  }} />
                                    </div>
                                </div><br></br>
                                <div>
                                    <Button style={{ marginLeft: this.state.windowWidth >= 700 ? '20' : '15%' , color : 'black' , backgroundColor : 'yellow' , borderColor : 'yellow' , borderRadius : '30px' , width : '140px' , height : '55px'}} variant="outlined" size="medium" onClick={this.storeMail}  >
                                        <span style={{fontSize : '18px'}}>Book Now</span>
                                    </Button>
                                </div><br></br>

                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={6} >
                            <img style={{ marginLeft: this.state.windowWidth >= 700 ?  '20%' : '10%', width: '80%', height: '900px' }} alt="Customer Care" src={CustomerCare}  ></img>
                        </Grid>
                    </Grid>
                </div>

            </React.Fragment>
        );
    }
}

export default GetBookTaxi;