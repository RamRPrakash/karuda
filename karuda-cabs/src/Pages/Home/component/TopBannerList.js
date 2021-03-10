import React, { Component } from 'react'
import Carousel from 'react-elastic-carousel';
import carList from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/car.png'
import ReactWhatsapp from 'react-whatsapp';
import Button from '@material-ui/core/Button';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { DriveEta } from '@material-ui/icons';
import Dzire from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/Dzire.png'
import ETIOS from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/ETIOS.png'
import Sunny from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/Sunny.png'
import xcent from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/xcent.png'
import zest from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/zest.png'
import INNOVA from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/INNOVA.png'
import LODGY from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/LODGY.png'
import MARAZZO from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/MARAZZO.png'
import TAVERA from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/TAVERA.png'
import XYLO from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/XYLO.png'
class TopBannerList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: [
                { id: 1, title: 'Car 1' },
                { id: 2, title: 'Car 2' },
                { id: 3, title: 'Car 3' },
                { id: 4, title: 'Car 4' },
                { id: 5, title: 'Car 5' },
                { id: 6, title: 'Car 5' },
                { id: 7, title: 'Car 5' },
                { id: 8, title: 'Car 5' },
                { id: 9, title: 'Car 5' },
                { id: 10, title: 'Car 5' },
            ]
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
        const { items } = this.state;
        var data = `url(car.png)`
        return (
            <div >
                <Carousel>
                    {items.map(item => 
                       
                            <div style={{
                            height: this.state.windowWidth >= 700 ?  '400px' : '200px' , 
                                width : '100%',

                            }} key={item.id}>
                                {/* {item.title} */}
                            <div>
                                <img alt='img' style={{ width: this.state.windowWidth >= 700 ?'50%' : '80%', height: this.state.windowWidth >= 700 ? '400px' : '150px' , marginLeft : '20%'}} 
                                    src={
                                        item.id == 1 ? Dzire : 
                                            item.id == 2 ? ETIOS : 
                                                item.id == 3 ? Sunny :
                                                    item.id == 4 ? xcent : 
                                                        item.id == 5 ? zest : 
                                                            item.id == 6 ? INNOVA : 
                                                                item.id == 7 ? LODGY : 
                                                                    item.id == 8 ? MARAZZO : 
                                                                        item.id == 9 ? TAVERA : XYLO
                                        
                                        }></img>
                            </div>
                            </div>
                      
                        )}
                </Carousel>
                <div style={{display : 'flex' , marginTop : '3%'}}>
                    <Button style={{ marginLeft: this.state.windowWidth >= 700 ? '32%' : '5%', color: 'white', backgroundColor: '#cc0021', borderRadius: '10px' , width : '200px' , height :this.state.windowWidth >= 700 ? '' : '50px'}} variant="outlined"  onClick={()=>{
                        this.props.props.history.push('/Tariff')
                    }} >
                        <span style={{ fontWeight: '500', fontSize: this.state.windowWidth >= 700 ? '30px' : '16px' , fontWeight : 'bold' ,  }}>Get Quote </span>
                                    </Button>
                    
                   
                   
                    <ReactWhatsapp number="9384841107" message="Chat with karuda cabs!!!" style={{ backgroundColor: '#cc0021', width: '330px', borderRadius: '10px', borderColor: '#cc0021', marginLeft: this.state.windowWidth >= 700 ?'5%' : '1%'}} >
                        <Button style={{ marginLeft: this.state.windowWidth >= 700 ? '3%' : '1%', color: 'white', backgroundColor: '#cc0021', borderColor:'#cc0021' }} variant="outlined"   >
                            <WhatsAppIcon style={{ color: '#FFFF00' , fontSize : '30px' }} />
                            <span style={{ fontWeight: '500', fontSize: this.state.windowWidth >= 700 ?'30px' : '16px', fontWeight: 'bold', marginLeft : '5px' }}>Chat With Us </span> 
                            </Button>
                    </ReactWhatsapp>
                
                        
                                  
                </div>
            </div>
          );
    }
}
 
export default TopBannerList;