// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component{

  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }  
  }


  handleClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
    console.log(this.state)
  }

  handleResClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.video,
          resolution: '720p'
        }
      }
    });
    console.log(this.state)
  }

  render(){
    return (
    <div>
    <button className="bitrate" onClick={this.handleClick}>BitRate</button>
    <button className="resolution" onClick={this.handleResClick}>Resolution</button>
    </div>
    )
  }

}