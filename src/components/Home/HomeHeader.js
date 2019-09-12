import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

import './HomeHeader.scss'

class HomeHeader extends Component{
    render() {
        return (
            <header>
                <Link className='login account-link' to="/logowanie">Zaloguj</Link>
                <Link className='register account-link' to="/rejestracja">Załóż konto</Link>
            </header>
        )
    }
}

export default HomeHeader;