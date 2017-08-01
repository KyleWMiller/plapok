import React, { Component } from "react"
import "./App.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Sidebar, Segment,  Menu,  Icon, } from "semantic-ui-react"

import TitleBar from "./components/TitleBar"
import AccountPane from "./components/AccountPane"
import RoomPane from "./components/RoomPane"


export default class App extends Component {
  constructor(state) {
    super(state)
    this.state = {
      user: {
        name: "",
        facilitator: false,
        avatar: ""
      },
      visible: false
    }
  }
  onInputChange = (e) => {
    console.log(e.target.value)
    let newName = Object.assign({}, this.state.user)
    newName.name = e.target.value
    this.setState({user: newName})
  }
  handelFacilitatorCheck= () => {
    this.setState({facilitator: this.refs.facilitator.checked})
  }
  toggleVisibility = () => {
    console.log(this.state.visible)
    this.setState({ visible: !this.state.visible})
    console.log(this.state.visible)
  }
  render() {
    return (
      <div>
        <TitleBar toggle={this.toggleVisibility}/>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation="push" width="thin" visible={this.state.visible} icon="labeled" vertical inverted>
            <Menu.Item name="home">
              <Icon name="home" inverted />
              Home
            </Menu.Item>
            <Menu.Item name="gamepad">
              <Icon name="gamepad" />
              Games
            </Menu.Item>
            <Menu.Item name="camera">
              <Icon name="camera" />
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Router>
                <div>
                  <Route path="/" exact={true} component={AccountPane} />
                  <Route path="/room/:roomName/" component={RoomPane} />
                </div>
              </Router>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
