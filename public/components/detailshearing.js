/* eslint-disable */

import React from 'react';
import moment from 'moment';
import Button from './button';

const DetailsHearings = (props) => {
  const { hearing } = props;
  const { addresses, contact } = hearing[0];

  //Changes format of date 
  const date = moment(hearing[0].date).format('dddd D MMMM YYYY')

  // Regex and filter function to render only address for visits (not postal address)
  const regex = /visit/i;
  const addresses = addresses.filter(item => regex.test(item.type) === true);

  //Replace \n with <br> to go on new line
  const Address = () => {
    addressBlock[0].address.split('\n').map((item, key) => {
      console.log("Item", item)
      return <span key={key}>{item}<br /></span>
    })
  }

  return (
    <article className="hearing_container">

      <section className="hearing_section">
        <section className="hearing_left_column">
          <h4> Date:</h4>
        </section>
        <section className="hearing_right_column">
          <p>{date}</p>
        </section>
      </section>

      <section className="hearing_section">
        <section className="hearing_left_column">
          <h4>Court:</h4>
        </section>
        <section className="hearing_right_column">
          <p>{hearing[0].court_name}</p>
        </section>
      </section>

      <section className="hearing_section">
        <section className="hearing_left_column">
          <h4>Address:</h4>
        </section>
        <section className="hearing_right_column">
          <Address />
          <p>{addresses[0].town}</p>
          <p>{addresses[0].county}</p>
          <p>{addresses[0].postcode}</p>
        </section>
      </section>

      <Button className="hearing_section" link="/schedule" text="Attend" />

      <section className="hearing_section">
        <h4>CourtWatchers attending the hearing:</h4>
        <p>No CourtWatchers are booked to attend the hearing</p>
      </section>

    </article>
  );
};

export default DetailsHearings;
