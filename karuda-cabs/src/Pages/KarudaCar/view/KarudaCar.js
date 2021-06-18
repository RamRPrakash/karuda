
import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import KarudaAppBar from '../../../Component/KarudaAppBar'
import KarudaCarList from '../component/KarudaCarList'
import NewAppBar from '../../../Component/NewAppBar';
class KarudaCar extends Component {
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
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowSize.bind(this));
    }
    render() { 
        return (
            <Grid container >
                <NewAppBar />
                {/* <KarudaAppBar props={this.props} /> */}
                {/* <div style={{ width: '100%', height: '70px', backgroundColor: '#ffeb3b', marginTop: this.state.windowWidth >= 700 ?'8%' : '' }}>
                    <marquee behavior="scroll" direction="left">
                        <h3>Our Cab Service available around TamilNadu, Pondy, Kerala, Karnataka, Andhra Pradesh & Telangana.</h3>
                    </marquee>
                </div> */}
                <KarudaCarList props={this.props} />
            </Grid>
        );
    }
}
 
export default KarudaCar;