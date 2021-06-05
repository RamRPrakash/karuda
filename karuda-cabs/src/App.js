import React , {useState , useMemo} from 'react';

import Routes from './router'
import { HashRouter, Switch, Route } from 'react-router-dom'
import './index.css'
//import Static from 'react-static-router';
import facebook1 from './images/facebook1.svg'
import googleplus1 from './images/googleplus1.svg'
import instagram1 from './images/instagram1.svg'
import twitter1 from './images/twitter1.svg'


function App() {
  // const [counterOne, setCounterOne] = useState(0)
  // const [counterTwo, setCounterTwo] = useState(0)

  // const incrementOne = () => {
  //   setCounterOne(counterOne + 1)
  // }

  // const incrementTwo = () => {
  //   setCounterTwo(counterTwo + 1)
  // }
  

  // const isEven = useMemo(() => {
  //   var i = 0
  //   while (i < 200000000) i++;
  //   return counterOne % 2 === 0 ? 'Even' : 'Odd'
  // }, [counterOne])
  return (
    <div>
    {/* <div>Performance Check
  <div>
      <button onClick={incrementOne}>counter one : {counterOne}</button>

      {isEven}
      </div>
      <button onClick={incrementTwo}>counter Two : {counterTwo}</button>

      </div> */}
    <HashRouter>
      <div className="App">
        <div className='web-ui' style={{marginTop : '20%' , position : 'fixed' , marginLeft : '2%'}}>
          <div> <img style={{marginTop : '2%'}}src={facebook1} width="40px" height="50px" alt="Sample" /></div>
          <div> <img style={{marginTop : '2%'}}src={googleplus1} width="40px" height="50px" alt="Sample" /></div>
          <div> <img style={{marginTop : '2%'}}src={instagram1} width="40px" height="50px" alt="Sample" /></div>
          <div> <img style={{marginTop : '2%'}}src={twitter1} width="40px" height="50px" alt="Sample" /></div>
        </div>
        <div className='mobile-ui' style={{marginTop : '70%' , position : 'fixed'}}>
          <div> <img style={{marginTop : '2%'}}src={facebook1} width="20px" height="30px" alt="Sample" /></div>
          <div> <img style={{marginTop : '2%'}}src={googleplus1} width="20px" height="30px" alt="Sample" /></div>
          <div> <img style={{marginTop : '2%'}}src={instagram1} width="20px" height="30px" alt="Sample" /></div>
          <div> <img style={{marginTop : '2%'}}src={twitter1} width="20px" height="30px" alt="Sample" /></div>
        </div>
        </div>
        <div>
          <Switch>
            {
              Routes.map((item, index) => {
                return <Route key={'route_' + index}
                  path={item.path}
                  component={item.component}
                  exact={item.exact || false}
                />
              })
            }
          </Switch>
        </div>
    </HashRouter>
    </div>
  );
}

export default App;
