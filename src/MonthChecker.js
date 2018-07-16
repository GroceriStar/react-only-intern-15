import React, { Component } from 'react';

class MonthChecker extends Component {
  getMonthName(number) {
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    return months[number];
  }

  getYear() {
    let today2 = new Date().getFullYear();
    return today2;
  }
  
  render() {
    // Get current month
    let month = new Date().getMonth();
    
    // If it is weekend
    if (month === 11 || month === 0)
    return <div>the month of {this.getMonthName(month)}, {this.getYear()} - You can watch TV all day today.</div>;
    // If it is weekdays
    return <div>the month of {this.getMonthName(month)}, {this.getYear()} - You should go to work today.</div>;
  }
}

export default MonthChecker;
