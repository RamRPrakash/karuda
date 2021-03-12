import React , {Component} from 'react'
import GetTexi from '../component/GetTexi'
import GetServices from '../component/GetServices'
import GetBookTaxi from '../component/GetBookTaxi'
import GetDrivers from '../component/GetDrivers'
import GetTestimonials from '../component/GetTestimonials'
import GetContact from '../component/GetContact'
import GetCopyRight from '../component/GetCopyRight'
import TopBannerList from '../component/TopBannerList'
import Grid from '@material-ui/core/Grid';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import AcUnitIcon from '@material-ui/icons/AcUnit';

import KarudaAppBar from '../../../Component/KarudaAppBar'
import KarudaCabApp from '../../../Component/KarudaCabApp'
import ReactWhatsapp from 'react-whatsapp';
import KarudaFooter from '../../../Component/karudaFooter'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    check=()=>{
        alert('Hii')
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


                <Grid style={{ marginTop: '2%', backgroundColor: "#FFEA00", lineHeight: '0px', height: this.state.windowWidth >= 700 ? '170px' : '500px'   }} container xs={12} sm={12} md={12} lg={12}>
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
                            <div style={{ textAlign: this.state.windowWidth >= 700 ?'' : 'center' , height: '100px', lineHeight: '2' }}>
                                <p style={{ fontWeight: '600', textAlign: this.state.windowWidth >= 700 ? '' : 'center'}}>CALL US 24x7</p>
                                <h1 style={{ textAlign: this.state.windowWidth >= 700 ? '' : 'center'}}>  9384841107 | 9940035922</h1>
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
                    <p style={{ marginLeft: this.state.windowWidth >= 700 ? '35%' : '' }}><a target="_blank" href="https://www.google.com/maps/place/1st+Cross+St,+Karambakkam,+Kaveri+Nagar,+Porur,+Chennai,+Tamil+Nadu+600116/@13.0396794,80.1545894,17z/data=!3m1!4b1!4m5!3m4!1s0x3a52611b0be825a1:0xa465b2002e3e935b!8m2!3d13.0396794!4d80.1567781">Address: 5/3, 1st Cross Street, Karambakkam, Porur, Chennai-600116</a></p>
                </Grid>

                <Grid style={{ backgroundColor: '#00695c', color: 'white' }} container xs={12} sm={12} md={12} lg={12}>
                    <p style={{ marginLeft: this.state.windowWidth >= 700 ? '40%' : '' }}>© 2021 by Karuda Cabs. All rights reserved.</p>
                </Grid>
            </React.Fragment>
        )
    }
    render() { 
        console.log(this.props)
        return (
            <Grid>
                <KarudaAppBar props={this.props} /> {this.state.windowWidth >= 700 ? <div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></div> : null}
                {/* <div style={{ width: '100%', height: '70px', backgroundColor: '#ffeb3b', }}>
                    <marquee behavior="scroll" direction="left">
                        <h3>Our Cab Service available around TamilNadu, Pondy, Kerala, Karnataka, Andhra Pradesh & Telangana.</h3>
                    </marquee>
                </div> */}
                <br></br><br></br>
                {/* <KarudaCabApp props={this.props}/> */}
                <TopBannerList props={this.props} /><br></br><br></br><br></br><br></br><br></br>
                {/* <GetTexi/> */}
                <GetServices /><br></br><br></br><br></br><br></br>
                <GetBookTaxi/><br></br>
                <GetDrivers /><br></br><br></br><br></br>
                {/* {this.footer()}
                <GetTestimonials/> */}
                <KarudaFooter/>
                <GetContact props={this.props} />
                <GetCopyRight/>
            </Grid>
          );
    }
}
 
export default Home;