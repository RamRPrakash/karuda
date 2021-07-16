import React , {Component} from 'react'
import karudaLogo from '../images/karuda.png'
import PhoneIcon from '@material-ui/icons/Phone';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Popper from '@material-ui/core/Popper';
import ListIcon from '@material-ui/icons/List';

var menuBars = ['LEFT' ,'LOGO', 'HOME', 'CARS', 'ONLINE BOOKING', 'TARIFF CHART', 'CONTACT US', 'MOBILE' , 'RIGHT'] 

class MobAppBar extends Component {


    constructor(props) {
        super(props);
        this.state = {  }
        console.log(props , '1')
    }
    handleClose(data){
        
        
        console.log(data)
        this.setState({
            open : false
        })
        if(data == 'HOME'){
            this.props.props.push('/')
        }
        else if(data == 'ONLINE BOOKING'){
            this.props.props.push('/KarudaOnlineBooking')

        }
        else if(data == 'TARIFF CHART'){
            this.props.props.push('/Tariff')

        }
        else if(data == 'CONTACT US'){
            this.props.props.push('/KarudaCheckBooking')

        }
       
    }
    render() { 
        return ( 
            <div className='mobile-ui' style={{ width: '100%', backgroundColor: '#55bde3' , position : 'fixed' , zIndex : 100}}>
                    <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', backgroundColor: '#55bde3' }}>
                        <ListIcon style={{ fontSize: '70px', color: '#ff9800' , marginTop : '6%'}} onClick={()=>{
                            this.setState({
                                open : !this.state.open
                            })
                        }} />
                        <img style={{ width: '200px', height: '90px'}} src={karudaLogo} alt="Karuda Cabs"></img>
                        </div>
                    <div style={{ background: '#55bde3', height: '70px', lineHeight: '42px',width: '80%' , marginTop : '3%' , marginLeft : '10%' }}>
                        <div style={{ borderRadius: '25px', background: '#cc0021' , display : 'flex' }}>
                            <div style={{ marginTop: '3%', color: 'white', marginLeft: '18%' , fontSize : '20px' }}>
                                <PhoneIcon  style={{fontSize : '25px'}} />
                            </div>
                            <div style={{ fontWeight: '500', color: 'white' , marginLeft : '5%' }}><a style={{color : 'white' , fontSize : '22px'}} href="tel:91   9384841107">+91   9384841107</a></div>
                        </div>
                        
                    </div> 
                    <Popper open={this.state.open} style={{zIndex : 100}}>
                    <Paper>
                            <ClickAwayListener onClickAway={() => {
                                this.setState({
                                    open: false
                                })
                            }}>
                                {/* 'HOME', 'CARS', 'ONLINE BOOKING', 'TARIFF CHART', 'CONTACT US', 'MOBILE' */}
                            <MenuList autoFocusItem={this.state.open} id="menu-list-grow" >
                                    <MenuItem onClick={() => { 
                                        window.scrollTo({
                                            top: 0,
                                            behavior: "smooth"
                                        });
                                        this.handleClose('HOME')  }}>HOME</MenuItem>
                                    {/* <MenuItem onClick={() => { this.handleClose('CARS') }}>CARS</MenuItem> */}
                                    <MenuItem onClick={() => {
                                        window.scrollTo({
                                            top: 0,
                                            behavior: "smooth"
                                        });
                                        this.handleClose('ONLINE BOOKING') }}>ONLINE BOOKING</MenuItem>
                                    <MenuItem onClick={() => {
                                        window.scrollTo({
                                            top: 0,
                                            behavior: "smooth"
                                        });
                                        this.handleClose('TARIFF CHART') }}>TARIFF CHART</MenuItem>
                                    <MenuItem onClick={() => { 
                                        window.scrollTo({
                                            top: 0,
                                            behavior: "smooth"
                                        });
                                        this.handleClose('CONTACT US') }}>CONTACT US</MenuItem>
                                    {/* <MenuItem onClick={() => { this.handleClose('MOBILE') }}>MOBILE</MenuItem> */}
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                    </Popper>
                </div>
         );
    }
}
 
export default MobAppBar;