import React, { Component } from "react"
import autoBind from "react-autobind"
import { Link } from "react-router-dom"

export default class JoinRoomPane extends Component {
  constructor(props) {
    super(props)
    autoBind(this)

  }
  render() {
    return (
      <div className="container">
        <div className="half col-md-6 text-center">
          <h3>Create a Room</h3>
          <label htmlFor="createName">Name</label>
          <input id="createName" type="text" onChange={this.handelChange}/>
          <div className="row">
            {/* <Link to={`/room/${this.state.roomName}`}>Create Room</Link> */}
          </div>
        </div>
        <div className="half col-md-6 text-center">
          <h3>Join a Room</h3>
          <label htmlFor="joinName">Name</label>
          <input id="joinName" type="text" onChange={this.handelChange}/>
          <div className="row">
            {/* <Link to={`/room/${this.state.roomName}`}>Join Room</Link> */}
          </div>
        </div>
      </div>
    )
  }
}
