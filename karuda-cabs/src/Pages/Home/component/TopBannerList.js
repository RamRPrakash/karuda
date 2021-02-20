import React, { Component } from 'react'
import Carousel from 'react-elastic-carousel';
import carList from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/car.png'
import ReactWhatsapp from 'react-whatsapp';
import Button from '@material-ui/core/Button';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
class TopBannerList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: [
                { id: 1, title: 'Car 1' },
                { id: 2, title: 'Car 2' },
                { id: 3, title: 'Car 3' },
                { id: 4, title: 'Car 4' },
                { id: 5, title: 'Car 5' }
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
                                height : '400px' , 
                                width : '100%',

                            }} key={item.id}>
                                {/* {item.title} */}
                            <div>
                                <img alt='img' style={{ width: '60%', height: this.state.windowWidth >= 700 ? '400px' : '200px' , marginLeft : '20%'}} src={carList}></img>
                            </div>
                            </div>
                      
                        )}
                </Carousel>
                <div style={{display : 'flex' , marginTop : '3%'}}>
                    <Button style={{ marginLeft: this.state.windowWidth >= 700 ? '35%' : '5%', color: 'white', backgroundColor: 'red', borderColor: 'red' , width : '200px' }} variant="outlined" size="medium"  onClick={()=>{
                        this.props.props.history.push('/KarudaOnlineBooking')
                    }} >
                        Get Texi Now !!!
                                    </Button>
                    
                   
                        
                         <ReactWhatsapp number="9787436363" message="Chat with karuda cabs!!!" style={{ backgroundColor: 'red',marginLeft : '5%' , width : '200px' }} >
                            <Button style={{ marginLeft: this.state.windowWidth >= 700 ? '3%' : '15%', color: 'white', backgroundColor: 'red', borderColor: 'red' }} variant="outlined" size="medium"  >
                            <WhatsAppIcon style={{ color: '#e8ff00' }} />Chat With Us 
                            </Button>
                        </ReactWhatsapp>
                       
                        
                                  
                </div>
            </div>
          );
    }
}
 
export default TopBannerList;