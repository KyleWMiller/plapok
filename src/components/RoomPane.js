import React, { Component } from "react"
import autoBind from "react-autobind"

class RoomPane extends Component {
  constructor(props) {
    super(props)
    autoBind(this)
  }
  render() {
    return (
      <div>
        Room Pane
      </div>
    )
  }

}

export default RoomPane
