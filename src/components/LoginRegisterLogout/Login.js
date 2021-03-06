import React, {Component} from 'react';
import './LoginRegisterLogout.scss';

import HomeHeader from "../Home/HomeHeader/HomeHeader";
import HomeNav from "../Home/HomeNav/HomeNav";

import {Link} from 'react-router-dom';


class Login extends Component{
    state={
        email:'',
        password:'',
        emailError:false,
        passwordError:false,
        passwordAuthError:false,
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
        let emailError=false;
        let emailAuthError=false;
        let passwordError=false;
        let passwordAuthError=false;

        let emailRegex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!emailRegex.test(email)){
            emailError=true;
        }else{
            this.setState({emailError:false});
        }

        if (password.length<6) {
            passwordError=true;
        }

        this.setState({emailError,passwordError});

        if (!emailError && !passwordError){
            this.props.firebase
                .doSignInWithEmailAndPassword(email, password)
                .then(authUser => {
                    this.setState({ email:'', password:''});
                    this.props.history.push("/");
                    console.log("Działą logowanie do firebase'a")
                })
                .catch(error => {
                    console.log(error);
                    this.setState({ error });
                });
        }
    };
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
                        </div>
                        <div className='form-buttons'>
                            <Link to="/rejestracja">Załóż konto</Link>
                            <input type="submit" value='Zaloguj się'/>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default Login;