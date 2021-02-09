import React, { Component } from 'react'
import './../css/Home.css'
class GetBookTaxi extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <React.Fragment>
                <div className='setBackground' style={{
                    height: '1000px',
                    backgroundImage: `url(bookTaxi.jpg)`,
                }}>
                </div>

            </React.Fragment>
        );
    }
}
 
export default GetBookTaxi;