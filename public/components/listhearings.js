/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ListHearings = (props) => {
  const { hearings } = props;

  //generate calendar rows 
  const TwoWeeks = () => {
    let start = moment().subtract(1, 'days');
    const arr = Array.from({ length: 14 });
    const result = arr.map((item, index) => <tr key={index}>{start.add(1, 'days').format("dddd DD")}</tr>);
    return result;
  }

  return (
    <table>
      <thead>
        <Month />
      </thead>
      <tbody>
        <tr>
          <TwoWeeks />
        </tr>
      </tbody>
    </table>
  );
};

export default ListHearings;
