import React from 'react';

const Courts = (props) => {
  const { courts, updateCourt } = props;

  return courts.map(item =>
    <li className="list_item" key={item.name} value={item.name}> <button type="button" onClick={e => updateCourt(e.target.textContent)}> {item.name}</button></li >);
};

export default Courts;
