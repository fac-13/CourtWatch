import React from 'react';
import moment from 'moment';

const MonthYear = () => {
  const date = moment().format('MMMM YYYY');
  return [date];
};

export default MonthYear;
