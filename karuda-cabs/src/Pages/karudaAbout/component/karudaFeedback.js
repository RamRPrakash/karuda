import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import CommuteIcon from '@material-ui/icons/Commute';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';
class KarudaFeedback extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <Grid container xs={12} sm={12} md={12} lg={12}>
                    <Grid item xs={12} sm={12} md={12} lg={4}>
                        <div>
                            <h2>Welcome to EMSR Travels</h2>
                            <p>EMSR Travels is one among the most preferred & trusted taxi services in Tamilnadu, Bangalore, Pondy, Andhra Pradesh and nearby. The journey started in the year 2009 and we are still travelling with satisfied customers on the road.</p>
                            <p>We provide you with clean and safety ride. We do NOT compromise with the quality. Your trusted journey for a cost saving and safe journey in and around Tamilnadu, Bangalore, Kerala, Andhra Pradesh, and Pondy.</p>
                        </div>
                        <div style={{display : 'flex' , justifyContent : 'space-around'}}>
                            {/* <Card>
                                <LocalAtmIcon style={{fontSize : '20px'}} />
                                <h6>Best Price Guarantee</h6>
                            </Card> */}
                        </div>

                    </Grid>
                </Grid>
            </React.Fragment>
         );
    }
}
 
export default KarudaFeedback;