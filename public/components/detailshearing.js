import React from 'react';

const DetailsHearings = (props) => {
  const { hearing } = props;
  const { addresses, contact } = hearing[0];

  // Regex and filter function to render only address for visits (not postal address)
  const regex = /visit/i;
  const address = addresses.filter(item => regex.test(item.type) === true);

  return (
    <section>
      <h4>Date:</h4>
      <p>{hearing[0].date}</p>
      <h4>Court</h4>
      <p>{hearing[0].court_name}</p>
      <h4>Address:</h4>
      <p>{address[0].address}</p>
      <p>{address[0].town}</p>
      <p>{address[0].county}</p>
    </section>
  );
};

export default DetailsHearings;
