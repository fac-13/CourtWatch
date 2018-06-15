import React from 'react';

const Address = (props) => {
  const { addresses } = props;
  const regex = /visit/i;
  const visitingAddress = addresses.filter(item => regex.test(item.type) === true);

  return (
    <React.Fragment>
      <section className="hearing_section first">
        <section className="hearing_left_column">
          <h4>Address:</h4>
        </section>
        <section className="hearing_right_column">
          {visitingAddress[0].address
            .replace(/\n\n/, '\n')
            .split('\n')
            .map((item, index) => (
              <span key={index}>
                {item}
                <br />
              </span>
            ))}
          <span>{visitingAddress[0].town}</span>
          <br />
          <span>{visitingAddress[0].county}</span>
        </section>
      </section>
      <section className="hearing_section first">
        <section className="hearing_left_column">
          <h4>Postcode:</h4>
        </section>
        <section className="hearing_right_column">
          <span>{visitingAddress[0].postcode}</span>
        </section>
      </section>
    </React.Fragment>
  );
};

export default Address;
