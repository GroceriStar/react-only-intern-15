import React, { Component } from 'react';
import DayChecker from './DayChecker';
import Header from './Header';
import Calendar from 'react-calendar'
import MonthChecker from './MonthChecker';
import CurrentWeekNumber from './CurrentWeekNumber';

class App extends Component {
  render() {
    return [
      <Header />,
      <Calendar />, 
      <br />,
      <DayChecker />,
      <CurrentWeekNumber />, 
      <MonthChecker />
    ];
  }
}
export default App;