import React, { Component } from 'react';

class DayandMonthArray extends Component {


  render() {

    let DayandMonth = [
      ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    ];

    let todayValue, monthValue;

    DayandMonth.forEach(function (element, index, array) {

      let today = new Date().getDay();
      let month = new Date().getMonth();

      // here I accessed each sub-array in the DayandMonth array
      for (let i = 0; i < element.length; i++) {

        if (i === today && today < 5) {
          todayValue = DayandMonth[0][i] + " - You should go to work.";
        } else if (i === today && today >= 5) {
          todayValue = DayandMonth[0][i] + " - You can watch TV all day today.";
        }
      }
      DayandMonth.forEach(function (element2d, index2d, array2d) {

        for (let m = 0; m < element2d.length; m++) {
          if (month === m) {
            monthValue = element2d[m];
          }
        }
      })
    })

    return <div>We are in the month of {monthValue} 2018; Day: {todayValue}</div>;

  }
}

export default DayandMonthArray;
