import React, { Component } from 'react'
import karudaLogo from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/karuda.png'
import PhoneIcon from '@material-ui/icons/Phone';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Popper from '@material-ui/core/Popper';
import ListIcon from '@material-ui/icons/List';
import Grid from '@material-ui/core/Grid';
var menuBars = ['LOGO', 'HOME', 'CARS', 'ONLINE BOOKING', 'TARIFF CHART', 'CHECK YOUR BOOKING', 'MOBILE'] //'ABOUT US',
class KarudaCabApp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            open: false
         }
    }
    changePage = (item) => {

        if (item == 'HOME') {
            this.props.props.history.push('/')
        }
        else if (item == 'ABOUT US') {
            this.props.props.history.push('/KarudaAbout')
        }
        else if (item == 'CARS') {
            this.props.props.history.push('/KarudaCar')
        }
        else if (item == 'ONLINE BOOKING') {
            this.props.props.history.push('/KarudaOnlineBooking')
        }
        else if (item == 'CHECK YOUR BOOKING') {
            this.props.props.history.push('/KarudaCheckBooking')
        }
        else if (item == 'TARIFF CHART') {
            this.props.props.history.push('/Tariff')
        }
    }
    handleClose(data) {
        console.log(data)
        this.setState({
            open: false
        })
        this.changePage(data)
    }

    render() { 
        return ( 
            <React.Fragment>
                <div className='mobile-ui' style={{ width: '100%', backgroundColor: '#252525' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', backgroundColor: '#252525' }}>
                        <ListIcon style={{ fontSize: '70px', color: '#ff9800', marginTop: '6%' }} onClick={() => {
                            this.setState({
                                open: !this.state.open
                            })
                        }} />
                        <img style={{ width: '200px', height: '90px' }} src={karudaLogo} alt="Karuda Cabs"></img>
                    </div>
                    <Popper open={this.state.open}>
                        <Paper>
                            <ClickAwayListener onClickAway={() => {
                                this.setState({
                                    open: false
                                })
                            }}>
                                {/* 'HOME', 'CARS', 'ONLINE BOOKING', 'TARIFF CHART', 'CHECK YOUR BOOKING', 'MOBILE' */}
                                <MenuList autoFocusItem={this.state.open} id="menu-list-grow" >
                                    <MenuItem onClick={() => { this.handleClose('HOME') }}>HOME</MenuItem>
                                    <MenuItem onClick={() => { this.handleClose('CARS') }}>CARS</MenuItem>
                                    <MenuItem onClick={() => { this.handleClose('ONLINE BOOKING') }}>ONLINE BOOKING</MenuItem>
                                    <MenuItem onClick={() => { this.handleClose('TARIFF CHART') }}>TARIFF CHART</MenuItem>
                                    <MenuItem onClick={() => { this.handleClose('CHECK YOUR BOOKING') }}>CHECK YOUR BOOKING</MenuItem>
                                    <MenuItem onClick={() => { this.handleClose('MOBILE') }}>MOBILE</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Popper>
                </div>

                <div className='web-ui' style={{ width: '100%', height: '130px', backgroundColor: '#252525', color: 'white', lineHeight: '100px', }}>
                    <Grid container >
                            {
                            menuBars.map((item , index)=>{
                                var xs = 1
                                var sm = 1
                                var md = 1
                                var lg = 1
                                if (item === 'LOGO' || item === 'ONLINE BOOKING' || item === 'TARIFF CHART' || item === 'CHECK YOUR BOOKING' || item == 'MOBILE' ){
                                     xs = 1
                                     sm = 1
                                     md = 1
                                     lg = 2
                                }
                                return(
                                    <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                                        {
                                            item === 'LOGO' ?
                                                <img style={{ width: '230px', height: '90px', lineHeight: '100px', marginTop: '20px' }} src={karudaLogo} alt="Karuda Cabs"></img>
                                                : 
                                                item === 'MOBILE' ?
                                                    <div style={{ borderRadius: '88px', background: '#ffea00', height: '40px', lineHeight: '42px', marginTop: '46px', display: 'flex' }}>
                                                        <div style={{ marginLeft: '10%', marginTop: '3%', color: '#cc0021' }}>
                                                            <PhoneIcon />
                                                        </div>
                                                        <div style={{ fontWeight: '500', color: '#252525' }}>+91   9384841107</div>
                                                    </div>
                                                    : 
                                                    <p style={{ fontWeight: '500', textAlign: 'center' }} onClick={() => this.changePage(item)}>{item}</p>
                                        }
                                    </Grid>
                                )
                            })
                            }
                    </Grid>
                </div>

            </React.Fragment>
         );
    }
}
 
export default KarudaCabApp;