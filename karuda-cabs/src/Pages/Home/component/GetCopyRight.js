import React, { Component } from 'react'
import './../css/Home.css'
class GetCopyRight extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <React.Fragment>
                <div className='setBackground' style={{
                    height: '70px',
                    backgroundImage: `url(copyright.jpg)`,
                }}>
                    <div style={{display :'flex' , fontSize : '22px' , color : 'gray'}}>
                        <div style={{width : '50%' , marginLeft : '10%'}}>
                            <p>karunyacabs.com Copyright @ All rights reserved 2021</p>
                        </div>
                        <div style={{width : '50%'}}>
                            <p>Designed and Developed by Skiftre Technologies</p>
                        </div>
                    </div>
                    
                </div>

            </React.Fragment>
        );
    }
}
 
export default GetCopyRight;