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
    const match = hearings.filter(hearing => hearing.hearing_date === date);

    return (
      <article key={index} className="schedule_article">
        <section className="schedule_section left_column">
          <p>{day.format('dddd')}</p>
          <p>{day.format('DD')}</p>
        </section>

        <section className="schedule_section right_column">
          {match.length > 0 &&
            <p><Link to={`/hearing/${match[0]._id}`} className="link">{match[0].court_name}</Link></p>
          }
        </section>
      </article >
    );
  });
};

export default Weeks;
