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
    this.setState({ [key]: value }, () => console.log("This state court", this.state.court));
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
              <select id="date" name="date" className="select" value={this.state.date} onChange={this.handleChange}>
                <Date />
              </select>
            </section>

            <section className="form_section autocomplete">
              <label htmlFor="court">Court:</label>
              <input id="court" name="court" className="input" value={this.state.court} onChange={this.handleAutocomplete} />
              <ul className="list">
                {this.state.court_options &&
                  <Courts courts={this.state.court_options} />
                }
              </ul>
            </section>

            <h4>Contact details (optional):</h4>

            <section className="form_section">
              <label htmlFor="name">Name:</label>
              <input className="input" type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            </section>

            <section className="form_section">
              <label htmlFor="profession">I am a...</label>
              <select id="profession" name="profession" className="select" value={this.state.profession} onChange={this.handleChange}>
                <option value="" selected disabled hidden>Please select one:</option>
                <option value="Solicitor" className="select_item">Solicitor</option>
                <option value="Social worker" className="select_item">Social worker</option>
                <option value="Defendant" className="select_item">Defendant</option>
                <option value="Other" className="select_item">Other</option>
              </select>
            </section>


            <section className="form_section">
              <label htmlFor="email">Email:</label>
              <input type="text" name="email" className="input" value={this.state.email} onChange={this.handleChange} />
            </section>

            <section className="form_section">
              <label htmlFor="phone">Phone number:</label>
              <input type="text" name="number" className="input" value={this.state.phone} onChange={this.handleChange} />
            </section>

            <button type="submit"><Link to="/schedule" className="link">Add hearing</Link></button>
          </form>
        </section>
      </React.Fragment >
    )
  }
};

