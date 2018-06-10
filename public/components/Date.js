import React from 'react';
import moment from 'moment';

const Date = () => {
  const start = moment().subtract(1, 'days');

  const arr = Array.from({ length: 14 });

  return arr.map((item, index) => {
    const day = start.add(1, 'days');
    const date = day.format('dddd D MMMM');
    return <option value={date} key={date} />;
  });
};

export default Date;
