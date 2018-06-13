import React from 'react';
import moment from 'moment';
import Button from './Button';
import Address from './Address';

const DetailsHearings = (props) => {
  const { hearing } = props;
  const { addresses, contact } = hearing;

  // Change format of date
  const date = moment(hearing.date).format('dddd D MMMM YYYY');

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
};

export default DetailsHearings;
