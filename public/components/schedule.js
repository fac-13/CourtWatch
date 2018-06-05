import React from 'react';
import { getSchedule } from '../utils/fetch';
import Hearings from './hearings';

export default class Schedule extends React.Component {
  state = {
    data: null,
  }

  componentDidMount() {
    getSchedule('/schedule-data')
      .then(hearings => this.setState({ data: hearings }));
  }

  render() {
    return (
      <React.Fragment>
        <h1 > Schedule</h1>
        {!this.state.data &&
          <h3>Loading schedule...</h3>
        }
        {this.state.data &&
          <Hearings hearings={this.state.data} />
        }
      </React.Fragment>
    );
  }
}

