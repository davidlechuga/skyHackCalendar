import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class Calendari extends Component {
  state = {
    date: new Date(),
    
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div>
        <Calendar
            onChange={this.onChange}
            value={this.state.date}
            calendarType="ISO 8601"
            defaultView="month"
            nextLabel="Next"
        />
      </div>
    );
  }
}

export default Calendari
