/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const NewHearing = () => (
  <React.Fragment>
    <h1>Add a new hearing</h1>
    <section>
      <form action="/add-hearing" method="post">

        Date:
        <input list="date" name="date" />
        <datalist id="date">
          <option value="hello" />
          <option value="Ciao" />
        </datalist>

        Court:
        <input list="text" name="court" />

        <h4>Contact details (optional)</h4>
        Name:
        <input type="text" name="text" />
        <p>I am a...</p>
        <input list="type" name="type" />
        <datalist id="type">
          <option value="Solicitor" />
          <option value="Social worker" />
          <option value="Defendant" />
          <option value="Other" />
        </datalist>

        Email:
        <input type="text" name="email" />
        Phone number:
        <input type="text" name="number" />
        <button type="submit"><Link to="/schedule">Add hearing</Link></button>
      </form>
    </section>
  </React.Fragment>
);

export default NewHearing;
