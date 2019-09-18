import React, {Component} from 'react';
import './HomeContact.scss';

class HomeContact extends Component{
    render() {
        return(
            <div className='contact' name="homeContact">
                <form>
                    <h2>Skontaktuj się z nami</h2>
                    <div className='decoration'></div>
                    <div className='nameAndEmail'>
                        <div className='singleField'>
                            <label htmlFor='contactName'>Wpisz swoje imię</label>
                            <input type="text" id='contactName' placeholder='Imię'/>
                        </div>
                        <div className='singleField'>
                            <label htmlFor='contactMail'>Wpisz swój email</label>
                            <input type="text" id='contactMail' placeholder='e-mail@xyz.com'/>
                        </div>
                    </div>
                    <label htmlFor='contactMessage'>Wpisz swoja wiadomość</label>
                    <textarea rows="4" id='contactMessage' placeholder='Lorem Ipsum Fixum Dyrdum'/>
                    <div className='submit'>
                        <input type='submit' value="Wyślij"/>
                    </div>

                </form>
            </div>
        )
    }
}

export default HomeContact;