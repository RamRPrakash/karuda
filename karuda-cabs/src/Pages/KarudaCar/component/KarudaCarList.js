import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import GroupIcon from '@material-ui/icons/Group';
import PersonIcon from '@material-ui/icons/Person';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import Card from '@material-ui/core/Card';
import car from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/carTaxi.png'
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
class KarudaCarList extends Component {
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
    carList() {
        //marginLeft: this.state.windowWidth >= 700 ? '10%' : ''
        return (
            <Grid container xs={12} sm={12} md={12} lg={12} > 
                <Grid item style={{ margin: this.state.windowWidth >= 700 ? '2%' : '',  }}>
                    <Card style={{ marginLeft: '10%', margin: '10%', width: '300px', padding: this.state.windowWidth >= 700 ? '30px' : '10px' }}>
                        <div>
                            <img style={{ width: '300px' }} src={car} alt='car'></img>
                            <div>
                                <h3>SEDAN</h3>
                                <h4>Dzire, Sunny, Zest, Xcent</h4>
                                <h4>One Way Rs. 12/km | Round Trip Rs. 10/km</h4>
                                <div style={{ display: 'flex', width: '500px' }}>
                                    <Card style={{ width: '60px' }}>
                                        <GroupIcon /> 3
                                            </Card>
                                    <Card style={{ width: '60px' }}>
                                        <PersonIcon /> 3
                                            </Card>
                                    <Card style={{ width: '60px' }}>
                                        <BusinessCenterIcon /> 3
                                            </Card>
                                    <Card style={{ width: '60px' }}>
                                        <AcUnitIcon /> 3
                                            </Card>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Grid>
                <Grid item style={{ margin: this.state.windowWidth >= 700 ? '2%' : '' }}>
                    <Card style={{ margin: '10%', width: '300px', padding: this.state.windowWidth >= 700 ? '30px' : '10px' }}>
                        <div>
                            <img style={{ width: '300px' }} src={car} alt='car'></img>
                            <div>
                                <h3>SEDAN</h3>
                                <h4>Dzire, Sunny, Zest, Xcent</h4>
                                <h4>One Way Rs. 12/km | Round Trip Rs. 10/km</h4>
                                <div style={{ display: 'flex', width: '500px' }}>
                                    <Card style={{ width: '60px' }}>
                                        <GroupIcon /> 3
                                            </Card>
                                    <Card style={{ width: '60px' }}>
                                        <PersonIcon /> 3
                                            </Card>
                                    <Card style={{ width: '60px' }}>
                                        <BusinessCenterIcon /> 3
                                            </Card>
                                    <Card style={{ width: '60px' }}>
                                        <AcUnitIcon /> 3
                                            </Card>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Grid>
                <Grid item style={{ margin: this.state.windowWidth >= 700 ? '2%' : '' }}>
                    <Card style={{ margin: '10%', width: '300px', padding: this.state.windowWidth >= 700 ? '30px' : '10px' }}>
                        <div>
                            <img style={{ width: '300px' }} src={car} alt='car'></img>
                            <div>
                                <h3>SEDAN</h3>
                                <h4>Dzire, Sunny, Zest, Xcent</h4>
                                <h4>One Way Rs. 12/km | Round Trip Rs. 10/km</h4>
                                <div style={{ display: 'flex', width: '500px' }}>
                                    <Card style={{ width: '60px' }}>
                                        <GroupIcon /> 3
                                            </Card>
                                    <Card style={{ width: '60px' }}>
                                        <PersonIcon /> 3
                                            </Card>
                                    <Card style={{ width: '60px' }}>
                                        <BusinessCenterIcon /> 3
                                            </Card>
                                    <Card style={{ width: '60px' }}>
                                        <AcUnitIcon /> 3
                                            </Card>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Grid>
            </Grid>
        )
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
                <Grid container xs={12} sm={12} md={12} lg={12} >
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <h1 style={{ marginLeft: this.state.windowWidth >= 700 ? '40%' : '10%'}}>SEDAN CARS</h1>
                        <p style={{ marginLeft: this.state.windowWidth >= 700 ? '28%' : '10%' }}>Top rated drivers, and a hand-picked fleet of the best cars with extra legroom and boot space.</p>
                    </Grid>
               </Grid>
                {this.carList()}
                <Grid container xs={12} sm={12} md={12} lg={12} >
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <h1 style={{ marginLeft: this.state.windowWidth >= 700 ? '40%' : '10%' }}>SUV CARS</h1>
                        <p style={{ marginLeft: this.state.windowWidth >= 700 ? '28%' : '10%' }}>Top rated drivers, and a hand-picked fleet of the best cars with extra legroom and boot space.</p>
                    </Grid>
                </Grid>
                {this.carList()}
                {this.footer()}
            </React.Fragment>
        );
    }
}
 
export default KarudaCarList;