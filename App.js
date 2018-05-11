import React, { Component } from 'react';
import DayChecker from './DayChecker';
import Header from './Header';
import Calendar from 'react-calendar'

class App extends Component {
  render() {
    return [
      <Header />,
      <Calendar />, 
      <br />,
      <DayChecker />
      
    ];
  }
}
export default App;