import React, { Component } from "react"
import { Link } from "react-router-dom"
import autoBind from "react-autobind"

class CreateAcctPane extends Component {
  constructor(props) {
    super(props)
    autoBind(this)

  }
  facilitatorCheck() {
    this.setState()
  }
  render() {
    return (
      <div className="container">
        <h2>Create an Account</h2>

        <div className="row">
          <div className="col-md-6">
            <label htmlFor="name">Name</label>
            <input id="name" type="text"/>
          </div>
          <div className="col-md-6">
            <label htmlFor="facilitator">facilitator</label>
            <input id="facilitator" type="checkbox" ref="facilitator" onClick={this.facilitatorCheck}/>
          </div>
        </div>

        <Link to="/account/joinRoom">Continue</Link>
      </div>
    )
  }
}

export default CreateAcctPane
