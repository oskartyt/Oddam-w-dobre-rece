import React from 'react';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

import Home from './components/Home/Home'
import Login from './components/Login/Login'

function App() {
  return (
      <HashRouter>
        <Switch>
          <Route exact path='/' render={()=><Home/>}/>
          <Route path='/logowanie' render={()=><Login/>}/>
        </Switch>
      </HashRouter>
  );
}

export default App;
