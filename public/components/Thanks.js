import React from 'react';
import { Link } from 'react-router-dom';

const Thanks = () => (
    <React.Fragment>
      <h1>Thank you!</h1>
      <main className="main">

        <h4>The hearing has been successfully added to our database.</h4>
        <p>If you want to have a look at all the upcoming hearings, please go to the <Link to='/schedule' className="link">schedule page</Link>.</p>


      </main>
    </React.Fragment>
  );

export default Thanks;
