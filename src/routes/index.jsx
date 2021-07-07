import React from 'react';
import { Router as ReachRouter } from '@reach/router'

import Presentation from '../pages/Presentation';
import Home from '../pages/Home';
import History from '../pages/History';
import App from '../App'
import GlobalStyles from '../styles/global';

const Routes = () => {
    return (
        <>
            <GlobalStyles />
            <ReachRouter>
                <Presentation path="/presentation" />
                <App path="/" >
                    <Home path="/home" />
                    <History path="/history" />
                </App>
            </ReachRouter>
        </>
    )
}

export default Routes;
