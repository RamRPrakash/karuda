import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import AcUnitIcon from '@material-ui/icons/AcUnit';

import KarudaAppBar from '../../../Component/KarudaAppBar'
import GetBookTaxi from '../../Home/component/GetBookTaxi'
import GetContact from '../../Home/component/GetContact'
import GetCopyRight from '../../Home/component/GetCopyRight'
import Trip from '../../Trip/view/Trip';
import KarudaCarList from '../../KarudaCar/component/KarudaCarList';
class OnlineBooking extends Component {
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
    // footer() {
    //     console.log(this.props)
    //     return (
    //         <React.Fragment>
    //             <Grid style={{ marginTop: '5%', backgroundColor: 'white', paddingBottom: '2%'}} container xs={12} sm={12} md={12} lg={12}>
    //                 <Grid item xs={12} sm={12} md={4} lg={4} style={{ marginLeft: this.state.windowWidth >= 700 ? '0%' : '' }}>
    //                     <div style={{ display: 'flex', width: '100%' }}>
    //                         <div style={{ width: '50%', height: '100px', textAlign: 'center'}}>
    //                             <HeadsetMicIcon style={{ fontSize: '140px' }} />
    //                         </div>
    //                         <div style={{ width: '50%' }}>
    //                             <div style={{ height: '50px' }}><h3>24/7 Customer Support</h3></div>
    //                             <div style={{ height: '50px' }}><p>You can call  9384841107 anytime for quick booking.</p></div>
    //                         </div>
    //                     </div>
    //                 </Grid>
    //                 <Grid item xs={12} sm={12} md={4} lg={4}>
    //                     <div style={{ display: 'flex', width: '100%' }}>
    //                         <div style={{ width: '50%', height: '100px', textAlign: 'center'}}>
    //                             <AcUnitIcon style={{ fontSize: '140px' }} />
    //                         </div>
    //                         <div style={{ width: '50%' }}>
    //                             <div style={{ height: '50px' }}><h3>Fully A/C Cabs</h3></div>
    //                             <div style={{ height: '50px' }}><p>All our cabs are fully equipped with Air conditioner.</p></div>
    //                         </div>
    //                     </div>
    //                 </Grid>
    //                 <Grid item xs={12} sm={12} md={4} lg={4}>
    //                     <div style={{ display: 'flex', width: '100%' }}>
    //                         <div style={{ width: '50%', height: '100px', textAlign: 'center'}}>
    //                             <DriveEtaIcon style={{ fontSize: '140px' }} />
    //                         </div>
    //                         <div style={{ width: '50%' }}>
    //                             <div style={{ height: '50px' }}><h3>24/7 Customer Support</h3></div>
    //                             <div style={{ height: '50px' }}><p>You can call  9384841107 anytime for quick booking.</p></div>
    //                         </div>
    //                     </div>
    //                 </Grid>
    //             </Grid>


    //             <Grid style={{ marginTop: '2%', backgroundColor: "#55bde3", color : 'white' ,  lineHeight: '0px', height: this.state.windowWidth >= 700 ? '170px' : '500px', textAlign: this.state.windowWidth >= 700 ? '' : 'center'}} container xs={12} sm={12} md={12} lg={12}>
    //                 <Grid item xs={12} sm={12} md={12} lg={3} >
    //                     <div style={{ display: 'none', width: '100%' }}>
    //                         <div style={{ height: '100px' }}>
    //                             <HeadsetMicIcon style={{ fontSize: '140px' }} />
    //                             <p>Click here for Feedback</p>
    //                         </div>

    //                     </div>
    //                 </Grid>
    //                 <Grid item xs={12} sm={12} md={12} lg={5} >
    //                     <div style={{ display: 'flex', width: '100%' }}>
    //                         <div style={{ height: '100px', lineHeight: '2' }}>
    //                             <p style={{ fontWeight: '600' }}>CALL US 24x7</p>
    //                             <h1>  9384841107 | 9940035922</h1>
    //                         </div>

    //                     </div>
    //                 </Grid>
    //                 <Grid item xs={12} sm={12} md={12} lg={3} >
    //                     <div style={{ display: 'flex', width: '100%' }}>
    //                         <div style={{ height: '100px', lineHeight: '2', width: this.state.windowWidth >= 700 ? '' : '100%' }}>
    //                             <p style={{ fontWeight: '600' }}>FOR WHATSAPP</p>
    //                             <h1>  9384841107</h1>
    //                         </div>

    //                     </div>
    //                 </Grid>
    //             </Grid>

