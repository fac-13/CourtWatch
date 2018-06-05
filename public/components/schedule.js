import React from 'react';
import { getSchedule, postHearing } from '../utils/fetch';
import AddHearing from './addhearing';
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
        <AddHearing onClick={postHearing} />
        {!this.state.data &&
          <h3>Loading schedule...</h3>
        }
        {this.state.data &&
          <section>
            <Hearings hearings={this.state.data} />
          </section>
        }
      </React.Fragment>
    );
  }
}

