import React from 'react';
import { getSchedule } from '../utils/fetch';

export default class Schedule extends React.Component {
  state = {
    data: null,
  }

  componentDidMount() {
    getSchedule('/schedule-data').then(hearings => this.setState({ data: hearings }));
  }

  render() {
    return (
      <React.Fragment>
        <h1 > Schedule</h1>
        {!this.state.data &&
          <h3>Loading schedule...</h3>
        }
        {this.state.data &&
          <article>
            <p>{this.state.data[0].date}</p>
            <p>{this.state.data[0].court_name}</p>
          </article>
        }
      </React.Fragment>
    );
  }
}

