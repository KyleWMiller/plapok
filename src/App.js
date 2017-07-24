import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom"
import autoBind from "react-autobind"

import TitleBar from "./components/TitleBar"
import CreateAcctPane from "./components/CreateAcctPane"
import JoinRoomPane from "./components/JoinRoomPane"
import RoomPane from "./components/RoomPane"

class App extends Component {
  constructor(state) {
    super()
    autoBind(this)
    this.state = {
      "user": {
        "facilitator": false,
        "name": ""
      }
    }
  }
  render() {
    return (
      <div>
        <TitleBar/>
        <Router>
          <div className="container-fluid">
            <Route path="/account/create" component={CreateAcctPane}></Route>
            <Route path="/account/joinRoom" component={JoinRoomPane}></Route>
            <Route path="/room/:roomName/" component={RoomPane}></Route>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
