import React from 'react';
import { Router as ReachRouter } from '@reach/router'


import GlobalStyles from '../styles/global';
import Presentation from '../views/presentation';
import App from '../App'
import Home from '../views/home'

const Routes = () => {
    return (
        <>
            <GlobalStyles />
            <ReachRouter>
                <Presentation default path="/"/>
                <App path="/">
                    <Home path="/home" />
                </App>
            </ReachRouter>
        </>
    )
}

export default Routes;
