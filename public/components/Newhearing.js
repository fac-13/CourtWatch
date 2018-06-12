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
    type: '',
    email: '',
    phone: '',
  };

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const key = target.name;
    this.setState({ [key]: value });
  };

  handleAutocomplete = event => {
    this.handleChange(event);
    const url = '/match-court/';
    postData(url, this.state.court).then(data => {
      this.setState({ court_options: data });
    });
  };

  updateCourt = selected => {
    this.setState({ court: selected, court_options: [] });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Add a new hearing</h1>
        <form action="/add-hearing" method="post" className="form">
          <section className="form_section">
            <label htmlFor="date">Date:</label>
            <select
              id="date"
              name="date"
              className="select"
              value={this.state.date}
              onChange={this.handleChange}
            >
              <Date />
            </select>
          </section>

          <section className="form_section autocomplete">
            <label htmlFor="court">Court:</label>
            <input
              id="court"
              name="court"
              className="input"
              value={this.state.court}
              onChange={this.handleAutocomplete}
            />
            <ul className="list">
              {this.state.court_options.length > 0 && (
                <Courts courts={this.state.court_options} updateCourt={this.updateCourt} />
              )}
            </ul>
          </section>

          <h4>Contact details (optional):</h4>

          <section className="form_section">
            <label htmlFor="name">Name:</label>
            <input
              className="input"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </section>

          <section className="form_section">
            <label htmlFor="type">I am a...</label>
            <select
              id="type"
              name="type"
              className="select"
              value={this.state.type}
              onChange={this.handleChange}
            >
              <option value="" selected disabled hidden>
                Please select one:
              </option>
              <option value="Solicitor" className="select_item">
                Solicitor
              </option>
              <option value="Social worker" className="select_item">
                Social worker
              </option>
              <option value="Defendant" className="select_item">
                Defendant
              </option>
              <option value="Other" className="select_item">
                Other
              </option>
            </select>
          </section>

          <section className="form_section">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              className="input"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </section>

          <section className="form_section">
            <label htmlFor="phone">Phone number:</label>
            <input
              type="text"
              name="phone"
              className="input"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </section>

          <button type="submit">Add hearing</button>
        </form>
      </React.Fragment>
    );
  }
}
