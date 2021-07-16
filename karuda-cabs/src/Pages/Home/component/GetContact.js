import React, { Component } from 'react'
import './../css/Home.css'
import Grid from '@material-ui/core/Grid';
import karudaLogo from '../../../images/karuda.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import BusinessIcon from '@material-ui/icons/Business';


import facebook1 from '../../../images/facebook1.svg'
import facebook from '../../../images/facebook.svg'
import googleplus1 from '../../../images/googleplus1.svg'
import instagram1 from '../../../images/instagram1.svg'
import twitter1 from '../../../images/twitter1.svg'
import google from '../../../images/google.svg'
import twitter from '../../../images/twitter.svg'
import insta from '../../../images/insta.svg'
class GetContact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <React.Fragment>
                <div className='karudaFooter' style={{backgroundColor : '#white' , color : '#55bde3' , paddingBottom : '2%' , paddingTop : '3%' ,  marginTop : '0%'}}>
                    <Grid container>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <img style={{ width: '200px', margin: '2%', marginLeft : this.state.windowWidth >= 700 ? '38%':'30%'}} src={karudaLogo} alt="Karuda"/>
                            <p style={{fontSize : '22px' , lineHeight : '40px' ,  margin : '2%' ,marginLeft : '15%' , textAlign : 'center' , color : 'white'}}>
                                The perfect way to get through your everyday travel needs. City taxis are available 24/7 and you can book and travel in an instant. With rides starting from as low as Rs. 6/km, you can choose from a wide range of options! You can also opt to do your bit for the environment with karuda Share!
                            </p>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4} style={{textAlign : 'center' , color : 'white' , fontSize : '22px'}}>
                            <h3 style={{ marginLeft: '0%' , fontSize : '25px' , marginTop : '0%' , color : 'white'}}>Quick Link</h3>
                            <div style={{marginTop : '1%' , marginLeft : '0%' , cursor : 'pointer' , lineHeight : '50px' }} onClick={()=>{
                                console.log(this.props)
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                });
                                this.props.props.history.push('/')
                            }}>Home</div>
                            <div style={{ marginTop: '2%', marginLeft: '0%', cursor: 'pointer',lineHeight : '50px' }} onClick={() => {
                                console.log(this.props)
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                });
                                this.props.props.history.push('/Tariff')
                            }}>Tariff</div> 
                            <div style={{ marginTop: '2%', marginLeft: '0%', cursor: 'pointer' ,lineHeight : '50px'}} onClick={() => {
                                console.log(this.props)
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                });
                                this.props.props.history.push('/KarudaOnlineBooking')
                            }}>Online Booking</div>
                            {/* <div style={{ marginTop: '2%', marginLeft: '25%', cursor: 'pointer' }} onClick={() => {
                                console.log(this.props)
                                this.props.props.history.push('/')
                            }}>About Us</div> */}
                            <div style={{ marginTop: '2%', marginLeft: '0%', cursor: 'pointer',lineHeight : '40px' }} onClick={() => {
                                console.log(this.props)
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                });
                                this.props.props.history.push('/KarudaCheckBooking')
                            }}>Contact Us</div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <h3 style={{ marginLeft: '30%', fontSize: '25px', marginTop: '0%', color : 'white' }}>Social Media</h3>
                            {/* <FacebookIcon style={{fontSize : '40px', marginTop : '14%' , marginLeft : '10%' , color : 'yellow'}} /> */}
                            {/* <WhatsAppIcon style={{ fontSize: '40px', marginTop: '14%', marginLeft: '10%', color: 'yellow'}}/> */}
                            {/* <YouTubeIcon style={{ fontSize: '40px', marginTop: '14%', marginLeft: '10%', color: 'yellow'}}/> */}
                            {/* <EmailIcon style={{ fontSize: '40px', marginTop: '14%', marginLeft: '10%', color: 'yellow'}}/> */}
                            {/* <InstagramIcon style={{ fontSize: '40px', marginTop: '14%', marginLeft: '10%', color: 'yellow' }}/> */}
                            {/* <BusinessIcon style={{ fontSize: '40px', marginTop: '14%', marginLeft: '10%', color: 'yellow' }}/> */}
                            {/* <img style={{ width: '50px', marginLeft: '10%', color: 'yellow' }} src={whatsapp} alt='googleBusiness'></img>
                            <img style={{ width: '50px', marginLeft: '10%', color: 'yellow'}} src={instagram} alt='googleBusiness'></img> */}
                            <img style={{ width: '40px', marginLeft: '10%', color: 'white' , marginTop : '1%' , marginLeft : '15%' }} src={facebook} alt='googleBusiness'></img>
                            <img style={{ width: '40px', marginLeft: '10%', color: 'white' }} src={google} alt='googleBusiness'></img>
                            <img style={{ width: '40px', marginLeft: '10%', color: 'white' }} src={insta} alt='googleBusiness'></img>
                            <img style={{ width: '40px', marginLeft: '10%', color: 'white' }} src={twitter} alt='googleBusiness'></img>
                        </Grid>
                    </Grid>
                </div>

            </React.Fragment>
        );
    }
}
 
export default GetContact;