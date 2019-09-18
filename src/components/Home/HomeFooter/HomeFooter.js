import React, {Component} from 'react';
import './HomeFooter.scss';

class HomeFooter extends Component{
    render() {
        return(
            <footer>
                <div/>
                <span>
                    Copyright by
                </span>
                <div className='icons'>
                    <button className='icon facebookIcon'/>
                    <button className='icon instagramIcon'/>
                </div>
            </footer>
        )
    }
}

export default HomeFooter;