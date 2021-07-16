import React , {Component} from 'react'
import Carousel from 'react-elastic-carousel';
import NewCarBg1 from '../images/NewCarBg1.jpg'
import NewCarBg2 from '../images/NewCarBg2.jpg'
import NewCarBg3 from '../images/NewCarBg3.jpg'
import SimpleSlider from '../Pages/Home/component/SimpleSlider';

class TopBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
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
            <div style={{marginBottom : '2%' , marginRight : '0px' , marginTop : this.state.windowWidth > 700 ?'11%' : '40%' }}>
                <SimpleSlider/>
            </div>
          );
    }
}
 
export default TopBanner;