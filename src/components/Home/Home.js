import React, {Component} from 'react';
import './Home.scss';

import HomeHeader from './HomeHeader';
import HomeNav from './HomeNav';
import HomeTopBlockButtons from './HomeTopBlockButtons';
import HomeThreeColumns from './HomeThreeColumns';
import HomeFourSteps from './HomeFourSteps';
import HomeAbout from './HomeAbout'

class Home extends Component{
    render() {
        return <>
            <div className='container top-block flex'>
                <div className='left-side-container'/>
                <div className='right-side-container'>
                    <div className='flex-col-right-top nav-head'>
                        <HomeHeader/>
                        <HomeNav/>
                    </div>
                    <HomeTopBlockButtons/>
                </div>
            </div>
            <HomeThreeColumns/>
            <HomeFourSteps/>
            <HomeAbout/>
        </>
    }
}

export default Home;