import React , {Component} from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
class KarudaSelectField extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let { value = '', onChange = () => { }, menuData = [], lebel = '', width = 300, backgroundColor = '', borderRadius = '', height = ''} = this.props
        return (
            <div>
                <InputLabel style={{marginBottom : '2%'}} id="demo-simple-select-label">{lebel}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    onChange={onChange}
                    style={{ width: width, backgroundColor: backgroundColor, borderRadius: borderRadius, height: height}}
                >
                    {
                        menuData.map((item)=>{
                            return (
                                <MenuItem value={item}>{item}</MenuItem>
                            )
                        })
                    }
                </Select>
            </div>
          );
    }
}
 
export default KarudaSelectField;