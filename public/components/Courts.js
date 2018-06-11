import React from 'react';

const Courts = (props) => {
  const { courts } = props;

  return courts.map(item =>
    <li className="list_item" key={item.name} value={item.name}>{item.name}</li >);
};

export default Courts;
