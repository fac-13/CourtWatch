import React from 'react';

export default class Schedule extends React.Component {
  state = {

  }

  componentDidMount() {
    fetch('/schedule-data')
      .then(response => response.json())
      .then((data) => { console.log(data); });
  }

  render() {
    return (
      <h1 > Schedule</h1 >
    );
  }
}

