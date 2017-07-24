import React, { Component } from "react"
import autoBind from "react-autobind"

class JoinRoomPane extends Component {
  constructor(props) {
    super(props)
    autoBind(this)
  }
  render() {
    return (
      <div>
        Join Room Pane
      </div>
    )
  }
}

export default JoinRoomPane
