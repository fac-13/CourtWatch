import React from 'react';
import moment from 'moment';
import Button from './Button';
import Address from './Address';
import { getData } from '../utils/fetch';

export default class DetailsHearing extends React.Component {
  state = {
    attending: null,
  };

  componentDidMount() {
    const viewerId = window.location.pathname.split('/')[3];
    getData(`/profile/${viewerId}`).then(data =>
      this.setState({ attending: data }, () => console.log(this.state.attending)));
  }

  // Change format of date
  formattedDate = moment(this.props.hearing.date).format('dddd D MMMM YYYY');

  render() {
    const { addresses } = this.props.hearing;
    const { first_name } = this.state.attending;

    return (
      <article className="hearing_container">
        <section className="hearing_section first">
          <section className="hearing_left_column">
            <h4> Date:</h4>
          </section>
          <section className="hearing_right_column">
            <span>{date}</span>
          </section>
        </section>

        <section className="hearing_section first">
          <section className="hearing_left_column">
            <h4>Court:</h4>
          </section>
          <section className="hearing_right_column">
            <span>{hearing.court_name}</span>
          </section>
        </section>

        <Address addresses={addresses} />

        <Button className="hearing_button" link="/schedule" text="Attend" />

        <section className="hearing_section second">
          <h4>CourtWatchers attending the hearing:</h4>
          {!this.state.attending && <p>No CourtWatchers are booked to attend the hearing.</p>}
          {this.state.attending && <p>{first_name}</p>}
        </section>
      </article>
    );
  }
}
