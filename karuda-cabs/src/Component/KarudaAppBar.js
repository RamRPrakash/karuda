import React, { Component } from 'react'
import karudaLogo from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/karuda.png'
import PhoneIcon from '@material-ui/icons/Phone';

var menuBars = ['LOGO','HOME','CARS','ONLINE BOOKING','TARIFF CHART','CHECK YOUR BOOKING','MOBILE']
class KarudaAppBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    changePage=(item)=>{

        if(item == 'HOME'){
            this.props.props.history.push('/')
        }
        else if (item == 'CARS'){
            this.props.props.history.push('/KarudaAbout')
        }
    }
    render() { 
        return ( 
            <div className='web-ui' style={{ width: '100%', height: '100px', backgroundColor: '#00695c' , lineHeight : '100px' , }}>
                <div style={{ display: 'flex', justifyContent: 'space-between',  width : '100%'}}>
                {
                        menuBars.map((item , index)=>{
                            return (
                                <div style={{width : '200px' , cursor : 'pointer'}} item >
                                    {
                                        item === 'LOGO'?
                                             <img style={{width : '200px' , height : '100px'}} src={karudaLogo} alt="Karuda Cabs"></img> 
                                             : 
                                            item === 'MOBILE' ?
                                                <div style={{ borderRadius: '88px', background: '#ffea00', height: '40px', lineHeight: '42px', marginTop: '46px' }}> <span style={{marginLeft : '4%' , marginTop : '2%'}}> <PhoneIcon /></span>  <span style={{ fontWeight: '500' }}>+91 9876543210</span></div> 
                                                : 
                                                <p style={{ fontWeight: '500' }} onClick={()=>this.changePage(item)}>{ item }</p>

                                    }
                                   
                                </div>
                            )
                        })
                }
          
                </div>
            </div>
         );
    }
}
 
export default KarudaAppBar;