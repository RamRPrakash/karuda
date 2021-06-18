import React , {Component} from 'react'
import NewAppBar from '../../../Component/NewAppBar';
import TopBanner from '../../../Component/TopBanner';
import Grid from '@material-ui/core/Grid';
import Api from 'axios'
import ImageAvatars from '../../../Component/ImageAvatars';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Trip from '../../Trip/view/Trip';
import KarudaCar from '../../../Pages/KarudaCar/view/KarudaCar'
import KarudaCarList from '../../KarudaCar/component/KarudaCarList'



var rate = {
    'Sedan (Dzire, Sunny, Xcent, Zest)' : [12 , 10] ,
    'Sedan (Only Etios)' : [13,11],
    'SUV (Xylo, Marazzo, Loggy, Tavera)' : [15,13],
    'SUV (Only Innova)' : [16,14]
}
class NewHome extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            checkRate : '' , 
            KiloMetre : 0 ,
            SUV_One :[15, 13] , 
            SUV_Two :[16, 14] ,
            Sedan_One :[12, 10],
            Sedan_Two :[13, 11] , 
            SelectedCar: 'Sedan (Dzire, Sunny, Xcent, Zest)'

         }
    }
    UNSAFE_componentWillMount() {
        Api.post('/getRate', {}).then(res => {
            console.log(res)
            var data = res['data'][0]['data']
            console.log(data)
            rate = {
                'Sedan (Dzire, Sunny, Xcent, Zest)': data['Sedan_One'],
                'Sedan (Only Etios)': data['Sedan_Two'],
                'SUV (Xylo, Marazzo, Loggy, Tavera)': data['SUV_One'],
                'SUV (Only Innova)': data['SUV_Two']
            }
            this.setState({
                SUV_One: data['SUV_One'],
                SUV_Two: data['SUV_Two'],
                Sedan_One: data['Sedan_One'],
                Sedan_Two: data['Sedan_Two']
            })
        })
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
    viewTariff=()=>{
        return(
            <React.Fragment>
                <div style={{ marginLeft: this.state.windowWidth >= 700 ? '1%' : '5%'}}>
                    <h3>OUTSTATION CAB SERVICE TARIFF CHART</h3>
                </div>
                <Grid container xs={12} sm={12} md={12} lg={12}>
                    <Grid style={{ backgroundColor: '#A5032E', borderStyle:'ridge' , textAlign : 'center' , color : 'white'}} item xs={4} sm={4} md={4} lg={4}>
                        <h4>VEHICLE TYPE</h4>
                    </Grid>
                    <Grid style={{ backgroundColor: '#A5032E', borderStyle: 'ridge', textAlign: 'center', color : 'white'}} item xs={4} sm={4} md={4} lg={4}>
                        <h4>ONE WAY DROP</h4>
                    </Grid>
                    <Grid style={{ backgroundColor: '#A5032E', borderStyle: 'ridge', textAlign: 'center', color : 'white'}} item xs={4} sm={4} md={4} lg={4}>
                        <h4>	ROUND TRIP</h4>
                    </Grid>
                </Grid>

                <Grid container xs={12} sm={12} md={12} lg={12}>
                    <Grid style={{  borderStyle:'ridge' , textAlign : 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <p>Sedan (Dzire, Sunny, Xcent, Zest)</p>
                    </Grid>
                    <Grid style={{ borderStyle: 'ridge', textAlign: 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <p>{`Rs.${this.state.Sedan_One[0]}/km`}</p>
                    </Grid>
                    <Grid style={{ borderStyle: 'ridge', textAlign: 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <p>{`Rs.${this.state.Sedan_One[1]}/km`}</p>
                    </Grid>
                </Grid>

                <Grid container xs={12} sm={12} md={12} lg={12}>
                    <Grid style={{  borderStyle:'ridge' , textAlign : 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <p>Sedan (Only Etios)</p>
                    </Grid>
                    <Grid style={{ borderStyle: 'ridge', textAlign: 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <p>{`Rs.${this.state.Sedan_Two[0]}/km`}</p>
                    </Grid>
                    <Grid style={{ borderStyle: 'ridge', textAlign: 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <p>{`Rs.${this.state.Sedan_Two[1]}/km`}</p>
                    </Grid>
                </Grid>

                <Grid container xs={12} sm={12} md={12} lg={12}>
                    <Grid style={{  borderStyle:'ridge' , textAlign : 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <p>SUV (Xylo, Marazzo, Loggy, Tavera)</p>
                    </Grid>
                    <Grid style={{ borderStyle: 'ridge', textAlign: 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <p>{`Rs.${this.state.SUV_One[0]}/km`}</p>
                    </Grid>
                    <Grid style={{ borderStyle: 'ridge', textAlign: 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <p>{`Rs.${this.state.SUV_One[1]}/km`}</p>
                    </Grid>
                </Grid>

                <Grid container xs={12} sm={12} md={12} lg={12}>
                    <Grid style={{  borderStyle:'ridge' , textAlign : 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <p>SUV (Only Innova)</p>
                    </Grid>
                    <Grid style={{ borderStyle: 'ridge', textAlign: 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <p>{`Rs.${this.state.SUV_Two[0]}/km`}</p>
                    </Grid>
                    <Grid style={{ borderStyle: 'ridge', textAlign: 'center'}} item xs={4} sm={4} md={4} lg={4}>
                        <p>{`Rs.${this.state.SUV_Two[1]}/km`}</p>
                    </Grid>
                </Grid>
                    
                <h1 style={{ paddingLeft : '2%' , color : '#A5032E'}}> Additional charges details</h1>
                <Grid container xs={12} sm={12} md={12} lg={12}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <ul style={{fontSize : '20px' , marginLeft : '2%'}}>
                            <li>Toll Fees, Inter-State Permit charges (if any) are extra.</li>
                            <li>One way - Driver Bata Rs. 400. (If more than 400 km driver bata Rs.600).</li>
                            <li>Round Trip - Driver Bata Rs. 400 Per Day.</li>
                            <li>Tempo Traveler - Driver Bata Rs. 600.</li>
                            <li>Hill Station Charges - Rs. 400.</li>
                            <li> One way - Minimum running must be 130 km per day.</li>
                            <li>Round Trips - Minimum running must be 250km per day.</li>
                            <li> 1 day means 1 Calender day (from midnight 12 to Next Midnight 12)</li>
                            <li>Max lagguage capacity by vehicle type - Sedan - 3 suitcases, Suv - 4 suitcases</li>
                        </ul>
                    </Grid>
                    
                </Grid>

            </React.Fragment>
        )
    }
    render() { 
        return (
            <div >
                <div>
                <NewAppBar/>
                </div>
                <div style={{marginTop : '15%'}}> 
                <TopBanner/>
                <Trip/>
                <KarudaCarList newhome={true} />
                {this.viewTariff()}
                <ImageAvatars/>
               
                </div>
                
            </div>
          );
    }
}
 
export default NewHome;