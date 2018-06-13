import React from 'react';
import moment from 'moment';
import Button from './Button';
import Address from './Address';
import { getData } from '../utils/fetch';

export default class DetailsHearing extends React.Component {
  state = {
    attending: null,
    viewing: null,
    addresses: null,
    contact: null,
  };

  componentDidMount() {
    const { addresses, contact } = this.props.hearing;
    const date = moment(hearing.date).format('dddd D MMMM YYYY');
    const viewerId = window.location.pathname.split('/')[3];
    getData(`/profile/${viewerId}`).then(volunteer =>
      this.setState({ viewing: volunteer, addresses, contact }, () =>
        console.log(this.state.viewing)));
  }

  // Change format of date

  render() {
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
          <p>No CourtWatchers are booked to attend the hearing.</p>
        </section>
      </article>
    );
  }
}
