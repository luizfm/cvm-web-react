import React from 'react';
import { Router as ReachRouter } from '@reach/router'


import GlobalStyles from '../styles/global';
import WelcomePage from '../views/welcome-page';
import App from '../App'
import Home from '../views/home'
import History from '../views/history'
import ChildEducation from '../views/child-education'

const Routes = () => {
    return (
        <>
            <GlobalStyles />
            <ReachRouter>
                <WelcomePage default path="/"/>
                <App path="/site">
                    <Home path="/home" />
                    <History path="/cvm" />
                    <ChildEducation path="/child-education" />
                </App>
            </ReachRouter>
        </>
    )
}

export default Routes;
