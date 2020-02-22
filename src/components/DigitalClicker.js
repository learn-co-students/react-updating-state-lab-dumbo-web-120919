import React from 'react';

class digitalClicker extends React.Component {

    state = {
        timesClicked: 0
    };

    handleClick = () => {
        this.setState( prevState => {
            return {
                timesClicked: prevState.timesClicked + 1
            }
        })
        
    }

    render () {
        return(
        <button onClick={this.handleClick}>Times Clicked: {this.state.timesClicked}</button>
        )
    }
}

export default digitalClicker;
