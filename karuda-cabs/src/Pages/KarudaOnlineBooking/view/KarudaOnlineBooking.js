import React , {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import AcUnitIcon from '@material-ui/icons/AcUnit';

import KarudaAppBar from '../../../Component/KarudaAppBar' 
import OnlineBooking from "../component/OnlineBooking";
class karudaOnlineBooking extends Component {
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
    render() { 
        return (
            <div>
                <KarudaAppBar props={this.props}/>
                <OnlineBooking/>
            </div>
          );
    }
}
 
export default karudaOnlineBooking;