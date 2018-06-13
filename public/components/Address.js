import React from 'react';

const Address = (props) => {
  const { addresses } = props;
  const regex = /visit/i;
  const visitingAddress = addresses.filter(item => regex.test(item.type) === true);

  return visitingAddress[0].address
    .replace(/\n\n/, '\n')
    .split('\n')
    .map((item, index) => (
      <span key={index}>
        {item}
        <br />
      </span>
    ));
};

export default Address;
