import React , {Component} from 'react'
import Button from '@material-ui/core/Button';

class CabsButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        let { label = '', onClick=()=>{}   } = this.props
        return ( 
            <div>
                <Button variant="contained" color="primary" onClick={onClick} style={{ backgroundColor : 'yellow'}} >
                    {label}
                </Button>
            </div>
         );
    }
}
 
export default CabsButton;