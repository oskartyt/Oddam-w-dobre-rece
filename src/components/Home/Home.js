import React, {Component} from 'react';
import './Home.scss';



import HomeHeader from './HomeHeader/HomeHeader';
import HomeNav from './HomeNav/HomeNav';
import HomeTopBlockButtons from './HomeTopBlockButtons/HomeTopBlockButtons';
import HomeThreeColumns from './HomeThreeColumns/HomeThreeColumns';
import HomeFourSteps from './HomeFourSteps/HomeFourSteps';
import HomeAbout from './HomeAbout/HomeAbout';
import HomeOrganizations from './HomeOrganizations/HomeOrganization';
import HomeContact from './HomeContact/HomeContact';
import HomeFooter from './HomeFooter/HomeFooter';


class Home extends Component{
    render() {
        return <>
            <div className='container top-block flex' name="homeStart">
                <div className='left-side-container'/>
                <div className='right-side-container'>
                    <div className='flex-col-right-top__header'>
                        <HomeHeader/>
                        <HomeNav/>
                    </div>
                    <HomeTopBlockButtons/>
                </div>
            </div>
            <HomeThreeColumns/>
            <HomeFourSteps/>
            <HomeAbout/>
            <HomeOrganizations/>
            <HomeContact/>
            <HomeFooter/>
        </>
    }
}

export default Home;