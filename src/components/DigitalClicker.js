// Code DigitalClicker Component Here

import React from 'react';

export default class DigitalClicker extends React.Component {
    state = {
        timesClicked: 0
    }

    upOne = (event) => {
        this.setState(previousState => ({
            timesClicked: previousState.timesClicked + 1
        }))
    }

    render() {
        return (
        <button onClick={this.upOne}>{this.state.timesClicked}</button>
        )
    }
}