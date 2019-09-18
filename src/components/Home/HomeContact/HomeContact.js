import React, {Component} from 'react';
import './HomeContact.scss';

class HomeContact extends Component{
    state={
        name:'',
        email:'',
        message:'',

        nameError:false,
        emailError:false,
        messageError:false,

        messageSend:false

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
                .then(function (data) {
                    console.log(data);
                })
                .catch(function (error) {
                    console.log(error);
                })
    };

    handleSubmit=(e)=>{
        e.preventDefault();
        let name=this.state.name;
        let email=this.state.email;
        let message=this.state.message;

        this.sendForm(name,email,message);


    }
    render() {
        return(
            <div className='contact' name="homeContact">
                <form onSubmit={this.handleSubmit}>
                    <h2>Skontaktuj się z nami</h2>
                    <div className='decoration'/>
                    <div className='nameAndEmail'>
                        <div className='singleField'>
                            <label htmlFor='contactName'>Wpisz swoje imię</label>
                            <input type="text"  placeholder='Imię' value={this.state.name} name='name' onChange={this.handleChange}/>
                        </div>
                        <div className='singleField'>
                            <label htmlFor='contactMail'>Wpisz swój email</label>
                            <input type="text" placeholder='e-mail@xyz.com' value={this.state.email} name='email' onChange={this.handleChange}/>
                        </div>
                    </div>
                    <label htmlFor='contactMessage'>Wpisz swoja wiadomość</label>
                    <textarea rows="4" placeholder='Lorem Ipsum Fixum Dyrdum' value={this.state.message} name='message' onChange={this.handleChange}/>
                    <div className='submit'>
                        <input type='submit' value="Wyślij"/>
                    </div>

                </form>
            </div>
        )
    }
}

export default HomeContact;