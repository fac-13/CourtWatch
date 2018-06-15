import React from 'react';
import moment from 'moment';

const start = moment().subtract(1, 'days');
const arr = Array.from({ length: 14 });

const Date = arr.map((item, index) => {
  const day = start.add(1, 'days');
  const formattedDate = day.format('dddd D MMMM YYYY');
  return { value: formattedDate, label: formattedDate, id: 'date' };
});

export default Date;
