/* eslint-disable */
import React from 'react';
import { getHearing } from '../utils/fetch';

export default class Hearing extends React.Component {
  state = {
    data: null,
  }

  componentDidMount() {
    const id = window.location.pathname.split('/')[2];
    getHearing(`/hearing-data/${id}`)
      .then(hearing => console.log("Hearing:", hearing)));
  }

  render() {
    return (
      <React.Fragment>
        <h1>Hearing page</h1>
      </React.Fragment>
    )
  }
}
