import React, { Component } from 'react';

class App extends Component {
  getDayName(number) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[number];
  }
  getMonthName(number) {
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    return months[number];
  }
  getYear() {
    let today2 = new Date().getFullYear();
    return today2;
  }
  render() {
    // Get current date
    let today = new Date().getDay();
    let today1 = new Date().getMonth();
    
    // If it is weekend
    if (today === 6 || today === 0 || today1 === 6 || today1 === 0)
    return <div>Today is {this.getDayName(today)} {this.getMonthName(today1)}, {this.getYear()} - You can watch TV all day today</div>;
    // If it is weekdays
    return <div>Today is {this.getDayName(today)} {this.getMonthName(today1)}, {this.getYear()} - You should go to work today</div>;
  }
}

export default App;
