import React, {Component} from 'react';
import './HomeContact.scss';
import {isJSXNamespacedName} from "@babel/types";

class HomeContact extends Component{
    state={
        name:'',
        email:'',
        message:'',

        nameError:false,
        emailError:false,
        messageError:false,

        messageSend:false,
        fetchError:false

    };
    handleChange = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };
    sendForm=(name,email,message)=>{
        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, message
            })
        })
                .then((data)=> {
                    console.log(data);
                    this.setState({messageSend:true,fetchError:false})
                })
                .catch((error)=> {
                    console.log(error);
                    this.setState({messageSend:false,fetchError:true});
                })
    };

    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({messageSend:false});
        let name=this.state.name;
        let email=this.state.email;
        let message=this.state.message;
        let correctMessage=true;

        let nameRegex=/^[a-zA-Z]{1,200}/;

        let emailRegex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        let messageRegex=/^.{120,1000}/;

        console.log('Regex mail',emailRegex.test(email));
        console.log('Reg Name',nameRegex.test(name));
        console.log("reg mess", messageRegex.test(message));

        if (!nameRegex.test(name)){
            this.setState({nameError:true});
            correctMessage=false;
        }else{
            this.setState({nameError:false});
        }

        if (!emailRegex.test(email)){
            this.setState({emailError:true});
            correctMessage=false;
        }else{
            this.setState({emailError:false});
        }

        if (!messageRegex.test(message)){
            this.setState({messageError:true});
            correctMessage=false;
        }else{
            this.setState({messageError:false});
        }

        if (correctMessage){
            this.sendForm(name,email,message);
        }



    };
    render() {
        return(
            <div className='contact' name="homeContact">
                <form onSubmit={this.handleSubmit}>
                    <h2>Skontaktuj się z nami</h2>
                    <div className='decoration'/>
                    <div className='messageSend'>
                        {this.state.messageSend && <p className='send'>Wiadomość została wysłana!<br/>Wkrótce się skonatktujemy.</p>}
                        {this.state.fetchError && <p className='error'>Bład serwera!</p>}
                        {(!this.state.messageSend && !this.state.fetchError) && <p/>}


                        </div>
                    <div className='nameAndEmail'>
                        <div className='singleField'>
                            <label htmlFor='contactName'>Wpisz swoje imię</label>
                            <input type="text"  placeholder='Imię' value={this.state.name} name='name' onChange={this.handleChange}/>
                            {(this.state.nameError)?<span>Podane imię jest nieprawidłowe!</span>:<span className='correct'/>}
                        </div>
                        <div className='singleField'>
                            <label htmlFor='contactMail'>Wpisz swój email</label>
                            <input type="text" placeholder='e-mail@xyz.com' value={this.state.email} name='email' onChange={this.handleChange}/>
                            {(this.state.emailError)?<span>Podane email jest nieprawidłowy!</span>:<span className='correct'/>}
                        </div>
                    </div>
                    <label htmlFor='contactMessage'>Wpisz swoja wiadomość</label>
                    <textarea rows="4" placeholder='Lorem Ipsum Fixum Dyrdum' value={this.state.message} name='message' onChange={this.handleChange}/>
                    {(this.state.messageError)?<span>Widomość musi miec  conajmniej 120 znaków!</span>:<span className='correct'/>}
                    <div className='submit'>
                        <input type='submit' value="Wyślij"/>
                    </div>

                </form>
            </div>
        )
    }
}

export default HomeContact;