import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import AcUnitIcon from '@material-ui/icons/AcUnit';

class karudaFooter extends Component {
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
                <Grid style={{ marginTop: '5%', backgroundColor: 'white' , paddingBottom : '2%' }} container xs={12} sm={12} md={12} lg={12}>
                    <Grid item xs={12} sm={12} md={12} lg={4} style={{ marginLeft: this.state.windowWidth >= 700 ? '' : '' }}>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ width: '50%', height: '100px' , textAlign : 'center' }}>
                                <HeadsetMicIcon style={{ fontSize: '140px' }} />
                            </div>
                            <div style={{ width: '50%' }}>
                                <div style={{ height: '50px' }}><h3>24/7 Customer Support</h3></div>
                                <div style={{ height: '50px' }}><p>You can call   9384841107 anytime for quick booking.</p></div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={4}>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ width: '50%', height: '100px', textAlign: 'center' }}>
                                <AcUnitIcon style={{ fontSize: '140px' }} />
                            </div>
                            <div style={{ width: '50%' }}>
                                <div style={{ height: '50px' }}><h3>Fully A/C Cabs</h3></div>
                                <div style={{ height: '50px' }}><p>All our cabs are fully equipped with Air conditioner.</p></div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={4}>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ width: '50%', height: '100px', textAlign: 'center'}}>
                                <DriveEtaIcon style={{ fontSize: '140px', textAlign: 'center'}} />
                            </div>
                            <div style={{ width: '50%' }}>
                                <div style={{ height: '50px' }}><h3>24/7 Customer Support</h3></div>
                                <div style={{ height: '50px' }}><p>You can call  9384841107 anytime for quick booking.</p></div>
                            </div>
                        </div>
                    </Grid>
                </Grid>


                <Grid style={{ width: '100%', marginTop: '2%', backgroundColor: "#FFEA00", lineHeight: '0px', height: this.state.windowWidth >= 700 ? '170px' : '500px', textAlign: this.state.windowWidth >= 700 ?''  : 'center'}} container xs={12} sm={12} md={12} lg={12}>
                    <Grid item xs={12} sm={12} md={12} lg={2} >
                        <div style={{ display: 'none', width: '100%' }}>
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
                    <Grid item xs={12} sm={12} md={12} lg={5} >
                        <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ height: '100px', lineHeight: '2', width: this.state.windowWidth >= 700 ? '' : '100%'}}>
                                <span style={{ fontWeight: '600',  }}>FOR WHATSAPP</span>
                                <h1 style={{}}>  9384841107 </h1>
                            </div>

                        </div>
                    </Grid>
                </Grid>

                <Grid style={{ backgroundColor: 'white' }} container xs={12} sm={12} md={12} lg={12}>
                    {
                        this.state.windowWidth >= 700 ?
                            <h2 style={{ marginLeft: this.state.windowWidth >= 700 ? '25%' : '' }}>Address: 5/3, 1st Cross Street, Karambakkam, Porur, Chennai-600116</h2>
                        :
                            <h4 style={{textAlign :'center', marginLeft: this.state.windowWidth >= 700 ? '25%' : '' }}>Address: 5/3, 1st Cross Street, Karambakkam, Porur, Chennai-600116</h4>

                    }
                </Grid>

                {/* <Grid style={{ backgroundColor: '#00695c', color: 'white' }} container xs={12} sm={12} md={12} lg={12}>
                    <p style={{ marginLeft: this.state.windowWidth >= 700 ? '40%' : '' }}>© 2021 by Karuda Cabs. All rights reserved.</p>
                </Grid> */}
            </React.Fragment>
        )
    }
    render() { 
        return ( 
            <div>
                {this.footer()}
                </div>
         );
    }
}
 
export default karudaFooter;