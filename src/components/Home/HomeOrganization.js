import React, {Component} from 'react';
import './HomeOrganization.scss';

class HomeOrganization  extends Component{
    //props: name, description, additional, border
    render() {
        return(
            <div className='organization' style={(this.props.border)? {borderTop: '1px solid #737373'}:{borderTop: 'none'}}>
                <div>
                    <h3>{this.props.name}</h3>
                    <span>{this.props.description}</span>
                </div>
                <div>
                    <span>{this.props.additional}</span>
                </div>
            </div>
        )
    }
}

class HomeOrganizations extends Component{
    state={
        organizations:[
            {
                name:`Organizacja "Lorem Ipsum 1`,
                description:"Sed molestie sit amet nisi ac venenatis. Suspendisse potenti.",
                additional:"Nam laoreet consectetur nunc"
            },
            {
                name:`Organizacja "Lorem Ipsum 2`,
                description:" Vestibulum nec pretium ante. Donec nec massa eu arcu dapibus placerat aliquet id lacus.",
                additional:"Vestibulum vel leo lacus."
            },
            {
                name:`Organizacja "Lorem Ipsum 3`,
                description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                additional:"Vestibulum vel leo lacus."
            },
            {
                name:`Organizacja "Lorem Ipsum 4`,
                description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                additional:"Vestibulum vel leo lacus."
            },
            {
                name:`Organizacja "Lorem Ipsum 5`,
                description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                additional:"Vestibulum vel leo lacus."
            },
            {
                name:`Organizacja "Lorem Ipsum 6`,
                description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                additional:"Vestibulum vel leo lacus."
            }
        ],
        fundations:[
            {
                name:`Fundacja "Lorem Ipsum 1`,
                description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                additional:"Vestibulum vel leo lacus."
            },
            {
                name:`Fundacja "Lorem Ipsum 2`,
                description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                additional:"Vestibulum vel leo lacus."
            },
            {
                name:`Fundacja "Lorem Ipsum 3`,
                description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                additional:"Vestibulum vel leo lacus."
            },
            {
                name:`Fundacja "Lorem Ipsum 4`,
                description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                additional:"Vestibulum vel leo lacus."
            },
            {
                name:`Fundacja "Lorem Ipsum 5`,
                description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                additional:"Vestibulum vel leo lacus."
            },
            {
                name:`Fundacja "Lorem Ipsum 6`,
                description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                additional:"Vestibulum vel leo lacus."
            },
            {
                name:`Fundacja "Lorem Ipsum 7`,
                description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                additional:"Vestibulum vel leo lacus."
            },
            {
                name:`Fundacja "Lorem Ipsum 8`,
                description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                additional:"Vestibulum vel leo lacus."
            },
            {
                name:`Fundacja "Lorem Ipsum 9`,
                description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                additional:"Vestibulum vel leo lacus."
            },
        ],
        localCollections:[
            {
                name:`Zbiórka "Lorem Ipsum 1`,
                description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                additional:"Vestibulum vel leo lacus."
            },
            {
                name:`Fundacja "Lorem Ipsum 2`,
                description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                additional:"Vestibulum vel leo lacus."
            },
            {
                name:`Fundacja "Lorem Ipsum 3`,
                description:"  Donec nec massa eu arcu dapibus placerat aliquet id lacus. Vestibulum nec pretium ante.",
                additional:"Vestibulum vel leo lacus."
            },

        ],
        currentType:"organizations",
        organizationsPage:0,
    };
    changeTypeOfOrganization=(type)=>{
        this.setState({currentType:type});
        this.setState({organizationsPage:0})
    };
    changeOrganizationPage=(nr)=>{
        this.setState({organizationsPage:nr})
    };
    render(){
        let displayedOrganizations=[];
        let nrOfBttons=0;
        switch (this.state.currentType){
            case 'organizations':
                nrOfBttons=Math.ceil(this.state.organizations.length/3);
                for (let i=this.state.organizationsPage*3;
                     (i<(this.state.organizationsPage+1)*3 && i<this.state.organizations.length);
                     i++) {
                        displayedOrganizations.push(this.state.organizations[i])
                }
                break;
            case 'fundations':
                nrOfBttons=Math.ceil(this.state.fundations.length/3);
                for (let i=this.state.organizationsPage*3;
                     (i<(this.state.organizationsPage+1)*3 && i<this.state.fundations.length);
                     i++) {
                    displayedOrganizations.push(this.state.fundations[i])
                }
                break;
            case 'localCollections':
                nrOfBttons=Math.ceil(this.state.localCollections.length/3);
                for (let i=this.state.organizationsPage*3;
                     (i<(this.state.organizationsPage+1)*3 && i<this.state.localCollections.length);
                     i++) {
                    displayedOrganizations.push(this.state.localCollections[i])
                }
                break;
            default:
                nrOfBttons=Math.ceil(this.state.organizations.length/3);
                for (let i=0; (i<3 && i<this.state.organizations.length); i++){
                    displayedOrganizations.push(this.state.organizations[i])
                }
        }
        return(
            <>
                <div className='organizations'>
                    <h2>Komu pomagamy?</h2>
                    <div className="decoration"/>
                    <ul className='organization_choice'>
                        <li><button className={(this.state.currentType==='fundations')?"active":"pasive"} onClick={()=>this.changeTypeOfOrganization('fundations')}> Fundacjom</button></li>
                        <li><button className={(this.state.currentType==='organizations')?"active":"pasive"} onClick={()=>this.changeTypeOfOrganization('organizations')}>Organizacjom<br/>pozarządowym</button></li>
                        <li><button className={(this.state.currentType==='localCollections')?"active":"pasive"} onClick={()=>this.changeTypeOfOrganization('localCollections')}>Lokalnym<br/>zbiórkom</button></li>
                    </ul>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className='organizations-details'>
                        {displayedOrganizations.map((e,index)=>{
                            if (index===0){
                                return <HomeOrganization key={index} name={e.name} description={e.description} additional={e.additional} border={false}/>
                            }else{
                                return <HomeOrganization key={index} name={e.name} description={e.description} additional={e.additional} border={true}/>
                            }
                        })}
                    </div>
                    <div className='pageBttns'>
                        {(nrOfBttons>=2) && <button className={(this.state.organizationsPage===0)?"active":"pasive"} onClick={()=>{this.changeOrganizationPage(0)}}>1</button>}
                        {(nrOfBttons>=2) && <button className={(this.state.organizationsPage===1)?"active":"pasive"} onClick={()=>{this.changeOrganizationPage(1)}}>2</button>}
                        {(nrOfBttons>=3) && <button className={(this.state.organizationsPage===2)?"active":"pasive"} onClick={()=>{this.changeOrganizationPage(2)}}>3</button>}
                    </div>
                </div>
            </>
        )
    }
}

export default HomeOrganizations;