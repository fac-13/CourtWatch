import React from 'react';
import { getData } from '../utils/fetch';
import AddHearing from './addhearing';
import ListHearings from './listhearings';

export default class Schedule extends React.Component {
  state = {
    data: null,
  }

  componentDidMount() {
    getData('/schedule-data')
      .then(hearings => this.setState({ data: hearings }));
  }

  render() {
    return (
      <React.Fragment>
        <h1 > Schedule</h1>
        <AddHearing />
        {!this.state.data &&
          <h3>Loading schedule...</h3>
        }
        {this.state.data &&
          <section>
            <ListHearings hearings={this.state.data} />
          </section>
        }
      </React.Fragment>
    );
  }
}

