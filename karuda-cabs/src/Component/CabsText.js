import React , {Component} from 'react'
import TextField from '@material-ui/core/TextField';

class CabsText extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let { label = '', onChange = () => { }, value = ''} = this.props
        return ( 
            <div>
                <TextField id="outlined-basic" label={label} onChange={onChange} value={value} variant="outlined" />
            </div>
         );
    }
}
 
export default CabsText;