import React, { Component } from 'react';

class MonthChecker extends Component {
  getMonthName(number) {

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[number];

  }

  getYear() {

    let today2 = new Date().getFullYear();
    return today2;

  }

  render() {

    // Get current month
    let month = new Date().getMonth();
    return <div>the month of {this.getMonthName(month)}, {this.getYear()}.</div>;

  }
}

export default MonthChecker;
