import React from 'react';
import { Router as ReachRouter } from '@reach/router'


import GlobalStyles from '../styles/global';
import Presentation from '../views/presentation';

const Routes = () => {
    return (
        <>
            <GlobalStyles />
            <ReachRouter>
                <Presentation default path="/"/>
            </ReachRouter>
        </>
    )
}

export default Routes;
