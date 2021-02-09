import React from 'react';

import Routes from './router'
import { HashRouter, Switch, Route } from 'react-router-dom'
import './index.css'
//import Static from 'react-static-router';

function App() {
  return (
    <HashRouter>
      <div className="App">

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
      </div>
    </HashRouter>
  );
}

export default App;
