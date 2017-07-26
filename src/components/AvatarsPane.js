import React, { Component } from 'react'
import autoBind from 'react-autobind'


export default class AvatarsPane extends Component {
  constructor(props) {
    super(props)
    autoBind(this)

  }

  render() {
    return (
      <div>
        Avatar Pane
      </div>
    )
  }
}
