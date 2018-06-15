import React from 'react';
import { getData } from '../utils/fetch';
import Button from './Button';
import ListHearings from './Listhearings';

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
        {!this.state.data &&
          <h3>Loading schedule...</h3>
        }
        {this.state.data &&
          <React.Fragment>
            <section className="schedule">
              <Button className="schedule_button" link={this.addHearing} text="Add a hearing" />
              <section>
                <ListHearings hearings={this.state.data} />
              </section>
            </section>
          </React.Fragment>
        }
      </React.Fragment>
    );
  }
}

