import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import CabsText from '../../Component/CabsText'
import Button from '@material-ui/core/Button'
import Api from 'axios'

class EntryChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total : [
                {
                    'Sedan_One' : [10 , 20],
                    'Sedan_Two' : [10 , 20],
                    'SUV_One' : [10 , 20],
                    'SUV_Two' : [10 , 20],
                }
            ]
          }
    }
    UNSAFE_componentWillMount(){
        Api.post('/getRate',{}).then(res=>{
            console.log(res)
            var data = res['data'][0]['data']
            console.log(data)
            this.setState({
                FirstSedanOneway: data['Sedan_One'][0],
                FirstSedanRoundway: data['Sedan_One'][1],
                SecondSedanOneway: data['Sedan_Two'][0],
                SecondSedanRoundway: data['Sedan_Two'][1],
                FirstSUVOneway: data['SUV_One'][0],
                FirstSUVRoundway: data['SUV_One'][1],
                SecondSUVOneway: data['SUV_Two'][0],
                SecondSUVRoundway: data['SUV_Two'][1]
            })
        })
    }
    sendData=()=>{
        var data = {
            'id':1,
            'Sedan_One': [this.state.FirstSedanOneway, this.state.FirstSedanRoundway],
            'Sedan_Two': [this.state.SecondSedanOneway, this.state.SecondSedanRoundway],
            'SUV_One': [this.state.FirstSUVOneway, this.state.FirstSUVRoundway],
            'SUV_Two': [this.state.SecondSUVOneway , this.state.SecondSUVRoundway],
        }

        Api.post('/updateData',data).then(res=>{
            console.log(res)
            alert('Rate updated in Chart !!')
            this.setState({
                FirstSedanOneway : '',
                FirstSedanRoundway : '',
                SecondSedanOneway : '',
                SecondSedanRoundway : '',
                FirstSUVOneway : '',
                FirstSUVRoundway : '',
                SecondSUVOneway : '',
                SecondSUVRoundway : ''
            })
        })

    }
    render() { 
        return ( 
            <div>
            <Grid container xs={12} sm={12} md={12} lg={12}>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                        <h1>VEHICLE TYPE</h1>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                        <h1>ONE WAY DROP </h1>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                        <h1>ROUND TRIP</h1>
                </Grid>
            </Grid>
            <Grid container xs={12} sm={12} md={12} lg={12}>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                   <h3> Sedan (Dzire, Sunny, Xcent, Zest) </h3>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                        <CabsText label='One Way (Rupees per  km)' value={this.state.FirstSedanOneway} onChange={(e)=>{
                            this.setState({
                                FirstSedanOneway : e.target.value
                            })
                        }}/>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                        <CabsText label='RoundWay(Rupees per km)' value={this.state.FirstSedanRoundway} onChange={(e) => {
                            this.setState({
                                FirstSedanRoundway: e.target.value
                            })
                        }} />
                </Grid>
            </Grid>
            <Grid container xs={12} sm={12} md={12} lg={12}>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                        <h3> Sedan (Only Etios) </h3>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                        <CabsText label='One Way(Rupees per  km)' value={this.state.SecondSedanOneway} onChange={(e)=>{
                            this.setState({
                                SecondSedanOneway : e.target.value
                            })
                        }}/>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                        <CabsText label='RoundWay(Rupees per km)' value={this.state.SecondSedanRoundway} onChange={(e) => {
                            this.setState({
                                SecondSedanRoundway: e.target.value
                            })
                        }} />
                </Grid>
            </Grid>
            <Grid container xs={12} sm={12} md={12} lg={12}>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                        <h3> SUV (Xylo, Marazzo, Loggy, Tavera) </h3>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                        <CabsText label='One Way(Rupees per  km)' value={this.state.FirstSUVOneway} onChange={(e)=>{
                            this.setState({
                                FirstSUVOneway : e.target.value
                            })
                        }}/>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                        <CabsText label='RoundWay(Rupees per  km)' value={this.state.FirstSUVRoundway} onChange={(e) => {
                            this.setState({
                                FirstSUVRoundway: e.target.value
                            })
                        }} />
                </Grid>
            </Grid>
            <Grid container xs={12} sm={12} md={12} lg={12}>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                        <h3> SUV (Only Innova) </h3>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                        <CabsText label='One Way(Rupees per  km)' value={this.state.SecondSUVOneway} onChange={(e)=>{
                            this.setState({
                                SecondSUVOneway : e.target.value
                            })
                        }}/>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                        <CabsText label='RoundWay(Rupees per  km)' value={this.state.SecondSUVRoundway} onChange={(e) => {
                            this.setState({
                                SecondSUVRoundway: e.target.value
                            })
                        }} />
                </Grid>
            </Grid>

                <Button variant="contained" color="primary" onClick={this.sendData} >
                    Set Values
                </Button>
            </div>
         );
    }
}
 
export default EntryChart;