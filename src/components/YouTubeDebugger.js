// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

class YouTubeDebugger extends Component {

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


      handleBitrate = (e) => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
      }

      handleResolution = (e) => {
        this.setState({
            settings: {
                ...this.state.settings,
                    video: {
                        ...this.state.settings.video,
                        resolution: '720p'
                    }
            }
        })
      }

    render () {
        console.log(this.state.settings.video)
        return(
            <div> 
                <button className="bitrate" onClick={this.handleBitrate}> .bitrate </button>
                <button className="resolution" onClick={this.handleResolution}> Change Resolution </button>
            </div>
        )
    }
}

export default YouTubeDebugger