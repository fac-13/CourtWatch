/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { getData } from '../utils/fetch';

export default class ListHearings extends React.Component {
  state = {
    data: null,
  };

  componentDidMount() {
    getData('/schedule-data').then(hearings =>
      this.setState({ data: hearings }, () => console.log(hearings)),
    );
  }

  //generate calendar rows
  twoWeeks = () => {
    let start = moment().subtract(1, 'days');
    const arr = Array.from({ length: 14 });
    return arr.map((item, index) => {
      // const dayOfWeek = start.add(1, 'days').format('dddd DD');
      <article key={index}>
        <section>{start.add(1, 'days').format('dddd DD')}</section>
        <section>
          <p>HaydnGiulia</p>
        </section>
      </article>;
    });
  };

  // MonthYear = () => {
  //   let date = moment().format('MMMM YYYY');
  //   return [date];
  // };

  render() {
    return (
      <main>
        {/* <header>
          <MonthYear />
        </header> */}
        <section>{this.twoWeeks}</section>
      </main>
    );
  }
}
