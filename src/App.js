import React from 'react';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

import Home from './components/Home/Home'

function App() {
  return (
      <HashRouter>
        <Switch>
          <Route exact path='/' render={()=><Home/>}/>
        </Switch>
      </HashRouter>
  );
}

export default App;
