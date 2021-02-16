import React, { Component } from 'react'
import './../css/Home.css'
import Grid from '@material-ui/core/Grid';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
   
    KeyboardDatePicker,
} from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import CustomerCare from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/customer.jpg'
class GetBookTaxi extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedDate : ''
         }
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
                <div style={{ width: '100%', height: this.state.windowWidth >= 700 ? '600px' : '1200px' , backgroundColor : 'black'}} >
                    <Grid container xs={12} sm={12} md={12} lg={12}>
                        <Grid item xs={12} sm={12} md={12} lg={8} >
                               <div style={{color : 'white'}}>
                                   <h3>book taxi now</h3>
                                   <div style={{ display : 'flex' , width : '100%'}}>
                                    <div style={{ color: 'yellow', width: '50%',}}>
                                                <h4>When</h4>
                                        </div>
                                        <div style={{color : 'yellow' , backgroundColor : 'white'}}>
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <KeyboardDatePicker
                                                disableToolbar
                                                variant="inline"
                                                format="MM/dd/yyyy"
                                                margin="normal"
                                                id="date-picker-inline"
                                                label=""
                                                value={this.state.selectedDate}
                                                onChange={(day)=>{
                                                    this.setState({ selectedDate : day})
                                                }}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />
                                            </MuiPickersUtilsProvider>
                                        </div>
                                   </div><br></br>

                                <div style={{ display: 'flex', width: '100%' }}>
                                    <div style={{ width: '50%', color: 'yellow',}}>hour</div>
                                    <div style={{backgroundColor : 'white'}}>
                                        <TextField id="outlined-basic" label="hour" variant="outlined" />
                                    </div>
                                </div> <br></br>
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <div style={{ width: '50%', color: 'yellow', }}>start destination</div>
                                    <div style={{ backgroundColor: 'white' }}>
                                        <TextField id="outlined-basic" label="hour" variant="outlined" />
                                    </div>
                                </div><br></br>
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <div style={{ width: '50%', color: 'yellow', }}>end destination</div>
                                    <div style={{ backgroundColor: 'white' }}>
                                        <TextField id="outlined-basic" label="hour" variant="outlined" />
                                    </div>
                                </div><br></br>
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <div style={{ width: '50%', color: 'yellow', }}>choose vehicle</div>
                                    <div style={{ backgroundColor: 'white' }}>
                                        <TextField id="outlined-basic" label="hour" variant="outlined" />
                                    </div>
                                </div><br></br>
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <div style={{ width: '50%', color: 'yellow', }}>phone</div>
                                    <div style={{ backgroundColor: 'white' }}>
                                        <TextField id="outlined-basic" label="hour" variant="outlined" />
                                    </div>
                                </div><br></br>
                               </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={4} >
                            <img style={{width : '100%' , height :'600px'}} alt="Customer Care" src={CustomerCare}  ></img>
                        </Grid>
                    </Grid>
                </div>

            </React.Fragment>
        );
    }
}
 
export default GetBookTaxi;