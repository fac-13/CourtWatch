import React from 'react';
import { getData } from '../utils/fetch';
import Button from './button';
import ListHearings from './listhearings';

export default class Schedule extends React.Component {
  state = {
    data: null,
  }

  componentDidMount() {
    getData('/schedule-data')
      .then(hearings => this.setState({ data: hearings }));
  }

  addHearing = '/new-hearing';

  render() {
    return (
      <React.Fragment>
        <h1 > Schedule</h1>
        <Button link={this.addHearing} text="Add a hearing" />
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

