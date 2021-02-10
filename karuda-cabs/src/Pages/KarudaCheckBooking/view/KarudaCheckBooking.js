import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import KarudaAppBar from '../../../Component/KarudaAppBar'
import BookingDetails from '../component/BookingDetails'
class KarudaCheckBooking extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (

            <Grid container >
                <KarudaAppBar props={this.props} />
                <BookingDetails/>
            </Grid>
        );
    }
}
 
export default KarudaCheckBooking;