import React, { Component } from "react"
import autoBind from "react-autobind"

import CreateAcctPane from "./CreateAcctPane"
import JoinRoomPane from "./JoinRoomPane"


export default class AccountPane extends Component {
  constructor(props) {
    super(props)
    autoBind(this)
  }
  render() {
    return (
      <div className="container-fluid">
        <CreateAcctPane />
        <JoinRoomPane />
      </div>
    )
  }
}
