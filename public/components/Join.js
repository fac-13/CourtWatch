import React from 'react';
import { postData } from '../utils/fetch';

export default class Join extends React.Component {
  state = {
    name: '',
    email: '',
    error: '',
  }

  handleChange = (event) => {
    const { target } = event;
    const { value } = target;
    const key = target.name;
    this.setState({ [key]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
    };

    postData('/join', data)
      .then((response) => {
        if (response.success === true) {
          setTimeout(() => { this.props.history.push('/thanks'); }, 1800);
        } else {
          this.setState({ duplicate_error: 'Database error' }, () => {
            setTimeout(() => { this.setState({ error: '' }); }, 1800);
          });
        }
      });
  }

  render() {
    const { error } = this.state;

    return (
      <React.Fragment >
        <h1>Join CourtWatch</h1>
        <form className="form" onSubmit={this.handleSubmit}>

          <section className="form_section">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" className="input" value={this.state.name} onChange={this.handleChange} />
          </section>

          <section className="form_section">
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" className="input" value={this.state.email} onChange={this.handleChange} />
          </section>
          {error &&
            <section>
              <p className="form_error">Sorry, there has been an error with our database. Please try to submit the form again.</p>
            </section>
          }
          <button type="submit">Submit</button>
        </form>
      </React.Fragment >
    );
  }
}
