/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

export default class NewHearing extends React.Component {
  state = {
    input: '',
    date: '',
    court: '',
    name: '',
    type: '',
    email: '',
    phone: '',

  }

  render() {
    return (
      < React.Fragment >
        <h1>Add a new hearing</h1>
        <section>
          <form action="/add-hearing" method="post">

            <label htmlFor="date">Date:</label>
            <input list="date" name="date" id="name" value={this.state.date} />
            <datalist id="date">
              <option value="hello" />
              <option value="Ciao" />
            </datalist>

            <label htmlFor="court">Court:</label>
            <input list="text" name="court" id="court" value={this.state.court} />

            <h4>Contact details (optional)</h4>
            <label htmlFor="name">Name:</label>
            <input type="text" name="text" value={this.state.name} />
            <p>I am a...</p>
            <input list="type" name="type" value={this.state.type} />
            <datalist id="type">
              <option value="Solicitor" />
              <option value="Social worker" />
              <option value="Defendant" />
              <option value="Other" />
            </datalist>

            <label htmlFor="email">Email:</label>
            <input type="text" name="email" value={this.state.email} />

            <label htmlFor="phone">Phone number:</label>
            <input type="text" name="number" value={this.state.phone} />
            <button type="submit"><Link to="/schedule">Add hearing</Link></button>
          </form>
        </section>
      </React.Fragment >
    )
  }
};

