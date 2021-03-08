import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Presentation from '../pages/Presentation';
import Home from '../pages/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Presentation} />

            <>
                <Header />
                <Route path="/home" component={Home} />
                <Footer />
            </>
        </Switch>
    )
}

export default Routes;