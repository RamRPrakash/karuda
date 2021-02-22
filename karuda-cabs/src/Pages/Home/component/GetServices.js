import React , {Component} from 'react'
import './../css/Home.css'
import Grid from '@material-ui/core/Grid';
class GetServices extends Component {
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
    render() { 
        return (
            <React.Fragment>
                <div className='setBackground'>

                    <h1 style={{ textAlign :'center' }}>OUR SERVICES</h1>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <h2 style={{ margin: '10%', fontSize: '22px', textAlign: 'center', lineHeight: '0px' }}>SECURE BOOKING</h2>
                            <p style={{margin : '2%' , fontSize : '20px' , lineHeight : '30px' }}>In more serious cases, threats of legal action and loss of business can occur for something which, essentially, wasn't your fault. By offering secure bookings, your business gains instant credibility and trustworthiness, as well as safeguarding your reputation.</p>

                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <h2 style={{ margin: '10%', fontSize: '22px', textAlign: 'center', lineHeight: '0px'}}>RELIABLE SERVICE</h2>
                            <p style={{ margin: '2%', fontSize: '20px', lineHeight: '30px'}}>Reliable Services is a Leading Website & SMS Marketing Company based in INDIA. Every business, whether small, mid size or large, strives for reaching the zenith.Reseller Hosting having website is a must for any business to reach out to maximum potential customers.</p>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <h2 style={{ margin: '10%', fontSize: '22px', textAlign: 'center', lineHeight: '0px' }}>FLEXIBLE CHARGES</h2>
                            <p style={{ margin: '2%', fontSize: '20px', lineHeight: '30px'}}>The Flexi Fare option provides flexibility to the flyers to make unlimited changes to travel dates without incurring a change fee, according to IndiGo's .Flexi Fares are aimed at the customer who wants flexibility and comfort in their travel Fare difference applies.</p>
                        </Grid>
                    </Grid>
                </div>

            </React.Fragment>
        );
    }
}
 
export default GetServices;