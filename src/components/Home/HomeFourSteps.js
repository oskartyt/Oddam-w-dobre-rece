import React, {Component} from 'react';
import './HomeFourSteps.scss';
import {Link} from "react-router-dom";

class HomeFourSteps extends Component{
    render() {
        return (
            <>
                <div className='white-part'>
                    <h2>Wystarczą 4 proste kroki</h2>
                    <div className="decoration"/>
                </div>

                <div className='grey-part'>
                    <div className='step'>
                        <div className='icon1'/>
                        <span>Wybierz rzeczy</span>
                        <hr/>
                        <span>ubrania, zabawki,<br/>sprzęt i inne</span>
                    </div>
                    <div className='step'>
                        <div className='icon2'/>
                        <span>Spakuj je</span>
                        <hr/>
                        <span>skorzystaj z<br/>worków na śmieci</span>
                    </div>
                    <div className='step'>
                        <div className='icon3'/>
                        <span>Zdecyduj komu<br/>chcesz pomóc</span>
                        <hr/>
                        <span>wybierz zaufane<br/>miejsce</span>
                    </div>
                    <div className='step'>
                        <div className='icon4'/>
                        <span>Zamów kuriera</span>
                        <hr/>
                        <span>kurier przyjedzie<br/>w dogodnym terminie</span>
                    </div>
                </div>

                <div className='white-part'>
                    <Link className='white-bttn' to='/logowanie'>ODDAJ<br/>RZECZY</Link>
                </div>
            </>
        );
    }
};

export default HomeFourSteps;
