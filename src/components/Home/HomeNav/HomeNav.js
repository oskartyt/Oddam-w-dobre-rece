import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

import './HomeNav.scss';

class HomeNav extends Component{
    render() {
        return (
            <nav>
                <Link className='start' to="/">Start</Link>
                <Link className='' to="/logowanie">O co chodzi?</Link>
                <Link className='' to="/logowanie">O nas</Link>
                <Link className='' to="/logowanie">Fundacja i organizacje</Link>
                <Link className='' to="/logowanie">Kontakt</Link>
            </nav>
        )
    }
}

export default HomeNav;