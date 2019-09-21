import React, {Component} from 'react';
import './LoginRegisterLogout.scss';

import HomeHeader from "../Home/HomeHeader/HomeHeader";
import HomeNav from "../Home/HomeNav/HomeNav";

import {Link} from 'react-router-dom';


class Register extends Component{
    state={
        email:'',
        password:'',
        password2:'',
        emailError:false,
        passwordError:false,
        password2Error:false,
    };
    handleChange = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };
    handleSubmit=e=>{
        e.preventDefault();
        let email=this.state.email;
        let password=this.state.password;
        let password2=this.state.password2;

        let emailRegex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!emailRegex.test(email)){
            this.setState({emailError:true});
        }else{
            this.setState({emailError:false});
        }

        if (password.length<6){
            this.setState({passwordError:true});
        }else{
            this.setState({passwordError:false});
        }
        if (password2!==password){
            this.setState({password2Error:true});
        }else{
            this.setState({password2Error:false});
        }
    };
    render() {
        return(
            <>
                <div className='flex-col-right-top__header'>
                    <HomeHeader/>
                    <HomeNav/>
                </div>
                <div className='register'>
                    <h2>Załóż konto</h2>
                    <div className='decoration'/>
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-fields'>
                            <div className='single-field'>
                                <label htmlFor="">Email</label>
                                <input type="text" value={this.state.email} name='email' onChange={this.handleChange}/>
                                {(this.state.emailError)?<span>Podany email jest nieprawidłowy!</span>:<span className='correct'/>}
                            </div>
                            <div className='single-field'>
                                <label htmlFor="">Hasło</label>
                                <input type="password" value={this.state.password} name='password' onChange={this.handleChange}/>
                                {(this.state.passwordError)?<span>Podane hasło jest za krótkie!</span>:<span className='correct'/>}
                            </div>
                            <div className='single-field'>
                                <label htmlFor="">Powtórz hasło</label>
                                <input type="password" value={this.state.password2} name='password2' onChange={this.handleChange}/>
                                {(this.state.password2Error)?<span>Powtórzone hasło jest inne!</span>:<span className='correct'/>}
                            </div>
                        </div>
                        <div className='form-buttons'>
                            <Link to="/logowanie">Zaloguj się</Link>
                            <input type="submit" value='Załóż konto'/>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default Register;