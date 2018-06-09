/* eslint-disable */

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home';
import Navbar from './navbar';
import Schedule from './schedule';
import Resources from './resources';
import Hearing from './hearing';
import NewHearing from './newhearing.js';
import Volunteer from './newvolunteer';

export default class App extends React.Component {

	render() {
		return (
			<Router>
				<React.Fragment>
					<Navbar />
					<Route exact path="/" component={Home} />
					<Route path="/schedule" component={Schedule} />
					<Route path="/resources" component={Resources} />
					<Route path="/hearing/" component={Hearing} />
					<Route path="/new-hearing" component={NewHearing} />
					<Route path="/volunteer" component={Volunteer} />
				</React.Fragment>
			</Router>
		);
	}
}
