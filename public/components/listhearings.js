/* eslint-disable */
import React from 'react';
import Weeks from './weeks';
import MonthYear from './monthyear';

const ListHearings = (props) => {

  const { hearings } = props;

  return (
    <section className="schedule_list">
      <header className="schedule_header">
        <MonthYear />
      </header>
      <Weeks hearings={hearings} />
    </section>
  )
};

export default ListHearings;
