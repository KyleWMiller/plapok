import React, { Component } from "react"
import autoBind from "react-autobind"

import AvatarsPane from "./AvatarsPane"


export default class CreateAcctPane extends Component {
  constructor(props) {
    super(props)
    autoBind(this)

  }
  facilitatorCheck() {
    this.setState()
  }
  render() {
    return (
      <div className="row">
        <h2 className="text-center">Create an Account</h2>

        <div className="row text-center">
          <div className="col m6 s12">
            <label htmlFor="name">Name</label>
            <input id="name" type="text"/>
          </div>
          <div className="col m6 s12">
            <label htmlFor="facilitator">facilitator</label>
            <input id="facilitator" type="checkbox" ref="facilitator" onClick={this.facilitatorCheck}/>
          </div>
        </div>

        <AvatarsPane />

      </div>
    )
  }
}
