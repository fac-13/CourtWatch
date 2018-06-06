/* eslint-disable */
import React from 'react';
import { getData } from '../utils/fetch';

export default class Hearing extends React.Component {
  state = {
    data: null,
  }

  componentDidMount() {
    const id = window.location.pathname.split('/')[2];
    getData(`/hearing-data/${id}`)
      .then(hearing => this.setState({ data: hearing }, () => console.log(this.state.data)));
  }

  render() {
    return (
      <React.Fragment>
        <h1>Hearing page</h1>
      </React.Fragment>
    )
  }
}
