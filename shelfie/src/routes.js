
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./Home";
import BinA from './BinA';
import BinB from './BinB';
import BinC from './BinC';
import BinD from './BinD';



export default (
    //simulation - 1 42G Switch
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/bins/A" component={BinA} />
        <Route path="/bins/B" component={BinB} />
        <Route path="/bins/C" component={BinC} />
        <Route path="/bins/D" component={BinD} />
    </Switch>
)