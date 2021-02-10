import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
class KarudaTariff extends Component {
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
                                <h1>7904740907 | 7010900496</h1>
                            </div>

                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={3} >
                        <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ height: '100px', lineHeight: '2' }}>
                                <p style={{ fontWeight: '600' }}>FOR WHATSAPP</p>
                                <h1>7010900496</h1>
                            </div>

                        </div>
                    </Grid>
                </Grid>

                <Grid style={{ backgroundColor: 'white' }} container xs={12} sm={12} md={12} lg={12}>
                    <p style={{ marginLeft: this.state.windowWidth >= 700 ? '35%' : '' }}>Address: 39/30, 4th St, Govindhasamy Nagar, Perungudi, Ch - 600096</p>
                </Grid>

                <Grid style={{ backgroundColor: '#00695c', color: 'white' }} container xs={12} sm={12} md={12} lg={12}>
                    <p style={{ marginLeft: this.state.windowWidth >= 700 ? '40%' : '' }}>© 2020 by EMSR Travels. All rights reserved.</p>
                </Grid>
            </React.Fragment>
        )
    }
    render() { 
        return (
            <React.Fragment>
                <div>
                    <h3>OUTSTATION CAB SERVICE TARIFF CHART</h3>
                </div>
                <Grid container xs={12} sm={12} md={12} lg={12}>
                    <Grid style={{ backgroundColor: '#ffea00', borderStyle:'ridge' , textAlign : 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <h4>VEHICLE TYPE</h4>
                    </Grid>
                    <Grid style={{ backgroundColor: '#ffea00', borderStyle: 'ridge', textAlign: 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <h4>ONE WAY DROP</h4>
                    </Grid>
                    <Grid style={{ backgroundColor: '#ffea00', borderStyle: 'ridge', textAlign: 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <h4>	ROUND TRIP</h4>
                    </Grid>
                </Grid>

                <Grid container xs={12} sm={12} md={12} lg={12}>
                    <Grid style={{  borderStyle:'ridge' , textAlign : 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <p>Sedan (Dzire, Sunny, Xcent, Zest)</p>
                    </Grid>
                    <Grid style={{ borderStyle: 'ridge', textAlign: 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <p>Rs. 12.00/km</p>
                    </Grid>
                    <Grid style={{ borderStyle: 'ridge', textAlign: 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <p>	Rs. 10.00/km</p>
                    </Grid>
                </Grid>

                <Grid container xs={12} sm={12} md={12} lg={12}>
                    <Grid style={{  borderStyle:'ridge' , textAlign : 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <p>Sedan (Only Etios)</p>
                    </Grid>
                    <Grid style={{ borderStyle: 'ridge', textAlign: 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <p>	Rs. 13.00/km</p>
                    </Grid>
                    <Grid style={{ borderStyle: 'ridge', textAlign: 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <p>	Rs. 11.00/km</p>
                    </Grid>
                </Grid>

                <Grid container xs={12} sm={12} md={12} lg={12}>
                    <Grid style={{  borderStyle:'ridge' , textAlign : 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <p>SUV (Xylo, Marazzo, Loggy, Tavera)</p>
                    </Grid>
                    <Grid style={{ borderStyle: 'ridge', textAlign: 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <p>	Rs. 15.00/km</p>
                    </Grid>
                    <Grid style={{ borderStyle: 'ridge', textAlign: 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <p>	Rs. 13.00/km</p>
                    </Grid>
                </Grid>

                <Grid container xs={12} sm={12} md={12} lg={12}>
                    <Grid style={{  borderStyle:'ridge' , textAlign : 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <p>SUV (Only Innova)</p>
                    </Grid>
                    <Grid style={{ borderStyle: 'ridge', textAlign: 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <p>	Rs. 16.00/km</p>
                    </Grid>
                    <Grid style={{ borderStyle: 'ridge', textAlign: 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <p>		Rs. 14.00/km</p>
                    </Grid>
                </Grid>

               
                   <h1 style={{width : '100%'}}> Additional charges details</h1>
              
                <ul style={{fontSize : '20px' }}>
                    <li>Toll Fees, Inter-State Permit charges (if any) are extra.</li>
                    <li>One way - Driver Bata Rs. 300. (If more than 400 km driver bata Rs.600).</li>
                    <li>Round Trip - Driver Bata Rs. 400 Per Day.</li>
                    <li>Tempo Traveler - Driver Bata Rs. 600.</li>
                    <li>Hill Station Charges - Rs. 400.</li>
                    <li> One way - Minimum running must be 130 km per day.</li>
                    <li>Round Trips - Minimum running must be 250km per day.</li>
                    <li> 1 day means 1 Calender day (from midnight 12 to Next Midnight 12)</li>
                    <li>Max lagguage capacity by vehicle type - Sedan - 3 suitcases, Suv - 4 suitcases</li>
                </ul>

                {this.footer()}
            </React.Fragment>
          );
    }
}
 
export default KarudaTariff;