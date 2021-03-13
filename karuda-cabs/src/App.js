import React from 'react';

import Routes from './router'
import { HashRouter, Switch, Route } from 'react-router-dom'
import './index.css'
//import Static from 'react-static-router';
import facebook1 from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/facebook1.svg'
import googleplus1 from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/googleplus1.svg'
import instagram1 from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/instagram1.svg'
import twitter1 from 'F:/REACT_PROJECT/KarudaCabs/karuda-cabs/src/images/twitter1.svg'


function App() {
  return (
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
  );
}

export default App;
