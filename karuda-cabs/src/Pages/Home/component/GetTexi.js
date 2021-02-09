import React , {Component} from 'react'
import './../css/Home.css'
class GetTexi extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
           <React.Fragment>
                <div className='setBackground' style={{
                height: '1600px',
               
                backgroundImage: `url(HomegetTexi.jpg)`,
                }}>
                </div>

            </React.Fragment>
        );
    }
}
export default GetTexi