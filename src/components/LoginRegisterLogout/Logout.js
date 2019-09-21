import React, {Component} from 'react';
import './LoginRegisterLogout.scss';

import HomeHeader from "../Home/HomeHeader/HomeHeader";
import HomeNav from "../Home/HomeNav/HomeNav";

import {Link} from 'react-router-dom';


class Logout extends Component{
    render() {
        return(
            <>
                <div className='flex-col-right-top__header'>
                    <HomeHeader/>
                    <HomeNav/>
                </div>
                <div className='logout'>
                    <h2>Wylogowanie nastąpiło<br/>pomyślnie!</h2>
                    <div className='decoration'/>
                    <Link to="/" className='to-main-page'>Strona główna</Link>
                </div>
            </>
        )
    }
}

export default Logout;