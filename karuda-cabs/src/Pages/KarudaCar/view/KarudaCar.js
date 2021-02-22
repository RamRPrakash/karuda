
import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import KarudaAppBar from '../../../Component/KarudaAppBar'
import KarudaCarList from '../component/KarudaCarList'
class KarudaCar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Grid container >
                <KarudaAppBar props={this.props} />
                <div style={{ width: '100%', height: '70px', backgroundColor: '#ffeb3b' }}>
                    <marquee behavior="scroll" direction="left">
                        <h3>Our Cab Service available around TamilNadu, Pondy, Kerala, Karnataka, Andhra Pradesh & Telungana.</h3>
                    </marquee>
                </div>
                <KarudaCarList props={this.props} />
            </Grid>
        );
    }
}
 
export default KarudaCar;