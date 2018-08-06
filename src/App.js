import React, { Component } from 'react';
import DayChecker from './DayChecker';
import Header from './Header';
import Calendar from 'react-calendar'
import MonthChecker from './MonthChecker';
import CurrentWeekNumber from './CurrentWeekNumber';
import DayandMonthArray from './DayandMonthsArray';

class App extends Component {

  render() {
    return [
      <Header />,
      <Calendar />,
      <br />,
      <DayChecker />,
      <CurrentWeekNumber />,
      <MonthChecker />,
      <br />,
      <br />,
      <br />,
      <DayandMonthArray />
    ];
  }

}
export default App;