import React , {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import KarudaAppBar from '../../../Component/KarudaAppBar'
import KarudaTariff from '../component/KarudaTariff'
class Tariff extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (

            <Grid container >
                <KarudaAppBar props={this.props} />
                <KarudaTariff />
            </Grid>
        );
    }
}
 
export default Tariff;