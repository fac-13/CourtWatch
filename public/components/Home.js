import React from 'react';
import Button from './Button';

const Home = () => {
  const join = '/join';
  const addHearing = '/new-hearing';

  return (
    <React.Fragment>
      <h1 className="home_title">CourtWatch</h1>
      <section className="home_section">
        <div>
          <Button className="home_button" link={join} text="Join CourtWatch" />
          <Button className="home_button" link={addHearing} text="Add a hearing" />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