    //             <Grid style={{ backgroundColor: 'white' }} container xs={12} sm={12} md={12} lg={12}>
    //                 {
    //                     this.state.windowWidth >= 700 ?
    //                         <h2 style={{ marginLeft: this.state.windowWidth >= 700 ? '25%' : '' }}><a target="_blank" href="https://www.google.com/maps/place/1st+Cross+St,+Karambakkam,+Kaveri+Nagar,+Porur,+Chennai,+Tamil+Nadu+600116/@13.0396794,80.1545894,17z/data=!3m1!4b1!4m5!3m4!1s0x3a52611b0be825a1:0xa465b2002e3e935b!8m2!3d13.0396794!4d80.1567781">Address: 5/3, 1st Cross Street, Karambakkam, Porur, Chennai-600116</a></h2>
    //                         :
    //                         <h4 style={{ textAlign: 'center', marginLeft: this.state.windowWidth >= 700 ? '25%' : '' }}><a target="_blank" href="https://www.google.com/maps/place/1st+Cross+St,+Karambakkam,+Kaveri+Nagar,+Porur,+Chennai,+Tamil+Nadu+600116/@13.0396794,80.1545894,17z/data=!3m1!4b1!4m5!3m4!1s0x3a52611b0be825a1:0xa465b2002e3e935b!8m2!3d13.0396794!4d80.1567781">Address: 5/3, 1st Cross Street, Karambakkam, Porur, Chennai-600116</a></h4>

    //                 }
    //             </Grid>
    //             <GetContact props={this.props.props}/>
    //             {/* <GetCopyRight/> */}
    //             <div style={{
    //                 backgroundColor: '#55bde3' , 
    //                 width : '100%'
    //             }}>
    //                 <div style={{ display: 'flex', fontSize: '18px', color: 'white' }}>
    //                     <div style={{ width: this.state.windowWidth >= 700 ? '50%' : '100%', marginLeft: this.state.windowWidth >= 700 ? '10%' : '2%' }}>
    //                         <p>karudacabs.com Copyright @ All rights reserved 2021</p>
    //                     </div>
    //                     <div style={{ width: '50%' }}>
    //                         <p>Designed and Developed by Skifter Technologies</p>
    //                     </div>
    //                 </div>

