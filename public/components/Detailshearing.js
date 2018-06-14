import React from 'react';
import moment from 'moment';
import Button from './Button';
import Address from './Address';
import { getData } from '../utils/fetch';

export default class DetailsHearing extends React.Component {
  state = {
    attending: null,
    click: false,
  };

  componentDidMount() {
    const viewerId = window.location.search.split('?attend=')[1];
    console.log('Viewer Id: ', viewerId);
    console.log('Hearing: ', this.props.hearing);
    getData(`/profile/${viewerId}`).then(data =>
      this.setState({ attending: data }, () => console.log(this.state.attending)));
  }

  updateAttendants = (e) => {
    console.log('button clicked');
    this.setState({ click: !this.state.click });
  };

  render() {
    const { addresses, court_name } = this.props.hearing;
    const { attending, click } = this.state;

    const date = this.props.hearing.hearing_date;
    const formattedDate = moment(date).format('dddd D MMMM YYYY');

    return (
      <article className="hearing_container">
        <section className="hearing_section first">
          <section className="hearing_left_column">
            <h4> Date:</h4>
          </section>
          <section className="hearing_right_column">
            <span>{formattedDate}</span>
          </section>
        </section>

        <section className="hearing_section first">
          <section className="hearing_left_column">
            <h4>Court:</h4>
          </section>
          <section className="hearing_right_column">
            <span>{court_name}</span>
          </section>
        </section>

        <Address addresses={addresses} />

        <button type="button" className="hearing_button" onClick={this.updateAttendants}>
          Attend
        </button>

        <section className="hearing_section second">
          <h4>CourtWatchers attending the hearing:</h4>
          {!click && <p>No CourtWatchers are booked to attend the hearing.</p>}
          {click && <p>{attending.first_name}</p>}
        </section>
      </article>
    );
  }
}
