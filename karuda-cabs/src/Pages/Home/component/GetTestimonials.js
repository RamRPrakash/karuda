import React, { Component } from 'react'
import './../css/Home.css'
import SwipeableTextMobileStepper from './SwipeableTextMobileStepper'
import Grid from '@material-ui/core/Grid';
class GetTestimonials extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
          
                <div className='setBackground' style={{
                    height: '700px',
                    backgroundImage: `url(testimonials.jpg)`,
                }}>
                <Grid container>
                    <Grid style={{marginLeft : '35%' , marginTop : '15%'}} item xs={12} sm={6} md={4} lg={4}>
                        <SwipeableTextMobileStepper />
                    </Grid>
                </Grid>
                  
                             
                   
                </div>


        );
    }
}
 
export default GetTestimonials;