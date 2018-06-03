import React from 'react';
import Navbar from './navbar'; 
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import Home from './home'; 
import Schedule from './schedule'; 
import Resources from './resources'; 

export default class App extends React.Component {
    render() {
        return (
            <Router>
            <React.Fragment>
                <Navbar />
            <Route exact={true} path='/' component={Home} /> 
            <Route path='/schedule' component={Schedule} />
            <Route path='/resources' component={Resources} />
            </React.Fragment>
            </Router>
        )
    }
}