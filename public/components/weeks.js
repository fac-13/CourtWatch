/* eslint-disable */

import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

// generate calendar rows
const Weeks = (props) => {
  const { hearings } = props;

  const start = moment().subtract(1, 'days');

  const arr = Array.from({ length: 14 });

  return arr.map((item, index) => {
    const day = start.add(1, 'days');
    const date = day.format('YYYY-MM-D');

    //Find if any hearings are taking place on the same date, in order to add hearing to row
    const match = hearings.filter(hearing => hearing.date === date);

    return (
      <article key={index}>
        <section>{day.format('dddd DD')}</section>
        <section />
        {match.length > 0 &&
          <p><Link to={`/hearing/${match[0]._id}`}>{match[0].court_name}</Link></p>
        }
      </article >
    );
  });
};

export default Weeks;
