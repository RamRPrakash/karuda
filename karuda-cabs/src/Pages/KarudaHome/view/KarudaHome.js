import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import KarudaAppBar from '../../../Component/KarudaAppBar'
import KarudaBooking from '../component/KarudaBooking'
class KarudaHome extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(this.props)
        return ( 
            <Grid container >
                <KarudaAppBar props={this.props}/>
                <KarudaBooking/>
            </Grid>
         );
    }
}
 
export default KarudaHome;