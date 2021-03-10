import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import GroupIcon from '@material-ui/icons/Group';
import PersonIcon from '@material-ui/icons/Person';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import Card from '@material-ui/core/Card';
import car from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/carTaxi.png'
import Dzire from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/Dzire.png'
import ETIOS from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/ETIOS.png'
import Sunny from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/Sunny.png'
import xcent from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/xcent.png'
import zest from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/zest.png'
import INNOVA from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/INNOVA.png'
import LODGY from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/LODGY.png'
import MARAZZO from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/MARAZZO.png'
import TAVERA from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/TAVERA.png'
import XYLO from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/XYLO.png'
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import GetContact from '../../Home/component/GetContact'
import GetCopyRight from '../../Home/component/GetCopyRight'
import Button from '@material-ui/core/Button';
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

    singleCar(type , data){
        
        return(
            
                <Card style={{ marginLeft: '10%', margin: '10%', width: '300px', padding: this.state.windowWidth >= 700 ? '30px' : '10px' }}>
                    <div>
                    <img style={{ width: '300px' }} src={
                        data == 'Dzire' ? Dzire : data == 'Sunny' ? Sunny : data == 'Xcent' ? xcent :
                            data == 'Zest' ? zest : data == 'Only Etios' ? ETIOS :
                                data == 'Xylo' ? XYLO : data == 'Marazzo' ? MARAZZO : data == 'Loggy' ? LODGY :
                                    data == 'Tavera' ? TAVERA : INNOVA
                        } alt='car'></img>
                        <div>
                            <h3>{type}</h3>
                        <h4>{data}</h4> 
                        <h4> {data == 'Only Etios' ? "One Way Rs. 13/km | Round Trip Rs. 11/km" :
                        
                            data == 'Xylo' || data == 'Marazzo' || data == 'Loggy' || data == 'Tavera' ? "One Way Rs. 15/km | Round Trip Rs. 13/km" : data == 'Only Innova' ? "One Way Rs. 16/km | Round Trip Rs. 14/km" :
                        "One Way Rs. 12/km | Round Trip Rs. 10/km" }
                                </h4>
                            {/* <div style={{ display: 'flex', width: '500px' }}>
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
                            </div> */}
                        <Button style={{  color: 'white', backgroundColor: '#CC0021', borderColor: 'yellow', borderRadius: '30px', width: '140px', height: '55px' }} variant="outlined" size="medium" onClick={()=>{
                            this.props.props.history.push('/KarudaOnlineBooking')
                        }}  >
                            <span style={{ fontSize: '18px' }}>Book Now</span>
                        </Button>
                        </div>
                    </div>
                </Card>
         
        )
    }

    carList(data) {
        //marginLeft: this.state.windowWidth >= 700 ? '10%' : ''
        return (
            <Grid container xs={12} sm={12} md={12} lg={12} > 
                <Grid item style={{ margin: this.state.windowWidth >= 700 ? '2%' : '',  }}>
                    <Card style={{ marginLeft: '10%', margin: '10%', width: '300px', padding: this.state.windowWidth >= 700 ? '30px' : '10px' }}>
                        <div>
                            <img style={{ width: '300px' }} src={car} alt='car'></img>
                            <div>
                                <h3>SEDAN</h3>
                                <h4>Dzire</h4>
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
                                <h4>Sunny</h4>
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
                                <h4>Xcent</h4>
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
        console.log(this.props)
        return (
            <React.Fragment>
                <Grid style={{ marginTop: '5%', backgroundColor: 'white', paddingBottom: '2%' }} container xs={12} sm={12} md={12} lg={12}>
                    <Grid item xs={12} sm={12} md={4} lg={4} style={{ marginLeft: this.state.windowWidth >= 700 ? '0%' : '' }}>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ width: '50%', height: '100px', textAlign: 'center'}}>
                                <HeadsetMicIcon style={{ fontSize: '140px' }} />
                            </div>
                            <div style={{ width: '50%' }}>
                                <div style={{ height: '50px' }}><h3>24/7 Customer Support</h3></div>
                                <div style={{ height: '50px' }}><p>You can call  9384841107 anytime for quick booking.</p></div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ width: '50%', height: '100px', textAlign: 'center'}}>
                                <AcUnitIcon style={{ fontSize: '140px' }} />
                            </div>
                            <div style={{ width: '50%' }}>
                                <div style={{ height: '50px' }}><h3>Fully A/C Cabs</h3></div>
                                <div style={{ height: '50px' }}><p>All our cabs are fully equipped with Air conditioner.</p></div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ width: '50%', height: '100px', textAlign: 'center'}}>
                                <DriveEtaIcon style={{ fontSize: '140px' }} />
                            </div>
                            <div style={{ width: '50%' }}>
                                <div style={{ height: '50px' }}><h3>24/7 Customer Support</h3></div>
                                <div style={{ height: '50px' }}><p>You can call  9384841107 anytime for quick booking.</p></div>
                            </div>
                        </div>
                    </Grid>
                </Grid>


                <Grid style={{ marginTop: '2%', backgroundColor: "#FFEA00", lineHeight: '0px', height: this.state.windowWidth >= 700 ? '170px' : '500px', textAlign: this.state.windowWidth >= 700 ? '' : 'center'}} container xs={12} sm={12} md={12} lg={12}>
                    <Grid item xs={12} sm={12} md={12} lg={3} >
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
                    <Grid item xs={12} sm={12} md={12} lg={3} >
                        <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ height: '100px', lineHeight: '2', width: this.state.windowWidth >= 700 ? '' : '100%'}}>
                                <p style={{ fontWeight: '600' }}>FOR WHATSAPP</p>
                                <h1>  9384841107</h1>
                            </div>

                        </div>
                    </Grid>
                </Grid>

                <Grid style={{ backgroundColor: 'white' }} container xs={12} sm={12} md={12} lg={12}>
                    {
                        this.state.windowWidth >= 700 ?
                            <h2 style={{ marginLeft: this.state.windowWidth >= 700 ? '25%' : '' }}>Address: 5/3, 1st cross street, karambakkam, porur, chennai-600116</h2>
                            :
                            <h4 style={{ textAlign: 'center', marginLeft: this.state.windowWidth >= 700 ? '25%' : '' }}>Address: 5/3, 1st cross street, karambakkam, porur, chennai-600116</h4>

                    }
                </Grid>

                {/* <Grid style={{ backgroundColor: '#00695c', color: 'white' }} container xs={12} sm={12} md={12} lg={12}>
                    <p style={{ marginLeft: this.state.windowWidth >= 700 ? '40%' : '' }}>© 2021 by Karuda Cabs. All rights reserved.</p>
                </Grid> */}
                <GetContact props={this.props.props}/>
                <div style={{
                    backgroundColor: '#2C2C2C', width: '100%' 
                }}>
                    <div style={{ display: 'flex', fontSize: '22px', color: 'gray' , width : '100%' }}>
                        <div style={{ width: this.state.windowWidth >= 700 ? '50%' : '100%', marginLeft: this.state.windowWidth >= 700 ? '10%' : '2%' }}>
                            <p>karudacabs.com Copyright @ All rights reserved 2021</p>
                        </div>
                        <div style={{ width: '50%' }}>
                            <p>Designed and Developed by Skifter Technologies</p>
                        </div>
                    </div>

                </div>
                {/* <GetCopyRight/> */}
            </React.Fragment>
        )
    }
    render() { 
        var SEDANOONE = ['Dzire' , 'Sunny' , 'Xcent']
        var SEDANTWO = ['Zest' , 'Only Etios']
        var SUVONE = ['Xylo', 'Marazzo', 'Loggy']
        var SUVTWO = ['Tavera','Only Innova']
        return (  
            <React.Fragment>
                <Grid container xs={12} sm={12} md={12} lg={12} >
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <h1 style={{ marginLeft: this.state.windowWidth >= 700 ? '40%' : '10%'}}>SEDAN CARS</h1>
                        <p style={{ marginLeft: this.state.windowWidth >= 700 ? '28%' : '10%' }}>Top rated drivers, and a hand-picked fleet of the best cars with extra legroom and boot space.</p>
                    </Grid>
               </Grid>
                {/* {this.carList(1)} */}

                <Grid container xs={12} sm={12} md={12} lg={12}>
                    {
                        SEDANOONE.map((item , index)=>{
                            return(
                                <Grid item xs={12} sm={12} md={4} lg={4}>
                                    {
                                        this.singleCar('SEDAN' , item )
                                    }
                                </Grid>
                            )
                        })
                    }
                </Grid>
                <Grid container xs={12} sm={12} md={12} lg={12}>
                    {
                        SEDANTWO.map((item , index)=>{
                            return(
                                <Grid item xs={12} sm={12} md={4} lg={4}>
                                    {
                                        this.singleCar('SEDAN' , item )
                                    }
                                </Grid>
                            )
                        })
                    }
                </Grid>


                <Grid container xs={12} sm={12} md={12} lg={12} >
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <h1 style={{ marginLeft: this.state.windowWidth >= 700 ? '40%' : '10%' }}>SUV CARS</h1>
                        <p style={{ marginLeft: this.state.windowWidth >= 700 ? '28%' : '10%' }}>Top rated drivers, and a hand-picked fleet of the best cars with extra legroom and boot space.</p>
                    </Grid>
                </Grid>

                <Grid container xs={12} sm={12} md={12} lg={12}>
                    {
                        SUVONE.map((item, index) => {
                            return (
                                <Grid item xs={12} sm={12} md={4} lg={4}>
                                    {
                                        this.singleCar('SUV', item)
                                    }
                                </Grid>
                            )
                        })
                    }
                </Grid>
                <Grid container xs={12} sm={12} md={12} lg={12}>
                    {
                        SUVTWO.map((item, index) => {
                            return (
                                <Grid item xs={12} sm={12} md={4} lg={4}>
                                    {
                                        this.singleCar('SUV', item)
                                    }
                                </Grid>
                            )
                        })
                    }
                </Grid>

                {/* {this.carList(2)} */}
                {this.footer()}
            </React.Fragment>
        );
    }
}
 
export default KarudaCarList;