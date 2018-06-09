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
  const address = addresses.filter(item => regex.test(item.type) === true);

  return (
    <section className="hearing_details">
      <Button link="" text="Attend" />
      <h4> Date:</h4>
      <p>{date}</p>
      <h4>Court</h4>
      <p>{hearing[0].court_name}</p>
      <h4>Address:</h4>
      <p>{address[0].address}</p>
      <p>{address[0].town}</p>
      <p>{address[0].county}</p>
      <h4>CourtWatchers attending the hearing:</h4>
      <p>No CourtWatchers are booked to attend the hearing</p>
    </section >
  );
};

export default DetailsHearings;
