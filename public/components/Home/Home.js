import { Link } from 'react-router-dom';
import React from 'react';
import Navbar from '../Navbar';
import Button from '../Button';

const Home = () => {
  const join = '/join';
  const addHearing = '/new-hearing';

  return (
    <React.Fragment>
      <section className="home">
        <Navbar />
        <section className="home_title">
          <h1>CourtWatch</h1>
        </section>
        <section className="first_section">
          <h4>Every woman has a right to a fair trial.</h4>
        </section>
        <section className="second_section">
          <h4><Link to="/join" className="link">Join CourtWatch</Link> to monitor and report on civil and criminal court cases, so to defend the right of every woman to receive a fair and impartial trial.</h4>
        </section>
        <section className="third_section">
          <Button className="home_button" link={join} text="Become a volunteer" />
          <Button className="home_button" link={addHearing} text="Add a hearing" />
        </section>
        <footer className="home_footer" />
      </section>
    </React.Fragment>
  );
};

export default Home;
