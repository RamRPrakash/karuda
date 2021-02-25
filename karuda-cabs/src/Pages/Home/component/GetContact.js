import React, { Component } from 'react'
import './../css/Home.css'
import Grid from '@material-ui/core/Grid';
import karudaLogo from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/karuda.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import BusinessIcon from '@material-ui/icons/Business';
class GetContact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <React.Fragment>
                <div style={{backgroundColor : 'black' , color : 'white' , paddingBottom : '2%'}}>
                    <Grid container>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <img style={{ width: '200px', margin: '2%', marginLeft : '20%'}} src={karudaLogo} alt="Karuda"/>
                            <p style={{fontSize : '18px' , margin : '2%' ,marginLeft : '10%'}}>
                                The perfect way to get through your everyday travel needs. City taxis are available 24/7 and you can book and travel in an instant. With rides starting from as low as Rs. 6/km, you can choose from a wide range of options! You can also opt to do your bit for the environment with karuda Share!
                            </p>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <h3 style={{ marginLeft: '20%' , fontSize : '20px' , marginTop : '10%'}}>Quick Link</h3>
                            <div style={{marginTop : '12%' , marginLeft : '25%'}}>Home</div>
                            <div style={{ marginTop: '2%',marginLeft : '25%'}}>Tariff</div> 
                            <div style={{ marginTop: '2%', marginLeft: '25%' }}>Online Booking</div>
                            <div style={{ marginTop: '2%', marginLeft: '25%' }}>About Us</div>
                            <div style={{ marginTop: '2%',marginLeft: '25%' }}>Contact Us</div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <h3 style={{ marginLeft: '20%', fontSize: '20px', marginTop: '10%' }}>Social Media</h3>
                            <FacebookIcon style={{fontSize : '40px', marginTop : '14%' , marginLeft : '10%' , color : 'yellow'}} />
                            <WhatsAppIcon style={{ fontSize: '40px', marginTop: '14%', marginLeft: '10%', color: 'yellow'}}/>
                            {/* <YouTubeIcon style={{ fontSize: '40px', marginTop: '14%', marginLeft: '10%', color: 'yellow'}}/> */}
                            <EmailIcon style={{ fontSize: '40px', marginTop: '14%', marginLeft: '10%', color: 'yellow'}}/>
                            <InstagramIcon style={{ fontSize: '40px', marginTop: '14%', marginLeft: '10%', color: 'yellow' }}/>
                            <BusinessIcon style={{ fontSize: '40px', marginTop: '14%', marginLeft: '10%', color: 'yellow' }}/>
                        </Grid>
                    </Grid>
                </div>

            </React.Fragment>
        );
    }
}
 
export default GetContact;