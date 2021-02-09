import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import KarudaAppBar from '../../../Component/KarudaAppBar'
class KarudaAbout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            
            <Grid container >
                <KarudaAppBar props={this.props} />
               
            </Grid>
        );
       
    }
}
 
export default KarudaAbout;