import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import GetContact from '../../Home/component/GetContact'
import GetCopyRight from '../../Home/component/GetCopyRight'
import KarudaSelectField from '../../../Component/KarudaSelectField'
import TextField from '@material-ui/core/TextField';
import Api from 'axios'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

import Dzire from '../../../images/Dzire.png'
import Sunny from '../../../images/Sunny.png'
import ETIOS from '../../../images/ETIOS.png'
import XYLO from '../../../images/XYLO.png'
import INNOVA from '../../../images/INNOVA.png'




var CarList = ['Sedan (Dzire, Sunny, Xcent, Zest)', 'Sedan (Only Etios)', 'SUV (Xylo, Marazzo, Loggy, Tavera)', 'SUV (Only Innova)']
var DropList = ['ONE WAY DROP', 'ROUND TRIP']
var rate = {
    'Sedan (Dzire, Sunny, Xcent, Zest)' : [12 , 10] ,
    'Sedan (Only Etios)' : [13,11],
    'SUV (Xylo, Marazzo, Loggy, Tavera)' : [15,13],
    'SUV (Only Innova)' : [16,14]
}

class KarudaTariff extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            checkRate : '' , 
            KiloMetre : 0 ,
            SUV_One :[15, 13] , 
            SUV_Two :[16, 14] ,
            Sedan_One :[12, 10],
            Sedan_Two :[13, 11] , 
            SelectedCar: 'Sedan (Dzire, Sunny, Xcent, Zest)'

         }
    }
    UNSAFE_componentWillMount() {
        Api.post('/getRate', {}).then(res => {
            console.log(res)
            var data = res['data'][0]['data']
            console.log(data)
            rate = {
                'Sedan (Dzire, Sunny, Xcent, Zest)': data['Sedan_One'],
                'Sedan (Only Etios)': data['Sedan_Two'],
                'SUV (Xylo, Marazzo, Loggy, Tavera)': data['SUV_One'],
                'SUV (Only Innova)': data['SUV_Two']
            }
            this.setState({
                SUV_One: data['SUV_One'],
                SUV_Two: data['SUV_Two'],
                Sedan_One: data['Sedan_One'],
                Sedan_Two: data['Sedan_Two']
            })
        })
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
                            <div style={{ width: '50%', height: '100px', textAlign: 'center' }}>
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


                <Grid style={{ marginTop: '2%', backgroundColor: "#FFEA00", lineHeight: '0px', height: this.state.windowWidth >= 700 ? '170px' : '500px', textAlign: this.state.windowWidth >= 700 ? '' : 'center' }} container xs={12} sm={12} md={12} lg={12}>
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
                            <div style={{ height: '100px', lineHeight: '2', width: this.state.windowWidth >= 700 ? '' : '100%' }}>
                                <p style={{ fontWeight: '600' }}>FOR WHATSAPP</p>
                                <h1>  9384841107</h1>
                            </div>

                        </div>
                    </Grid>
                </Grid>

                <Grid style={{ backgroundColor: 'white' }} container xs={12} sm={12} md={12} lg={12}>
                    {
                        this.state.windowWidth >= 700 ?
                            <h2 style={{ marginLeft: this.state.windowWidth >= 700 ? '25%' : '' }}><a target="_blank" href="https://www.google.com/maps/place/1st+Cross+St,+Karambakkam,+Kaveri+Nagar,+Porur,+Chennai,+Tamil+Nadu+600116/@13.0396794,80.1545894,17z/data=!3m1!4b1!4m5!3m4!1s0x3a52611b0be825a1:0xa465b2002e3e935b!8m2!3d13.0396794!4d80.1567781">Address: 5/3, 1st Cross Street, Karambakkam, Porur, Chennai-600116</a></h2>
                            :
                            <h4 style={{ textAlign: 'center', marginLeft: this.state.windowWidth >= 700 ? '25%' : '' }}><a target="_blank" href="https://www.google.com/maps/place/1st+Cross+St,+Karambakkam,+Kaveri+Nagar,+Porur,+Chennai,+Tamil+Nadu+600116/@13.0396794,80.1545894,17z/data=!3m1!4b1!4m5!3m4!1s0x3a52611b0be825a1:0xa465b2002e3e935b!8m2!3d13.0396794!4d80.1567781">Address: 5/3, 1st Cross Street, Karambakkam, Porur, Chennai-600116</a></h4>

                    }
                </Grid>
                <GetContact props={this.props.props}/>
                <div style={{
                    backgroundColor: '#2C2C2C' , width :'100%'
                }}>
                    <div style={{ display: 'flex', fontSize: '22px', color: 'gray' }}>
                        <div style={{ width: this.state.windowWidth >= 700 ? '50%' : '100%', marginLeft: this.state.windowWidth >= 700 ? '10%' : '2%' }}>
                            <p>karudacabs.com Copyright @ All rights reserved 2021</p>
                        </div>
                        <div style={{ width: '50%' }}>
                            <p>Designed and Developed by Skifter Technologies</p>
                        </div>
                    </div>

                </div>
                {/* <Grid style={{ backgroundColor: '#00695c', color: 'white' }} container xs={12} sm={12} md={12} lg={12}>
                    <p style={{ marginLeft: this.state.windowWidth >= 700 ? '40%' : '' }}>© 2021 by Karuda Cabs. All rights reserved.</p>
                </Grid> */}
            </React.Fragment>
        )
    }
    singleCar() {
        if (this.state.SelectedCar ){
            var price = [0 , 0]
            var disCar = Dzire
            if (this.state.SelectedCar == 'Sedan (Dzire, Sunny, Xcent, Zest)'){
                price = this.state.Sedan_One

                disCar = Sunny
            }
            else if (this.state.SelectedCar == 'Sedan (Only Etios)'){
                
                price = this.state.Sedan_Two

                disCar = ETIOS

            }
            else if (this.state.SelectedCar == 'SUV (Xylo, Marazzo, Loggy, Tavera)'){
                price = this.state.SUV_One

                disCar = XYLO

            }
            else if (this.state.SelectedCar == 'SUV (Only Innova)'){
                price = this.state.SUV_Two
                disCar = INNOVA

            }

            console.log(price)
            
            return (

                <Card style={{ marginLeft: '10%', margin: '10%', width: '300px', padding: this.state.windowWidth >= 700 ? '30px' : '10px' }}>
                    <div>
                        <img style={{ width: '300px' }} src={disCar} alt='car'></img>
                        <div>
                            <h3>{this.state.SelectedCar}</h3>
                            {/* <h4>{data}</h4> */}
                            <h4> {`One Way Rs. ${price[0]}/km|Round Trip Rs.${price[1]}/km`}</h4>
                            
                            <Button style={{ color: 'white', backgroundColor: '#CC0021', borderColor: 'yellow', borderRadius: '30px', width: '140px', height: '55px' }} variant="outlined" size="medium" onClick={() => {
                                this.props.props.history.push('/KarudaOnlineBooking')
                            }}  >
                                <span style={{ fontSize: '18px' }}>Book Now</span>
                            </Button>
                        </div>
                    </div>
                </Card>

            )
        }

        
    }
    render() { 
        return (
            <React.Fragment>
               
                <Grid style={{ paddingBottom: '2%', marginTop: this.state.windowWidth >= 700 ?'14%' : '70%' , marginLeft : '10%'}} container xs={12} sm={12} md={12} lg={12}>
                    <Grid item xs={12} sm={12} md={6} lg={6} style={{ margin: this.state.windowWidth >= 700 ? '0%' : '5%'  }}>
                        <h3 style={{paddingLeft : '3%'}}>Trip Calculation</h3>
                        <Grid container style={{padding : '3%'}}>
                            
                            <Grid item xs={12} sm={12} md={12} lg={6}>

                                <KarudaSelectField
                                    lebel='Select Car'
                                    value={this.state.SelectedCar}
                                    menuData={CarList}
                                    onChange={(e) => {
                                        console.log(e)



                                        this.setState({
                                            SelectedCar: e.target.value
                                        })
                                        if (this.state.SelectedCar && this.state.SelectedTrip) {
                                            this.setState({
                                                checkRate: +(this.state.KiloMetre) * rate[e.target.value][this.state.SelectedTrip == 'ONE WAY DROP' ? 0 : 1]
                                            })
                                        }
                                    }}
                                /> <br></br>
                                <KarudaSelectField
                                    lebel='Trip'
                                    value={this.state.SelectedTrip}
                                    menuData={DropList}
                                    onChange={(e) => {
                                        console.log(e)


                                        this.setState({
                                            SelectedTrip: e.target.value
                                        })
                                        if (this.state.SelectedCar && this.state.SelectedTrip) {
                                            this.setState({
                                                checkRate: +(this.state.KiloMetre) * rate[this.state.SelectedCar][e.target.value == 'ONE WAY DROP' ? 0 : 1]
                                            })
                                        }
                                    }}
                                /><br></br><br></br>
                                <TextField style={{ width: '300px' }} id="outlined-basic" variant="outlined" label="Distance (in km)" value={this.state.KiloMetre} onChange={(e) => {
                                    var content = e.target.value
                                    content = content.replace(/[^0-9.]/gi, '')
                                    console.log(content)
                                    console.log(this.state.SelectedCar)
                                    console.log(this.state.SelectedTrip)

                                    console.log(rate[this.state.SelectedCar])


                                    this.setState({
                                        KiloMetre: content
                                    })
                                    if (this.state.SelectedCar && this.state.SelectedTrip) {
                                        this.setState({
                                            checkRate: +(content) * rate[this.state.SelectedCar][this.state.SelectedTrip == 'ONE WAY DROP' ? 0 : 1]
                                        })
                                    }
                                }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={6} style={{ border: '2px solid #ffea00' }}>
                                <div style={{ padding: '10%' }}>
                                    <h3>
                                        {
                                            this.state.checkRate ? ` Total Charge : Rs.${this.state.checkRate} !!!` : 'Check Rate !!!'
                                        }

                                    </h3>
                                </div>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} style={{  }}>
                        {this.singleCar()}

                    </Grid>
                </Grid>
                {/* <div style={{width : '100%' }}>
                    <Button style={{ marginLeft: this.state.windowWidth >= 700 ? '11%' : '15%' , color: 'white', backgroundColor: '#CC0021', borderColor: 'yellow', borderRadius: '30px', width: '140px', height: '55px' }} variant="outlined" size="medium" onClick={() => {
                        this.props.props.history.push('/KarudaOnlineBooking')
                    }}  >
                        <span style={{ fontSize: '18px' }}>Book Now</span>
                    </Button>
                </div> */}
                <div style={{ marginLeft: this.state.windowWidth >= 700 ? '1%' : '5%'}}>
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
                        <p>{`Rs.${this.state.Sedan_One[0]}/km`}</p>
                    </Grid>
                    <Grid style={{ borderStyle: 'ridge', textAlign: 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <p>{`Rs.${this.state.Sedan_One[1]}/km`}</p>
                    </Grid>
                </Grid>

                <Grid container xs={12} sm={12} md={12} lg={12}>
                    <Grid style={{  borderStyle:'ridge' , textAlign : 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <p>Sedan (Only Etios)</p>
                    </Grid>
                    <Grid style={{ borderStyle: 'ridge', textAlign: 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <p>{`Rs.${this.state.Sedan_Two[0]}/km`}</p>
                    </Grid>
                    <Grid style={{ borderStyle: 'ridge', textAlign: 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <p>{`Rs.${this.state.Sedan_Two[1]}/km`}</p>
                    </Grid>
                </Grid>

                <Grid container xs={12} sm={12} md={12} lg={12}>
                    <Grid style={{  borderStyle:'ridge' , textAlign : 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <p>SUV (Xylo, Marazzo, Loggy, Tavera)</p>
                    </Grid>
                    <Grid style={{ borderStyle: 'ridge', textAlign: 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <p>{`Rs.${this.state.SUV_One[0]}/km`}</p>
                    </Grid>
                    <Grid style={{ borderStyle: 'ridge', textAlign: 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <p>{`Rs.${this.state.SUV_One[1]}/km`}</p>
                    </Grid>
                </Grid>

                <Grid container xs={12} sm={12} md={12} lg={12}>
                    <Grid style={{  borderStyle:'ridge' , textAlign : 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <p>SUV (Only Innova)</p>
                    </Grid>
                    <Grid style={{ borderStyle: 'ridge', textAlign: 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <p>{`Rs.${this.state.SUV_Two[0]}/km`}</p>
                    </Grid>
                    <Grid style={{ borderStyle: 'ridge', textAlign: 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <p>{`Rs.${this.state.SUV_Two[1]}/km`}</p>
                    </Grid>
                </Grid>

               
                <h1 style={{ width: '100%' , marginLeft: this.state.windowWidth >= 700 ? '10%' : '5%'}}> Additional charges details</h1>
                <Grid container xs={12} sm={12} md={12} lg={12}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <ul style={{fontSize : '20px' , marginLeft : '17%' }}>
                            <li>Toll Fees, Inter-State Permit charges (if any) are extra.</li>
                            <li>One way - Driver Bata Rs. 400. (If more than 400 km driver bata Rs.600).</li>
                            <li>Round Trip - Driver Bata Rs. 400 Per Day.</li>
                            <li>Tempo Traveler - Driver Bata Rs. 600.</li>
                            <li>Hill Station Charges - Rs. 400.</li>
                            <li> One way - Minimum running must be 130 km per day.</li>
                            <li>Round Trips - Minimum running must be 250km per day.</li>
                            <li> 1 day means 1 Calender day (from midnight 12 to Next Midnight 12)</li>
                            <li>Max lagguage capacity by vehicle type - Sedan - 3 suitcases, Suv - 4 suitcases</li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} style={{ display : 'none' ,  margin: this.state.windowWidth >= 700 ? '0%' : '5%'}}>
                        <h3>Trip Calculation</h3>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={12} lg={6}>

                                <KarudaSelectField
                                    lebel='Select Car'
                                    value={this.state.SelectedCar}
                                    menuData={CarList}
                                    onChange={(e) => {
                                        console.log(e)

                                       
                                        
                                        this.setState({
                                            SelectedCar: e.target.value
                                        })
                                        if (this.state.SelectedCar && this.state.SelectedTrip) {
                                            this.setState({
                                                checkRate: +(this.state.KiloMetre) * rate[e.target.value][this.state.SelectedTrip == 'ONE WAY DROP' ? 0 : 1]
                                            })
                                        }
                                    }}
                                /> <br></br>
                                <KarudaSelectField
                                    lebel='Trip'
                                    value={this.state.SelectedTrip}
                                    menuData={DropList}
                                    onChange={(e) => {
                                        console.log(e)
                                    
                                       
                                        this.setState({
                                            SelectedTrip: e.target.value
                                        })
                                        if (this.state.SelectedCar && this.state.SelectedTrip) {
                                            this.setState({
                                                checkRate: +(this.state.KiloMetre) * rate[this.state.SelectedCar][e.target.value == 'ONE WAY DROP' ? 0 : 1]
                                            })
                                        }
                                    }}
                                /><br></br><br></br>
                                <TextField style={{ width: '300px' }} id="outlined-basic" variant="outlined" label="Distance (in km)" value={this.state.KiloMetre} onChange={(e) => {
                                    var content = e.target.value
                                    content = content.replace(/[^0-9.]/gi, '')
                                    console.log(content)
                                    console.log(this.state.SelectedCar)
                                    console.log(this.state.SelectedTrip)
                                   
                                    console.log(rate[this.state.SelectedCar])
                                   
                                    
                                    this.setState({
                                        KiloMetre: content 
                                    })
                                    if (this.state.SelectedCar && this.state.SelectedTrip) {
                                        this.setState({
                                            checkRate: +(content) * rate[this.state.SelectedCar][this.state.SelectedTrip == 'ONE WAY DROP' ? 0 : 1]
                                        })
                                    }
                                }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={6} style={{  border: '2px solid #ffea00'}}>
                                <div style={{padding : '10%'}}>
                                    <h3>
                                        {
                                            this.state.checkRate ?  ` Total Charge : Rs.${this.state.checkRate} !!!` : 'Check Rate !!!'
                                        }
                                       
                                    </h3>
                                </div>
                            </Grid>

                        </Grid>
                        
                    </Grid>
                </Grid>

                {this.footer()}
            </React.Fragment>
          );
    }
}
 
export default KarudaTariff;