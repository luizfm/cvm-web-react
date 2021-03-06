import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Presentation from '../pages/Presentation';
import Home from '../pages/Home';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Presentation} />

            <Route path="/home" component={Home} />
        </Switch>
    )
}

export default Routes;