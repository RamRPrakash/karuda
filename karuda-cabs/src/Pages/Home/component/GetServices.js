import React , {Component} from 'react'
import './../css/Home.css'
import Grid from '@material-ui/core/Grid';
class GetServices extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <React.Fragment>
                <div className='setBackground'>

                    <h1 style={{marginLeft : '40%'}}>OUR SERVICES</h1>
                    <Grid container>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <h2 style={{margin : '10%' , fontSize : '18px' }}>SECURE BOOKING</h2>
                            <p style={{margin : '2%'}}>In more serious cases, threats of legal action and loss of business can occur for something which, essentially, wasn't your fault. By offering secure bookings, your business gains instant credibility and trustworthiness, as well as safeguarding your reputation.</p>

                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <h2 style={{ margin: '10%', fontSize: '18px' }}>RELIABLE SERVICE</h2>
                            <p style={{ margin: '2%' }}>Reliable Services is a Leading Website & SMS Marketing Company based in INDIA. Every business, whether small, mid size or large, strives for reaching the zenith. In the present times, when the entire world seems to be going online through Web Designing , Google Adwords, Bulk SMS, Bulk Email, Web Hosting, Reseller Hosting having website is a must for any business to reach out to maximum potential customers.</p>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <h2 style={{ margin: '10%', fontSize: '18px' }}>FLEXIBLE CHARGES</h2>
                            <p style={{ margin: '2%' }}>The Flexi Fare option provides flexibility to the flyers to make unlimited changes to travel dates without incurring a change fee, according to IndiGo's website - goindigo.in. Flexi Fares are aimed at the customer who wants flexibility and comfort in their travel, according to the airline. ... Fare difference applies.</p>
                        </Grid>
                    </Grid>
                </div>

            </React.Fragment>
        );
    }
}
 
export default GetServices;