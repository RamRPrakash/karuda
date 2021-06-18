import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import KarudaAppBar from '../../../Component/KarudaAppBar'
import KarudaFeedback from '../component/karudaFeedback'
import NewAppBar from '../../../Component/NewAppBar';
class KarudaAbout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            
            <Grid container >
                <NewAppBar/>
                {/* <KarudaAppBar props={this.props} /> */}
                <KarudaFeedback/>
            </Grid>
        );
       
    }
}
 
export default KarudaAbout;