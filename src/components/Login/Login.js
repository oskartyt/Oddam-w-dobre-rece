import React, {Component} from 'react';
import './Login.scss';

import HomeHeader from "../Home/HomeHeader/HomeHeader";
import HomeNav from "../Home/HomeNav/HomeNav";

import {Link} from 'react-router-dom';


class Login extends Component{
    render() {
        return(
            <>
                <div className='flex-col-right-top__header'>
                    <HomeHeader/>
                    <HomeNav/>
                </div>
                <div className='login'>
                    <h2>Zaloguj się</h2>
                    <div className='decoration'/>
                    <form>
                        <div className='login-form-fields'>
                            <div className='single-field'>
                                <label htmlFor="">Email</label>
                                <input type="text"/>
                                <span className='correct'/>
                            </div>
                            <div className='single-field'>
                                <label htmlFor="">Hasło</label>
                                <input type="text"/>
                                <span className='correct'/>
                            </div>
                        </div>
                        <div className='login-form-buttons'>
                            <Link className='create-account' to="/rejestracja">Załóż konto</Link>
                            <input type="submit" className='sign-in' value='Zaloguj się'/>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default Login;