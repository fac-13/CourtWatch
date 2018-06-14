import { Link } from 'react-router-dom';
import React from 'react';
import Button from './Button';

const Home = () => {
  const join = '/join';
  const addHearing = '/new-hearing';

  return (
    <React.Fragment>
      <section className="home">
        <section className="home_title">
          <h1>CourtWatch</h1>
        </section>
        <section className="home_section text">
          <div className="first_div">
            <h4>Every woman has a right to a fair trial.</h4><p>Yet many times crucial mitigating circumstances are not taken into account by the justice system.</p>
            <h4>Unfair prison sentences break the lives of women and their families.</h4>
          </div>
          <div className="second_div">
            <p><Link to="/join" className="link">Join CourtWatch</Link> to monitor and report on civil and criminal court cases, so to defend the right of every woman to receive a fair and impartial trial.</p>
            <section className="home_section buttons">
              <Button className="home_button" link={join} text="Join CourtWatch" />
              <Button className="home_button" link={addHearing} text="Add a hearing" />
            </section>
          </div>
        </section>
      </section>
    </React.Fragment>
  );
};

export default Home;
