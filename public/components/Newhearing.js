/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { postData } from '../utils/fetch';
import Courts from './Courts';
import Date from './Date';

export default class NewHearing extends React.Component {
  state = {
    input: '',
    date: '',
    court: '',
    court_options: [],
    name: '',
    profession: '',
    email: '',
    phone: '',
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const key = target.name;
    this.setState({ [key]: value });
  }

  handleAutocomplete = event => {
    this.handleChange(event);
    postData(this.state.court)
      .then(data => {
        console.log("Courts:", data)
        this.setState({ court_options: data })
      });
  }

  render() {
    return (
      < React.Fragment >
        <h1>Add a new hearing</h1>
        <section className="form">
          <form action="/add-hearing" method="post">

            <section className="form_section">
              <label htmlFor="date">Date:</label>
              <input list="date" name="date" value={this.state.date} onChange={this.handleChange} />
              <datalist id="date">
                <Date />
              </datalist>
            </section>

            <section className="form_section">
              <label htmlFor="court">Court:</label>
              <input list="court" name="court" value={this.state.court} onChange={this.handleAutocomplete} />
              <datalist id="court">
                <Courts courts={this.state.court_options} />
              </datalist>
            </section>

            <h4>Contact details (optional):</h4>

            <section className="form_section">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            </section>

            <section className="form_section">
              <label htmlFor="profession">I am a...</label>
              <input list="profession" name="profession" value={this.state.profession} onChange={this.handleChange} />
              <datalist id="profession">
                <option value="Solicitor" />
                <option value="Social worker" />
                <option value="Defendant" />
                <option value="Other" />
              </datalist>
            </section>


            <section className="form_section">
              <label htmlFor="email">Email:</label>
              <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
            </section>

            <section className="form_section">
              <label htmlFor="phone">Phone number:</label>
              <input type="text" name="number" value={this.state.phone} onChange={this.handleChange} />
            </section>

            <button type="submit"><Link to="/schedule" className="link">Add hearing</Link></button>
          </form>
        </section>
      </React.Fragment >
    )
  }
};

