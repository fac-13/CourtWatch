import React from 'react';

export default class Signup extends React.Component {
  state = {
    first_name: '',
    last_name: '',
    password: '',
    confirm_password: '',
    email: '',
    mobile: '',
  }

  handleChange = (event) => {
    const { target } = event;
    const { value } = target;
    const key = target.name;
    this.setState({ [key]: value });
  }

  signUp = () => {

  }

  render() {
    return (
      <React.Fragment >
        <h1>Sign up</h1>
        <form className="form">

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

          <button type="submit" onClick={this.signUp}>Submit</button>
        </form>
      </React.Fragment >
    );
  }
}
