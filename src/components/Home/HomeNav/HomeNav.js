import React, {Component} from 'react';

import { Link, animateScroll as scroll} from 'react-scroll'

import './HomeNav.scss';

class HomeNav extends Component{

    render() {
        return (
            <nav>
                <Link activeClass='active' to="homeStart" spy={true} smooth={true} offset={0} duration={500}>Start</Link>
                <Link activeClass='active' to="homeFourSteps" spy={true} smooth={true} offset={0} duration={500}>O co chodzi?</Link>
                <Link activeClass='active' to="homeAbout" spy={true} smooth={true} offset={0} duration={500}>O nas</Link>
                <Link activeClass='active' to="homeOrganizations" spy={true} smooth={true} offset={0} duration={500}>Fundacje i organizacje</Link>
                <Link activeClass='active' to="homeContact" spy={true} smooth={true} offset={0} duration={500}>Kontakt</Link>

                {/*<Link className='' to="/logowanie">Kontakt</Link>*/}
            </nav>
        )
    }
}

export default HomeNav;