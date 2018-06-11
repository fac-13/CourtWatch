import React from 'react';
import Button from './Button';

const Home = () => {
  const becomeVolunteer = '/volunteer';
  const addHearing = '/new-hearing';

  return (
    <React.Fragment>
      <h1 className="home_title">CourtWatch</h1>
      <section className="home_section">
        <Button className="home_button" link={becomeVolunteer} text="Join CourtWatch" />
        <Button className="home_button" link={addHearing} text="Add a hearing" />
      </section>
    </React.Fragment>
  );
};

export default Home;
