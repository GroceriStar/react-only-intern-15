import React, { Component } from 'react';

class CurrentWeekNumber extends Component {

    render() {
        let CurrentWeekNumber = require("current-week-number");
        return <div>week {CurrentWeekNumber()},</div>;

    }
}
export default CurrentWeekNumber;
