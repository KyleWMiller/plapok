import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom"
import autoBind from "react-autobind"

import TitleBar from "./components/TitleBar"
import AccountPane from "./components/AccountPane"
import RoomPane from "./components/RoomPane"





export default class App extends Component {
  constructor(state) {
    super()
    autoBind(this)
    this.state = {
      user: {
        name: "",
        facilitator: false,
        avatar: ""
      }
    }
  }
  onInputChange(e) {
    console.log(e.target.value)
    let newName = Object.assign({}, this.state.user)
    newName.name = e.target.value
    this.setState({user: newName})
  }
  handelFacilitatorCheck() {
    this.setState({facilitator: this.refs.facilitator.checked})
  }
  render() {
    return (
      <div>
        <TitleBar />
        <Router>
          <div className="container">
            <Route path="/" exact={true} component={AccountPane} />
            <Route path="/room/:roomName/" component={RoomPane} />
          </div>
        </Router>
      </div>
    )
  }
}
