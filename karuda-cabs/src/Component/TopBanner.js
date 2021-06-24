import React , {Component} from 'react'
import Carousel from 'react-elastic-carousel';
import NewCarBg1 from '../images/NewCarBg1.jpg'
import NewCarBg2 from '../images/NewCarBg2.jpg'
import NewCarBg3 from '../images/NewCarBg3.jpg'

class TopBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
<Carousel>
            <img alt="NewCarBg1" src={NewCarBg1} style={{width : '100%' , height : '70%'}}></img>
            <img alt="NewCarBg2" src={NewCarBg2} style={{width : '100%' , height : '70%'}}></img>
            <img alt="NewCarBg3" src={NewCarBg3} style={{width : '100%' , height : '70%'}}></img>
</Carousel>
            </div>
          );
    }
}
 
export default TopBanner;