import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import KarudaAppBar from '../../../Component/KarudaAppBar'
import BookingDetails from '../component/BookingDetails'
class KarudaCheckBooking extends Component {
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
                <KarudaAppBar props={this.props} />{this.state.windowWidth >= 700 ? <div><br></br><br></br><br></br><br></br><br></br><br></br></div> : null}
                <div style={{ width: '100%', height: '70px', backgroundColor: '#ffeb3b', }}>
                    <marquee behavior="scroll" direction="left">
                        <h3>Our Cab Service available around TamilNadu, Pondy, Kerala, Karnataka, Andhra Pradesh & Telangana.</h3>
                    </marquee>
                </div>
                <BookingDetails/>
            </Grid>
        );
    }
}
 
export default KarudaCheckBooking;