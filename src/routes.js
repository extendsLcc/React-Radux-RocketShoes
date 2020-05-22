import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cart  from "./pages/Cart";
import Home from "./pages/Home";

function Routes(props) {
    return (
        <Switch>
            <Route to="/" exact component={Home}></Route>
            <Route to="/cart" component={Cart}></Route>
        </Switch>
    );
}

export default Routes;