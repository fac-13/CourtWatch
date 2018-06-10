import React from 'react';

const Courts = (props) => {
  const { courts } = props;

  return courts.map((item, index) =>
    <option value={item.name} key={item.name} />);
};

export default Courts;
