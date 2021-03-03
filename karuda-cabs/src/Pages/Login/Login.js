import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userName : '' ,
            password : ''
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
        return ( 
            <Card style={{ width: '30%', paddingBottom: '20%', marginLeft: this.state.windowWidth >= 700 ? '30%' : '3%' , marginTop : '3%' }}>
                <h2>Login</h2>
                <div><TextField style={{ width: '300px' }} id="outlined-basic" label="User Name" variant="outlined" onChange={(e)=>{
                    this.setState({
                        userName : e.target.value
                    })
                }} /></div> <br></br>
                <div><TextField style={{ width: '300px' }} id="outlined-basic" type="password" label="Password" variant="outlined" onChange={(e) => {
                    this.setState({
                        password: e.target.value
                    })
                }} /></div><br></br>
                <Button variant="contained" color="primary" onClick={()=>{
                    if(this.state.userName == 'Admin' && this.state.password == 'Root'){
                        alert('Login Successfully')
                        console.log(this.props)
                        this.props.history.push('/EntryChart')
                    }
                    else{
                        alert('User name or password mismatch')
                    }
                }} >
                    Login
                </Button>
            </Card>
         );
    }
}
 
export default Login;