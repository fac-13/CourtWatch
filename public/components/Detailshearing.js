/* eslint-disable */

import React from 'react';
import moment from 'moment';
import Button from './Button';

const DetailsHearings = (props) => {
  const { hearing } = props;
  const { addresses, contact } = hearing;

  //Change format of date 
  const date = moment(hearing.date).format('dddd D MMMM YYYY')

  // Regex and filter function to render only address for visits (not postal address)
  const regex = /visit/i;
  const addressBlock = addresses.filter(item => regex.test(item.type) === true);

  //replace new line symbol with break
  const Address = () => {
    return addressBlock[0].address.replace(/\n\n/, '\n').split('\n').map((item, key) => <span key={key}>{item}<br /></span>);
  }

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

      <section className="hearing_section first">
        <section className="hearing_left_column">
          <h4>Address:</h4>
        </section>
        <section className="hearing_right_column">
          <Address />
          <span>{addressBlock[0].town}<br /></span>
          <span>{addressBlock[0].county}</span>
        </section>
      </section>

      <section className="hearing_section first">
        <section className="hearing_left_column">
          <h4>Postcode:</h4>
        </section>
        <section className="hearing_right_column">
          <span>{addressBlock[0].postcode}</span>
        </section>
      </section>
      <Button className="hearing_button" link="/schedule" text="Attend" />

      <section className="hearing_section second">
        <h4>CourtWatchers attending the hearing:</h4>
        <p>No CourtWatchers are booked to attend the hearing.</p>
      </section>
    </article >
  );
};

export default DetailsHearings;
