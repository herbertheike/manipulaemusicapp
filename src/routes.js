import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import main from './views/main';
import favorites from './views/favorites'

const Routes=()=>{
        return (
            <div>
            <Router>
              <Switch>
                <Route exact path="/" component={main} />
                <Route exact  path="/main" component={main}/>
                <Route exact path="/favorites" component={favorites} />
              </Switch>
            </Router>
          </div>
        )
}
export default Routes;

