import React, { Component } from 'react'
import karudaLogo from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/karuda.png'
import PhoneIcon from '@material-ui/icons/Phone';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Popper from '@material-ui/core/Popper';
import ListIcon from '@material-ui/icons/List';
var menuBars = ['LEFT' ,'LOGO', 'HOME', 'CARS', 'ONLINE BOOKING', 'TARIFF CHART', 'CONTACT US', 'MOBILE' , 'RIGHT'] //'ABOUT US',
class KarudaAppBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open : false
          }
    }
    changePage=(item)=>{

        if(item == 'HOME'){
            this.props.props.history.push('/')
        }
        else if (item == 'ABOUT US') {
            this.props.props.history.push('/KarudaAbout')
        }
        else if (item == 'CARS'){
            this.props.props.history.push('/KarudaCar')
        }
        else if (item == 'ONLINE BOOKING'){
            this.props.props.history.push('/KarudaOnlineBooking')
        }
        else if (item == 'CONTACT US'){
            this.props.props.history.push('/KarudaCheckBooking')
        }
        else if (item == 'TARIFF CHART'){
            this.props.props.history.push('/Tariff')
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

    handleClose(data){
        console.log(data)
        this.setState({
            open : false
        })
        this.changePage(data)
    }
    render() { 
        return ( 
           <React.Fragment> 
                <div className='web-ui' style={{ width: '100%', height: '130px', backgroundColor: '#252525' , color : 'white', lineHeight : '100px' , }}>
                <div style={{ display: 'flex',   width : '100%'}}>
                {
                        menuBars.map((item , index)=>{
                            return (
                                <div style={{ width: item == 'HOME' || item == 'CARS' ? '10%' : item == 'LEFT' || item == 'RIGHT' ? '2%' :  '20%', cursor: 'pointer', marginLeft: item == 'MOBILE' ?  '' : item == 'LOGO' ?  '2%' : item =='HOME' ? '' : ''}} item >
                                    {
                                        item === 'LOGO'?
                                             <img style={{width : '230px' , height : '90px' , lineHeight : '100px' , marginTop : '20px'}} src={karudaLogo} alt="Karuda Cabs"></img> 
                                             : 
                                            item === 'MOBILE' ?
                                                <div style={{ borderRadius: '88px', background: '#ffea00', height: '40px', lineHeight: '42px', marginTop: '46px' , display : 'flex'  , textAlign : 'right' , width :'156px' }}> 
                                                    <div style={{  marginTop: '3%', color:'#cc0021' }}> 
                                                        <PhoneIcon />
                                                    </div>  
                                                    <div style={{ fontWeight: '500', color: '#252525' }}><a href="tel:91 9384841107">+91 9384841107</a></div>
                                                </div> 
                                                : 
                                                item === 'LEFT' || item === 'RIGHT' ? <div></div> :
                                                <p style={{ fontWeight: '500' , textAlign : 'center' }} onClick={()=>this.changePage(item)}>{ item }</p>

                                    }
                                   
                                </div>
                            )
                        })
                }
                </div>
                
            </div>
                <div className='mobile-ui' style={{ width: '100%', backgroundColor: '#252525'}}>
                    <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', backgroundColor: '#252525' }}>
                        <ListIcon style={{ fontSize: '70px', color: '#ff9800' , marginTop : '6%'}} onClick={()=>{
                            this.setState({
                                open : !this.state.open
                            })
                        }} />
                        <img style={{ width: '200px', height: '90px'}} src={karudaLogo} alt="Karuda Cabs"></img>
                        </div>
                    <Popper open={this.state.open}>
                    <Paper>
                            <ClickAwayListener onClickAway={() => {
                                this.setState({
                                    open: false
                                })
                            }}>
                                {/* 'HOME', 'CARS', 'ONLINE BOOKING', 'TARIFF CHART', 'CONTACT US', 'MOBILE' */}
                            <MenuList autoFocusItem={this.state.open} id="menu-list-grow" >
                                    <MenuItem onClick={() => { this.handleClose('HOME') }}>HOME</MenuItem>
                                    <MenuItem onClick={() => { this.handleClose('CARS') }}>CARS</MenuItem>
                                    <MenuItem onClick={() => { this.handleClose('ONLINE BOOKING') }}>ONLINE BOOKING</MenuItem>
                                    <MenuItem onClick={() => { this.handleClose('TARIFF CHART') }}>TARIFF CHART</MenuItem>
                                    <MenuItem onClick={() => { this.handleClose('CONTACT US') }}>CONTACT US</MenuItem>
                                    <MenuItem onClick={() => { this.handleClose('MOBILE') }}>MOBILE</MenuItem>
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                    </Popper>
                </div>
            </React.Fragment>
         );
    }
}
 
export default KarudaAppBar;