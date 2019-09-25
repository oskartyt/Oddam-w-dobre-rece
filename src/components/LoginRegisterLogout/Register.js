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
        emailAlreadyInUseError:false,
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
        let emailError=false;
        let passwordError=false;
        let password2Error=false;

        let emailRegex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!emailRegex.test(email)) {
            emailError = true;
        }

        if (password.length<6){
            passwordError=true;
        }

        if (password2!==password){
            password2Error=true;
        }
        this.setState({emailError, passwordError, password2Error});

        if (!emailError && !passwordError && !password2Error){
            this.props.firebase
                .doCreateUserWithEmailAndPassword(email, password)
                .then(authUser => {
                    this.setState({ email:'', password:'', password2:''});
                    this.props.history.push("/");
                    this.setState({emailAlreadyInUseError:false});
                    console.log("Działą wysyłka do firebase'a")
                })
                .catch(error => {
                    console.log(error.code);
                    if (error.code=="auth/email-already-in-use"){
                        this.setState({emailAlreadyInUseError:true})
                    }else{
                        this.setState({emailAlreadyInUseError:false})
                    }
                    this.setState({ error });
                });
        }else{
            this.setState({emailAlreadyInUseError:false});
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
                                {(this.state.emailError || this.state.emailAlreadyInUseError)
                                    ? <span>{(this.state.emailAlreadyInUseError)?'Podany email jest już zajęty':'Podany email jest nieprawidłowy!'}</span>
                                    :<span className='correct'/>}
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