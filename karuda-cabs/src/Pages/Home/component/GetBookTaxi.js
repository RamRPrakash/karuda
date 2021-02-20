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
import CustomerCare from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/customer.jpg'
import Button from '@material-ui/core/Button';
class GetBookTaxi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: ''
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
    render() {
        return (
            <React.Fragment>
                <div style={{ width: '100%', height: this.state.windowWidth >= 700 ? '750px' : '1400px', backgroundColor: 'black' }} >
                    <Grid container xs={12} sm={12} md={12} lg={12}>
                        <Grid item xs={12} sm={12} md={12} lg={6} >
                            <div style={{ color: 'white' }}>
                                <h3 style={{ textAlign: 'center' }}>Book Taxi Now</h3>
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <div style={{ color: 'yellow', width: '50%', }}>
                                        <h3 style={{ marginLeft: this.state.windowWidth >= 700 ?'10%' : '15%'}}>When</h3>
                                    </div>
                                    <div style={{ color: 'yellow', backgroundColor: 'white' }}>
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <KeyboardDatePicker
                                                disableToolbar
                                                variant="inline"
                                                format="MM/dd/yyyy"
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
                                        <h3 style={{ marginLeft: this.state.windowWidth >= 700 ? '10%' : '15%' }}>hour</h3></div>
                                    <div style={{ backgroundColor: 'white' }}>
                                        <TextField id="outlined-basic"  variant="outlined" style={{ width: this.state.windowWidth >= 700 ?'240px' : ''}} />
                                    </div>
                                </div> <br></br>
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <div style={{ width: '50%', color: 'yellow', }}>
                                        <h3 style={{ marginLeft: this.state.windowWidth >= 700 ? '10%' : '15%' }}>start destination</h3></div>
                                    <div style={{ backgroundColor: 'white' }}>
                                        <TextField id="outlined-basic"  variant="outlined" style={{ width: this.state.windowWidth >= 700 ? '240px' : '' }}/>
                                    </div>
                                </div><br></br>
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <div style={{ width: '50%', color: 'yellow', }}>
                                        <h3 style={{ marginLeft: this.state.windowWidth >= 700 ? '10%' : '15%' }}>end destination</h3></div>
                                    <div style={{ backgroundColor: 'white' }}>
                                        <TextField id="outlined-basic" variant="outlined" style={{ width: this.state.windowWidth >= 700 ? '240px' : '' }}/>
                                    </div>
                                </div><br></br>
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <div style={{ width: '50%', color: 'yellow', }}>
                                        <h3 style={{ marginLeft: this.state.windowWidth >= 700 ? '10%' : '15%' }}>choose vehicle</h3></div>
                                    <div style={{ backgroundColor: 'white' }}>
                                        <TextField id="outlined-basic" variant="outlined" style={{ width: this.state.windowWidth >= 700 ? '240px' : '' }} />
                                    </div>
                                </div><br></br>
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <div style={{ width: '50%', color: 'yellow', }}>
                                        <h3 style={{ marginLeft: this.state.windowWidth >= 700 ? '10%' : '15%' }}>phone</h3></div>
                                    <div style={{ backgroundColor: 'white' }}>
                                        <TextField id="outlined-basic" variant="outlined" style={{ width: this.state.windowWidth >= 700 ? '240px' : '' }} />
                                    </div>
                                </div><br></br>
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <div style={{ width: '50%', color: 'yellow', }}>
                                        <h3 style={{ marginLeft: this.state.windowWidth >= 700 ? '10%' : '15%' }}>Email</h3></div>
                                    <div style={{ backgroundColor: 'white' }}>
                                        <TextField id="outlined-basic" variant="outlined" style={{ width: this.state.windowWidth >= 700 ? '240px' : '' }} />
                                    </div>
                                </div><br></br>
                                <div>
                                    <Button style={{ marginLeft: this.state.windowWidth >= 700 ? '3%' : '15%' , color : 'black' , backgroundColor : 'yellow' , borderColor : 'yellow'}} variant="outlined" size="medium"  >
                                        Book Now
                                    </Button>
                                </div><br></br>

                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={6} >
                            <img style={{ marginLeft: this.state.windowWidth >= 700 ?  '20%' : '10%', width: '80%', height: '600px' }} alt="Customer Care" src={CustomerCare}  ></img>
                        </Grid>
                    </Grid>
                </div>

            </React.Fragment>
        );
    }
}

export default GetBookTaxi;