import React, {Component} from 'react';
import './HomeAbout.scss';

class HomeAbout extends Component{
    render() {
        return (
            <div className='about' name="homeAbout">
                <div className='left-side-container'>
                    <h2>O nas</h2>
                    <div className='decoration'/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className='signature'/>
                </div>
                <div className='right-side-container'/>
            </div>
        )
    }
}

export default HomeAbout;