import React, { Component } from 'react'
import './../css/Home.css'
class GetCopyRight extends Component {
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
            <React.Fragment>
                <div style={{
                    backgroundColor: '#2C2C2C'
                }}>
                    <div style={{display :'flex' , fontSize : '22px' , color : 'gray'}}>
                        <div style={{ width: this.state.windowWidth >= 700 ? '50%' : '100%', marginLeft: this.state.windowWidth >= 700 ? '10%' : '2%'}}>
                            <p>karudacabs.com Copyright @ All rights reserved 2021</p>
                        </div>
                        <div style={{width : '50%'}}>
                            <p>Designed and Developed by Skifter Technologies</p>
                        </div>
                    </div>
                    
                </div>

            </React.Fragment>
        );
    }
}
 
export default GetCopyRight;