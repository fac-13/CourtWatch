/* eslint-disable */

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Schedule from './Schedule';
import Resources from './Resources';
import Hearing from './Hearing';
import NewHearing from './Newhearing.js';
import Volunteer from './Newvolunteer';

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
