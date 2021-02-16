import React, { Component } from 'react'
import Carousel from 'react-elastic-carousel';
import carList from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/car.png'

class TopBannerList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: [
                { id: 1, title: 'item #1' },
                { id: 2, title: 'item #2' },
                { id: 3, title: 'item #3' },
                { id: 4, title: 'item #4' },
                { id: 5, title: 'item #5' }
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

                            }} key={item.id}>{item.title}
                            <div>
                                <img alt='img' style={{ width: '60%', height: this.state.windowWidth >= 700 ? '400px' : '200px' , marginLeft : '20%'}} src={carList}></img>
                            </div>
                            </div>
                      
                        )}
                </Carousel>

            </div>
          );
    }
}
 
export default TopBannerList;