    //             </div>
    //             {/* <Grid style={{ backgroundColor: '#00695c', color: 'white' }} container xs={12} sm={12} md={12} lg={12}>
    //                 <p style={{ marginLeft: this.state.windowWidth >= 700 ? '40%' : '' }}>© 2021 by Karuda Cabs. All rights reserved.</p>
    //             </Grid> */}
    //         </React.Fragment>
    //     )
    // }
    footer() {
        console.log(this.props)
        return (
            <React.Fragment>
                <Grid style={{ marginTop: '3%', backgroundColor: '#f6f6f6', paddingBottom: '2%' , fontSize : '20px'}} container xs={12} sm={12} md={12} lg={12}>
                    <Grid item xs={12} sm={12} md={4} lg={4} style={{ marginLeft: this.state.windowWidth >= 700 ? '0%' : '' }}>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ width: '30%', height: '100px', textAlign: 'center' , marginTop : '3%'}}>
                                <HeadsetMicIcon style={{ fontSize: '100px' }} />
                            </div>
                            <div style={{ width: '70%' }}>
                                <div style={{ height: '50px' }}><h3>24/7 Customer Support</h3></div>
                                <div style={{ height: '50px' , marginTop : this.state.windowWidth >= 700 ? '-8%': '-2%',fontSize:this.state.windowWidth >= 700 ? '20px': '18px' }}><p>You can call  9384841107 anytime for quick booking.</p></div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ width: '30%', height: '100px', textAlign: 'center', marginTop : '3%'}}>
                                <AcUnitIcon style={{ fontSize: '100px' }} />
                            </div>
                            <div style={{ width: '70%' }}>
                                <div style={{ height: '50px' }}><h3>Fully A/C Cabs</h3></div>
                                <div style={{ height: '50px' , marginTop : this.state.windowWidth >= 700 ? '-8%': '-2%',fontSize : this.state.windowWidth >= 700 ? '20px': '18px'}}><p>All our cabs are fully equipped with Air conditioner.</p></div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ width: '30%', height: '100px', textAlign: 'center', marginTop : '3%'}}>
                                <DriveEtaIcon style={{ fontSize: '100px' }} />
                            </div>
                            <div style={{ width: '70%' }}>
                                <div style={{ height: '50px' }}><h3>24/7 Customer Support</h3></div>
                                <div style={{ height: '50px', marginTop : this.state.windowWidth >= 700 ? '-8%': '-2%',fontSize : this.state.windowWidth >= 700 ? '20px': '18px'}}><p>You can call  9384841107 anytime for quick booking.</p></div>
                            </div>
                        </div>
                    </Grid>
                </Grid>


                <Grid style={{ marginTop: '0%',  backgroundColor: "#55bde3", color : 'white' ,  lineHeight: '0px', height: this.state.windowWidth >= 700 ? '120px' : '500px', textAlign: this.state.windowWidth >= 700 ? '' : 'center' , marginBottom : '0%' , justifyContent : 'center'}} container xs={12} sm={12} md={12} lg={12}>
                 
                    <Grid item xs={12} sm={12} md={12} lg={5} style={{marginLeft : '13%'}} >
                        <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ height: '100px', lineHeight: '2' }}>
                                <p style={{ fontWeight: '600' , fontSize : '22px' , lineHeight : '30px' }}>CALL US 24x7</p>
                                <h2 style={{lineHeight : '0px'}}>  9384841107 | 9940035922</h2>
                            </div>

                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={3} style={{marginLeft : '3%'}}>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ height: '100px', lineHeight: '2', width: this.state.windowWidth >= 700 ? '' : '100%' , marginLeft : '3%'}}>
                                <p style={{ fontWeight: '600', fontSize : '22px', lineHeight : '30px' }}>FOR WHATSAPP</p>
                                <h2 style={{lineHeight : '0px' ,  }}>  9384841107</h2>
                            </div>

                        </div>
                    </Grid>
                </Grid>

                <Grid style={{ backgroundColor: '#f4eeee' , paddingTop : '1%' , paddingBottom : '1%'}} container xs={12} sm={12} md={12} lg={12}>
                    {
                        this.state.windowWidth >= 700 ?
                            <h2 style={{ marginLeft: this.state.windowWidth >= 700 ? '25%' : '' }}><a target="_blank" href="https://www.google.com/maps/place/1st+Cross+St,+Karambakkam,+Kaveri+Nagar,+Porur,+Chennai,+Tamil+Nadu+600116/@13.0396794,80.1545894,17z/data=!3m1!4b1!4m5!3m4!1s0x3a52611b0be825a1:0xa465b2002e3e935b!8m2!3d13.0396794!4d80.1567781">Address: 5/3, 1st Cross Street, Karambakkam, Porur, Chennai-600116</a></h2>
                            :
                            <h4 style={{ textAlign: 'center', marginLeft: this.state.windowWidth >= 700 ? '25%' : '' }}><a target="_blank" href="https://www.google.com/maps/place/1st+Cross+St,+Karambakkam,+Kaveri+Nagar,+Porur,+Chennai,+Tamil+Nadu+600116/@13.0396794,80.1545894,17z/data=!3m1!4b1!4m5!3m4!1s0x3a52611b0be825a1:0xa465b2002e3e935b!8m2!3d13.0396794!4d80.1567781">Address: 5/3, 1st Cross Street, Karambakkam, Porur, Chennai-600116</a></h4>

                    }
                </Grid>
                <GetContact props={this.props.props}/>
                {/* <GetCopyRight/> */}
                <div style={{
                    backgroundColor: '#55bde3' , 
                    width : '100%'
                }}>
                    <div className='karudaCopyRights' style={{ display: 'flex', fontSize: '18px', color: 'white', fontSize : '22px' }}>
                        <div style={{ width: this.state.windowWidth >= 700 ? '50%' : '100%', marginLeft: this.state.windowWidth >= 700 ? '2%' : '2%' }}>
                            <p>karudacabs.com Copyright @ All rights reserved 2021</p>
                        </div>
                        <div style={{ width: '50%', textAlign : 'end' , marginRight : '2%' }}>
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
    getCarList=(data)=>{
        this.setState({
         carList : data
        })
     }
     selectedCar=(data)=>{
       
             this.refs.selectCar.storeMail()
         this.setState({
             selectedCar : data
            })
     }
    render() { 
        return ( 
            <div style={{ marginTop: this.state.windowWidth >= 700 ? '12%' : '50%'}}>
                {/* <GetBookTaxi/> */}
                <Trip ref="selectCar"  getCarList={(data)=>this.getCarList(data)} selectedCar={this.state.selectedCar}/>
                <KarudaCarList  newhome={true}  carList={this.state.carList} selectedCar={(data)=>this.selectedCar(data)} />
                {this.footer()}
            </div>
         );
    }
}
 
export default OnlineBooking;