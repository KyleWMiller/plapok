import React, { Component } from "react"
import { Link } from "react-router-dom"
import autoBind from "react-autobind"

class JoinRoomPane extends Component {
  constructor(props) {
    super(props)
    autoBind(this)
    this.state = {
      roomName: 'johnRoom'
    }
  }
  handelBlur() {
    console.log(this.state = this.refs.room)
    // this.setState(this.state = this.ref.creator)
  }
  render() {
    return (
      <div className="container">
        <div className="half col-md-6 text-center">
          <h3>Create a Room</h3>
          <label htmlFor="createName">Name</label>
          <input id="createName" type="text" ref="room" onBlur={this.handelBlur}/>
          <div className="row">
            <Link to={`/room/${this.state.roomName}`}>Join Room</Link>
          </div>
        </div>
        <div className="half col-md-6 text-center">
          <h3>Join a Room</h3>
          <label htmlFor="joinName">Name</label>
          <input id="joinName" type="text" ref="room" onBlur={this.handelBlur}/>
          <div className="row">
            <Link to={`/room/${this.state.roomName}`}>Join Room</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default JoinRoomPane
