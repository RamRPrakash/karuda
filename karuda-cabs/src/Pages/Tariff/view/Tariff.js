import React , {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import KarudaAppBar from '../../../Component/KarudaAppBar'
import KarudaTariff from '../component/KarudaTariff'
import NewAppBar from '../../../Component/NewAppBar';
import Card from '@material-ui/core/Card';

class Tariff extends Component {
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
           
            <div >
                <NewAppBar />
                {/* <KarudaAppBar props={this.props} /> */}
                {/* <div style={{ width: '100%', height: '70px', backgroundColor: '#ffeb3b', marginTop: this.state.windowWidth >= 700 ? '8%' : ''}}>
                    <marquee behavior="scroll" direction="left">
                        <h3>Our Cab Service available around TamilNadu, Pondy, Kerala, Karnataka, Andhra Pradesh & Telangana.</h3>
                    </marquee>
                </div> */}
                <KarudaTariff props={this.props}/>
            </div>
           
        );
    }
}
 
export default Tariff;