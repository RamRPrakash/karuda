import React, { Component } from 'react'
import './../css/Home.css'
import Grid from '@material-ui/core/Grid';
import HalfCar from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/OffCar.png'
class GetDrivers extends Component {
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
            <React.Fragment>
                <div style={{marginLeft : '3%'}}>
                    <Grid container>
                        <Grid item xs={12} sm={6} md={4} lg={8}>
                            <h2 style={{color : 'yellow'}}>FOR DRIVERS</h2>
                            <h2>DO YOU WANT TO EARN WITH US?</h2>

                            <p style={{fontSize : '20px'}}>A taxicab, also known as a taxi or a cab, is a type of vehicle for hire with a driver, used by a single passenger or small group of passengers, often for a non-shared ride. A taxicab conveys passengers between locations of their choice</p>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={4} >
                            <img alt="Car" style={{ alignContent: 'right', height: this.state.windowWidth >= 700 ?  '350px' : '200px' }} src={HalfCar}></img>
                        </Grid>

                    </Grid>
                    <Grid container xs={12} sm={12} md={12} lg={12} style={{fontWeight : '500'}}>
                        <Grid item xs={12} sm={12} md={12} lg={6} >
                            <div style={{display : 'flex' , width : '100%' , marginTop : '2%'}}>
                                <div style={{width : '50%'}}>Luxury Car</div>
                                <div style={{ width: '50%' }}>Fixed Price</div>
                            </div>
                            <div style={{ display: 'flex', width: '100%', marginTop: '2%'}}>
                                <div style={{width : '50%'}}>No Fee</div>
                                <div style={{ width: '50%' }}>Good application</div>
                            </div>
                            <div style={{ display: 'flex', width: '100%', marginTop: '2%'}}>
                                <div style={{width : '50%'}}>Weekly payment</div>
                                <div style={{ width: '50%' }}>Stable orders</div>
                            </div>
                        </Grid>
                      
                      
                    </Grid>
                </div>

            </React.Fragment>
        );
    }
}
 
export default GetDrivers;