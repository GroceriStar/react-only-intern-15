import React, { Component } from 'react';

class DayChecker extends Component {
  getDayName(number) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[number];
  }
  
  render() {
    // Get current date
    let today = new Date().getDay();
    
    // If it is weekend
    if (today === 6 || today === 0)
    return <div>Today is {this.getDayName(today)}, </div>;
    // If it is weekdays
    return <div>Today is {this.getDayName(today)}, </div>;
  }
}

export default DayChecker;
