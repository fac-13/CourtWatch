import React from 'react';
import { Link } from 'react-router-dom';

const Thanks = () => {
  const query = location.search.split('=')[1];
  console.log('Path', query);
  console.log('Location', location);

  return (
    <React.Fragment >
      <h1>Thank you!</h1>
      <main className="main">
        {query === 'hearing' &&
          <React.Fragment>
            <h4>The hearing has been successfully added to our database.</h4>
            <p>If you want to have a look at all the upcoming hearings, please go to the <Link to="/schedule" className="link">schedule page</Link>.</p>
          </React.Fragment>
        }
        {query === 'join' &&
          <React.Fragment>
            <h4> Your contact details have been sent to one of our coordinators.</h4>
            <p>You will soon receive an email with more information about becoming a CourtWatch volunteer and a link to sign up</p>
          </React.Fragment>
        }
      </main>
    </React.Fragment >
  );
};

export default Thanks;
