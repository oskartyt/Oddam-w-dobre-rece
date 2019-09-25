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

const RegisterBase=withRouter(Register);
const LoginBase=withRouter(Login);

function App() {
  return (
      <FirebaseContext.Consumer>
        {firebase=>
            <HashRouter>
              <Switch>
                <Route exact path='/' render={()=><Home/>}/>
                {/*<Route path='/logowanie' render={()=><Login/>}/>*/}
                <Route path='/logowanie' render={()=><LoginBase firebase={firebase}/>}/>

                <Route path='/rejestracja' render={()=><RegisterBase firebase={firebase}/>}/>


                {/*<Route path='/rejestracja' render={()=><Register/>}/>*/}
                <Route path='/wylogowano' render={()=><Logout/>}/>
                {/*  Not found*/}
              </Switch>
            </HashRouter>
        }

      </FirebaseContext.Consumer>
  );
}

export default App;
