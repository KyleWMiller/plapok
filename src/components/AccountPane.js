import React, { Component } from "react"
import CreateAcctPane from "./CreateAcctPane"
import JoinRoomPane from "./JoinRoomPane"


export default class AccountPane extends Component {
  constructor() {
    super()

    this.state = {
      roomName: ""
    }
  }
  handleRoomChange = (e) => {
    this.setState({roomName: e.target.value})
  }
  joinRoomEvent = () => {
    socket.emit('join room', this.state.user)
  }
  render() {
    return (
      <div className="container fullWindow">
        <CreateAcctPane />
        <JoinRoomPane roomName={this.state.roomName} roomNameChange={this.handleRoomChange} />
      </div>
    )
  }
}
