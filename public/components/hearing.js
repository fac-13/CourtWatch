/* eslint-disable */
import React from 'react';
import { getData } from '../utils/fetch';
import DetailsHearing from './detailshearing';

export default class Hearing extends React.Component {
  state = {
    data: null,
  }

  componentDidMount() {
    const id = window.location.pathname.split('/')[2];
    getData(`/hearing-data/${id}`)
      .then(hearing => this.setState({ data: hearing }, () => console.log(this.state.data[0])));
  }

  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        {!this.state.data &&
          <h3>Loading hearing details...</h3>
        }
        {this.state.data &&
          <DetailsHearing hearing={this.state.data} />
        }
      </React.Fragment>
    )
  }
}
