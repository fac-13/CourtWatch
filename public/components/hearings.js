/* eslint-disable */

import React from 'react';

const Hearings = (props) => {
  const { hearings } = props;

  const listItems = hearings.map(item =>
    (<li>
      <p>{item.date}</p>
      <h4>{item.court_name}</h4>
      {/* <p>{item.addresses[0].postcode}</p> */}
    </li>));

  return (
    <ul>{listItems}</ul>
  );
};

export default Hearings;
