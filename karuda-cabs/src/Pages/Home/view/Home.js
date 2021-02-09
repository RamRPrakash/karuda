import React , {Component} from 'react'
import GetTexi from '../component/GetTexi'
import GetServices from '../component/GetServices'
import GetBookTaxi from '../component/GetBookTaxi'
import GetDrivers from '../component/GetDrivers'
import GetTestimonials from '../component/GetTestimonials'
import GetContact from '../component/GetContact'
import GetCopyRight from '../component/GetCopyRight'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    check=()=>{
        alert('Hii')
    }
    render() { 
        return (
           <div>
                <GetTexi/>
                <GetServices/>
                <GetBookTaxi/>
                <GetDrivers/>
                <GetTestimonials/>
                <GetContact/>
                <GetCopyRight/>
          </div>
          );
    }
}
 
export default Home;