import React from 'react';

export default class Join extends React.Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
  }

  handleChange = (event) => {
    const { target } = event;
    const { value } = target;
    const key = target.name;
    this.setState({ [key]: value });
  }

  render() {
    return (
      <React.Fragment >
        <h1>Sign up</h1>
        <form action="/join" method="post" className="form">

          <section className="form_section">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" className="input" value={this.state.name} onChange={this.handleChange} />
          </section>

          <section className="form_section">
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" className="input" value={this.state.email} onChange={this.handleChange} />
          </section>

          <button type="submit">Submit</button>
        </form>
      </React.Fragment >
    );
  }
}