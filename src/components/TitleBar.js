import React, { Component } from "react"
import { Button } from "semantic-ui-react"

export default class TitleBar extends Component {
  render() {
    return (
      <div className="titleBar row">
        <div className="col s1 responsive-img">
          <Button onClick={this.props.toggle} icon="list layout" />
        </div>
        <div className="col s10 center-align">
          <h1 className="text-center">Plapok</h1>
          <p className="text-center">Planning Poker app for Satcom Direct</p>
        </div>
      </div>
    )
  }
}
