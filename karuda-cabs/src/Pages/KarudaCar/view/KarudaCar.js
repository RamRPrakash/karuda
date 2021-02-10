
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
                <KarudaCarList />
            </Grid>
        );
    }
}
 
export default KarudaCar;