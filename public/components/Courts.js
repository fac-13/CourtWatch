import React from 'react';

const Courts = (props) => {
  const { courts, updateCourt } = props;

  return courts.map(item =>
    <li className="list_item" key={item.name} value={item.name}><a onClick={event.target.parentNode.textContent)}> {item.name}</a></li >);
};

export default Courts;
