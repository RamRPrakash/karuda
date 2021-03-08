import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import car from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/carTaxi.png'
import GroupIcon from '@material-ui/icons/Group';
import PersonIcon from '@material-ui/icons/Person';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
class KarudaBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Days: 1
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
    carList(){
        return(
            <Grid container xs={12} sm={12} md={12} lg={12} >
                <Grid item style={{ margin: this.state.windowWidth >= 700 ? '2%' : ''}}>
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
    footer(){
        return(
            <React.Fragment>
                <Grid style={{ marginTop: '5%', backgroundColor: 'white', paddingBottom: '2%' }} container xs={12} sm={12} md={12} lg={12}>
                <Grid item xs={12} sm={12} md={12} lg={3} style={{ marginLeft: this.state.windowWidth >= 700 ? '10%' : '' }}>
                    <div style={{ display: 'flex', width: '100%' }}>
                        <div style={{ width: '50%', height: '100px' }}>
                            <HeadsetMicIcon style={{ fontSize: '140px' }} />
                        </div>
                        <div style={{ width: '50%' }}>
                            <div style={{ height: '50px' }}><h3>24/7 Customer Support</h3></div>
                            <div style={{ height: '50px' }}><p>You can call  9384841107 anytime for quick booking.</p></div>
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
                            <div style={{ height: '50px' }}><p>You can call  9384841107 anytime for quick booking.</p></div>
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
                                <h1>  9384841107 | 9940035922</h1>
                        </div>

                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={3} >
                    <div style={{ display: 'flex', width: '100%' }}>
                        <div style={{ height: '100px', lineHeight: '2' }}>
                            <p style={{ fontWeight: '600' }}>FOR WHATSAPP</p>
                                <h1>  9384841107</h1>
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
                <div style={{ height: this.state.windowWidth >= 700 ? '500px' : '750px', width: '100%' }}>
                    <div style={{ height: this.state.windowWidth >= 700 ? '350px' : '650px', width: this.state.windowWidth >= 700 ? '70%' : '100%', margin: this.state.windowWidth >= 700 ? '5%  15% 5%' : '', backgroundColor: '#ffea00' }}>
                        <Grid container xs={12} sm={12} md={12} lg={12}>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <p style={{ fontSize: '35px', fontWeight: 'bolder', color: '#2c387e', marginLeft: this.state.windowWidth >= 700 ? '35%' : '' }}>OUTSTANDING CAB</p>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <p style={{ marginTop: '-20px', marginLeft: this.state.windowWidth >= 700 ? '33%' : '' }}>Advance Booking Available Save Your Date Today!!</p>
                            </Grid>
                        </Grid>
                        <Grid style={{ marginLeft: this.state.windowWidth >= 700 ? '3%' : '12%' }} container xs={12} sm={12} md={12} lg={12}>
                            <Grid item xs={12} sm={12} md={12} lg={4}>
                                <Button style={{ backgroundColor: '#2c387e', width: this.state.windowWidth >= 700 ? '355px' : '260px' }} variant="contained" color="primary">
                                    ONE WAY
                            </Button>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={4}>
                                <Button style={{ backgroundColor: 'white', color: '#2c387e', width: this.state.windowWidth >= 700 ? '355px' : '260px' }} variant="contained" color="primary">
                                    ROUND TRIP
                            </Button>
                            </Grid>
                        </Grid>
                        <Grid style={{ marginTop: '2%', marginLeft: this.state.windowWidth >= 700 ? '3%' : '12%' }} container xs={12} sm={12} md={12} lg={12}>
                            <Grid style={{ marginTop: this.state.windowWidth >= 700 ? '' : '2%' }} item xs={12} sm={12} md={12} lg={2}>
                                <InputLabel id="demo-simple-select-label">No Of Days</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={this.state.Days}
                                    style={{ width: this.state.windowWidth >= 700 ? '150px' : '260px' }}
                                    onChange={(e) => {
                                        console.log(e)
                                        this.setState({
                                            Days: e.target.value
                                        })
                                    }}
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={6}>6</MenuItem>
                                </Select>
                            </Grid>
                            <Grid style={{ marginTop: this.state.windowWidth >= 700 ? '' : '2%' }} item xs={12} sm={12} md={12} lg={4}>
                                <TextField id="outlined-basic" label="Enter Pick Address" variant="outlined" style={{ backgroundColor: 'white', width: this.state.windowWidth >= 700 ? '300px' : '260px' }} />

                            </Grid>
                            <Grid style={{ marginTop: this.state.windowWidth >= 700 ? '' : '2%' }} item xs={12} sm={12} md={12} lg={4}>
                                <TextField id="outlined-basic" label="Enter Pick Address" variant="outlined" style={{ backgroundColor: 'white', width: this.state.windowWidth >= 700 ? '300px' : '260px' }} />

                            </Grid>
                            <Grid style={{ marginTop: this.state.windowWidth >= 700 ? '' : '2%' }} item xs={12} sm={12} md={12} lg={2}>
                                <Button variant="contained" color="primary" style={{ backgroundColor: '#2c387e', color: 'white', height: '53px', width: this.state.windowWidth >= 700 ? '' : '260px' }}>
                                    Search Cabs
                            </Button>

                            </Grid>

                        </Grid>
                    </div>
                </div>
                <div style={{ height: this.state.windowWidth >= 700 ? '750px' : '1200px', width: '100%', backgroundColor: '#F2F7FB' }}>
                    <Grid container xs={12} sm={12} md={12} lg={12}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <h2 style={{ marginLeft: this.state.windowWidth >= 700 ? '35%' : '' }}>OUTSTATION CAB AVAILABLE SERVICES</h2>
                        </Grid>
                    </Grid>
                    {this.carList()}
                   
                    <Grid container xs={12} sm={12} md={12} lg={12}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Button variant="contained" color="primary" style={{ backgroundColor: '#2c387e', color: 'white', height: '53px', width: this.state.windowWidth >= 700 ? '' : '260px', marginLeft: this.state.windowWidth >= 700 ? '50%' : '10%' }}>
                                VIEW TARIFF
                            </Button>
                        </Grid>
                    </Grid>
                    {this.footer()}
                </div>
            </React.Fragment>
        );
    }
}

export default KarudaBooking;