import React from 'react';

const withAuthorization = () => Component =>{
        class WithAutorization extends React.Component{
            render() {
                return <Component {...this.props} />
            }
        }
        return WithAutorization;
};
export default withAuthorization;