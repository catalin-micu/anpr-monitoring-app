import React from 'react';
import {
    BrowserRouter as Router, 
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './home';
import Residential from './residential';
import Commercial from './commercial';


const Webpages = () => {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route path="/residential" component={Residential} />
            <Route path="/commercial" component={Commercial} />
        </Router>
    );
};

export default Webpages;