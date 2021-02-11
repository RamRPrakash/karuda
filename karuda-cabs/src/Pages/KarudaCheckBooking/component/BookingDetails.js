import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
class BookingDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
    footer() {
        return (
            <React.Fragment>
                <Grid style={{ marginTop: '5%', backgroundColor: 'white' }} container xs={12} sm={12} md={12} lg={12}>
                    <Grid item xs={12} sm={12} md={12} lg={3} style={{ marginLeft: this.state.windowWidth >= 700 ? '10%' : '' }}>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ width: '50%', height: '100px' }}>
                                <HeadsetMicIcon style={{ fontSize: '140px' }} />
                            </div>
                            <div style={{ width: '50%' }}>
                                <div style={{ height: '50px' }}><h3>24/7 Customer Support</h3></div>
                                <div style={{ height: '50px' }}><p>You can call 790-474-0907 anytime for quick booking.</p></div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={3}>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ width: '50%', height: '100px' }}>
                                <AcUnitIcon style={{ fontSize: '140px' }} />
                            </div>
                            <div style={{ width: '50%' }}>
                                <div style={{ height: '50px' }}><h3>Fully A/C Cabs</h3></div>
                                <div style={{ height: '50px' }}><p>All our cabs are fully equipped with Air conditioner.</p></div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={3}>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ width: '50%', height: '100px' }}>
                                <DriveEtaIcon style={{ fontSize: '140px' }} />
                            </div>
                            <div style={{ width: '50%' }}>
                                <div style={{ height: '50px' }}><h3>24/7 Customer Support</h3></div>
                                <div style={{ height: '50px' }}><p>You can call 790-474-0907 anytime for quick booking.</p></div>
                            </div>
                        </div>
                    </Grid>
                </Grid>


                <Grid style={{ marginTop: '2%', backgroundColor: "#FFEA00", lineHeight: '0px', height: this.state.windowWidth >= 700 ? '170px' : '500px' }} container xs={12} sm={12} md={12} lg={12}>
                    <Grid item xs={12} sm={12} md={12} lg={3} >
                        <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ height: '100px' }}>
                                <HeadsetMicIcon style={{ fontSize: '140px' }} />
                                <p>Click here for Feedback</p>
                            </div>

                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={5} >
                        <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ height: '100px', lineHeight: '2' }}>
                                <p style={{ fontWeight: '600' }}>CALL US 24x7</p>
                                <h1>9384841107 | 9940035922</h1>
                            </div>

                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={3} >
                        <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ height: '100px', lineHeight: '2' }}>
                                <p style={{ fontWeight: '600' }}>FOR WHATSAPP</p>
                                <h1>9384841107</h1>
                            </div>

                        </div>
                    </Grid>
                </Grid>

                <Grid style={{ backgroundColor: 'white' }} container xs={12} sm={12} md={12} lg={12}>
                    <p style={{ marginLeft: this.state.windowWidth >= 700 ? '35%' : '' }}>Address: 5/3, 1st cross street, karambakkam, porur, chennai-600116</p>
                </Grid>

                <Grid style={{ backgroundColor: '#00695c', color: 'white' }} container xs={12} sm={12} md={12} lg={12}>
                    <p style={{ marginLeft: this.state.windowWidth >= 700 ? '40%' : '' }}>© 2021 by Karuda Cabs. All rights reserved.</p>
                </Grid>
            </React.Fragment>
        )
    }
    render() { 
        return (
            <React.Fragment>
                <div style={{ width: '100%', height: '70px', backgroundColor: '#ffeb3b'}}>
                    <marquee behavior="scroll" direction="left">
                        <h3>Our Cab Service available around TamilNadu, Pondy, Kerala, Bengalore, Andhra Pradesh & Hyderbad.</h3>
                    </marquee>
                </div>
                <div style={{ height: this.state.windowWidth >= 700 ? '300px' : '200px', width: '100%', backgroundColor: '#F2F7FB' }}>
                    <Grid container xs={12} sm={12} md={12} lg={12}>
                        <Grid item xs={12} sm={12} md={12} lg={12}> 
                            <h2 style={{ marginTop: '3%' ,marginLeft: this.state.windowWidth >= 700 ? '45%' : '10%'}}>BOOKING DETAILS</h2>
                        </Grid>
                        <Grid style={{marginTop : '2%'}} item xs={12} sm={12} md={12} lg={12}> 
                            <TextField style={{ width: '70%', marginLeft: this.state.windowWidth >= 700 ? '15%' : '10%' }}  id="outlined-basic" label="Enter Booking Id" variant="outlined" />
                        </Grid>
                        <Grid style={{ marginTop: '1%' }} item xs={12} sm={12} md={12} lg={12}> 
                            <Button style={{ width: '70%', marginLeft: this.state.windowWidth >= 700 ? '15%' : '10%', backgroundColor: '#00695f' }} variant="contained" color="primary">
                               View Your Booking Details
                            </Button>
                        </Grid>

                    </Grid>
                </div>


                {this.footer()}
            </React.Fragment>
        );
    }
}
 
export default BookingDetails;