import React from 'react';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
    withRouter,
} from 'react-router-dom';
import { FirebaseContext } from './components/Firebase';


import Home from './components/Home/Home'
import Login from './components/LoginRegisterLogout/Login'
import Register from './components/LoginRegisterLogout/Register'
import Logout from './components/LoginRegisterLogout/Logout'

const RegisterBase=withRouter(Register)

function App() {
  return (
      <HashRouter>
        <Switch>
          <Route exact path='/' render={()=><Home/>}/>
          <Route path='/logowanie' render={()=><Login/>}/>
          <FirebaseContext.Consumer>
                {firebase => <Route path='/rejestracja' render={()=><RegisterBase firebase={firebase}/>}/>}
          </FirebaseContext.Consumer>
          {/*<Route path='/rejestracja' render={()=><Register/>}/>*/}
          <Route path='/wylogowano' render={()=><Logout/>}/>
        </Switch>
      </HashRouter>
  );
}

export default App;
