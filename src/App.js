import React from 'react';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

import Home from './components/Home/Home'
import Login from './components/LoginAndRegister/Login'
import Register from './components/LoginAndRegister/Register'

function App() {
  return (
      <HashRouter>
        <Switch>
          <Route exact path='/' render={()=><Home/>}/>
          <Route path='/logowanie' render={()=><Login/>}/>
          <Route path='/rejestracja' render={()=><Register/>}/>
        </Switch>
      </HashRouter>
  );
}

export default App;
