/* eslint-disable */

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Schedule from './Schedule';
import Resources from './Resources';
import Hearing from './Hearing';
import NewHearing from './Newhearing';
import Join from './Join';
import Thanks from './Thanks';

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
					<Route path="/join" component={Join} />
					<Route path="/thanks" component={Thanks} />
				</React.Fragment>
			</Router>
		);
	}
}
