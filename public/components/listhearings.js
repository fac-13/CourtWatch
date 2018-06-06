/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const ListHearings = (props) => {
  const { hearings } = props;

  const listItems = hearings.map((item, index) =>
    (<li key={index}>
      <p>{item.date}</p>
      <h4><Link to={'/hearing/' + item._id}> {item.court_name}</Link></h4>
      {/* <p>{item.addresses[0].postcode}</p> */}
    </li >));

  return (
    <ul>{listItems}</ul>
  );
};

export default ListHearings;
