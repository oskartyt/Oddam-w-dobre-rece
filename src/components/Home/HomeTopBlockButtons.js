import React, {Component} from 'react';
import './HomeTopBlockButtons.scss';
import {Link} from 'react-router-dom';

class HomeTopBlockButtons extends Component{
    render() {
        return(
            <section className='top-block-bttns'>
                <h2>Zacznij pomagać!</h2>
                <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                <div className='decoration'/>
                <div className='bttns'>
                    <Link to='/logowanie'>ODDAJ<br/>RZECZY</Link>
                    <Link to='/logowanie'>ZORGANIZUJ<br/>ZBIÓRKĘ</Link>
                </div>
            </section>
        )
    }
}

export default HomeTopBlockButtons;