import React from 'react';

const Courts = (props) => {
  const { courts } = props;

  return courts.map(item =>
    <li className="list_item" key={item.name} value={item.name}> <button type="button" onClick={(e) => console.log(e.target.textContent)}> {item.name}</button></li >);
};

export default Courts;
