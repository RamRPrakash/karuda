import React, { Component } from 'react'
import './../css/Home.css'
import Grid from '@material-ui/core/Grid';
class GetDrivers extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <React.Fragment>
                <div className='setBackground' style={{
                    height: '1000px',
                    backgroundImage: `url(drivers.jpg)`,
                }}>
                    <Grid container>
                        <Grid item xs={12} sm={6} md={4} lg={6}>
                            <h2 style={{color : 'yellow'}}>FOR DRIVERS</h2>
                            <h2>DO YOU WANT TO EARN WITH US?</h2>

                            <p style={{fontSize : '20px'}}>A taxicab, also known as a taxi or a cab, is a type of vehicle for hire with a driver, used by a single passenger or small group of passengers, often for a non-shared ride. A taxicab conveys passengers between locations of their choice</p>
                        </Grid>

                    </Grid>
                    <Grid container xs={12} sm={6} md={4} lg={6}>
                        <Grid item xs={6} sm={3} md={2} lg={3}>
                               <div style={{marginTop : '30%'}}> <span style={{fontSize : '22px', color : 'red'}}> > </span> Test    1 </div>
                            <div style={{ marginTop: '30%' }}><span style={{ fontSize: '22px', color: 'red' }}> > </span> Test    2 </div>
                            <div style={{ marginTop: '30%' }}><span style={{ fontSize: '22px', color: 'red' }}> > </span> Test    3 </div>
                        </Grid>
                        <Grid item xs={6} sm={3} md={2} lg={3}>
                            <div style={{ marginTop: '30%' }}> <span style={{ fontSize: '22px', color: 'red' }}> > </span>Test    4 </div>
                            <div style={{ marginTop: '30%' }}> <span style={{ fontSize: '22px', color: 'red' }}> > </span>Test    5 </div>
                            <div style={{ marginTop: '30%' }}> <span style={{ fontSize: '22px', color: 'red' }}> > </span>Test    6 </div>
                        </Grid>
                    </Grid>
                </div>

            </React.Fragment>
        );
    }
}
 
export default GetDrivers;