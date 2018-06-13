import React from 'react';
import { postData } from '../utils/fetch';
import { withRouter } from 'react-router-dom';

export default class Signup extends React.Component {
  state = {
    first_name: '',
    last_name: '',
    password: '',
    confirm_password: '',
    email: '',
    mobile: '',
    duplicate_error: '',
  }

  handleChange = (event) => {
    const { target } = event;
    const { value } = target;
    const key = target.name;
    this.setState({ [key]: value });
  }

  signUp = (e) => {
    e.preventDefault();
    const data = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      password: this.state.password,
      email: this.state.email,
      mobile: this.state.mobile,
    };

    postData('/signup', data)
      .then((response) => {
        if (response.success) {
          console.log('response', response);
          this.props.history.push('/');
        }
      });
  }

  render() {
    return (
      <React.Fragment >
        <h1>Sign up</h1>
        <form className="form" onSubmit={this.signUp}>

          <section className="form_section">
            <label htmlFor="first_name">First name:</label>
            <input type="text" name="first_name" className="input" value={this.state.first_name} onChange={this.handleChange} />
          </section>

          <section className="form_section">
            <label htmlFor="last_name">Last name:</label>
            <input type="text" name="last_name" className="input" value={this.state.last_name} onChange={this.handleChange} />
          </section>

          <section className="form_section">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" className="input" value={this.state.email} onChange={this.handleChange} />
          </section>

          <section className="form_section">
            <label htmlFor="mobile">Mobile phone number:</label>
            <input type="text" name="mobile" className="input" value={this.state.mobile} onChange={this.handleChange} />
          </section>

          <section className="form_section">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" className="input" value={this.state.password} onChange={this.handleChange} />
          </section>

          <section className="form_section">
            <label htmlFor="confirm_password">Confirm password:</label>
            <input type="password" name="confirm_password" className="input" value={this.state.confirm_password} onChange={this.handleChange} />
          </section>

          <button type="submit">Submit</button>
        </form>
      </React.Fragment >
    );
  }
}
