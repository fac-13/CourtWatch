/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { postData } from '../utils/fetch';

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

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const key = target.name;
    this.setState({ [key]: value });
  }

  handleAutocomplete = event => {
    this.handleChange(event);
    postData(this.state.court)
      .then(courts => console.log("Courts:", courts));
  }


  render() {
    return (
      < React.Fragment >
        <h1>Add a new hearing</h1>
        <section className="form">
          <form action="/add-hearing" method="post">

            <section className="form_section">
              <label htmlFor="date">Date:</label>
              <input list="date" name="date" id="name" value={this.state.date} onChange={this.handleChange} />
              <datalist id="date">
                <option value="hello" />
                <option value="Ciao" />
              </datalist>
            </section>

            <section className="form_section">
              <label htmlFor="court">Court:</label>
              <input list="text" name="court" id="court" value={this.state.court} onChange={this.handleAutocomplete} />
            </section>

            <h4>Contact details (optional):</h4>

            <section className="form_section">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
            </section>

            <section className="form_section">
              <label htmlFor="type">I am a...</label>
              <input list="type" name="type" id="type" value={this.state.type} onChange={this.handleChange} />
              <datalist id="type">
                <option value="Solicitor" />
                <option value="Social worker" />
                <option value="Defendant" />
                <option value="Other" />
              </datalist>
            </section>

            <section className="form_section">
              <label htmlFor="email">Email:</label>
              <input type="text" name="email" id="email" value={this.state.email} onChange={this.handleChange} />
            </section>

            <section className="form_section">
              <label htmlFor="phone">Phone number:</label>
              <input type="text" name="number" id="phone" value={this.state.phone} onChange={this.handleChange} />
            </section>

            <button type="submit"><Link to="/schedule">Add hearing</Link></button>
          </form>
        </section>
      </React.Fragment >
    )
  }
};

