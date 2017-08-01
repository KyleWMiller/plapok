import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class JoinRoomPane extends Component {
  // constructor(props) {
  //   super(props)
  //
  //
  // }

  render() {
    console.log(this.props.roomName)
    return (
      <div className="container">
        <div className="half col m6 s12 center-align">
          <h3>Create a Room</h3>
          <label htmlFor="createName">Name</label>
          <input id="createName" type="text" onChange={this.props.roomNameChange}/>
          <div className="row">
            <Link to={`/room/${this.props.roomName}`}>Create Room</Link>
          </div>
        </div>
        <div className="half colm6 s12 center-align">
          <h3>Join a Room</h3>
          <label htmlFor="joinName">Name</label>
          <input id="joinName" type="text" onChange={this.props.roomNameChange}/>
          <div className="row">
            <Link to={`/room/${this.props.roomName}`}>Join Room</Link>
          </div>
        </div>
      </div>
    )
  }
}
