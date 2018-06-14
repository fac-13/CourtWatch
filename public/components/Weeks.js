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

    // Create one list item for every hearing on the same date
    const Hearings = () => match.map((el, index) => <li key={index}><Link to={`/hearing/${el._id}`} className="link">{el.court_name}</Link></li>);

    return (
      <article key={index} className="schedule_article">
        <section className="schedule_section left_column">
          <p>{day.format('dddd')}</p>
          <p>{day.format('DD')}</p>
        </section>

        <section className="schedule_section right_column">
          <ul>
            {match.length > 0 &&
              <Hearings />
            }
          </ul>
        </section>
      </article >
    );
  });
};

export default Weeks;
