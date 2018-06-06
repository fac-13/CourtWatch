import React from 'react';

const DetailsHearings = (props) => {
  const { hearing } = props;
  const { addresses } = hearing[0];

  addresses.map(item => console.log(item.type));

  return (
    <section>
      <h4>Date:</h4>
      <p>{hearing[0].date}</p>
      <h4>Court</h4>
      <p>{hearing[0].court_name}</p>
      <h4>Address</h4>
    </section>
  );
};

export default DetailsHearings;
