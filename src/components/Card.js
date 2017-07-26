import React, { Component } from 'react'
import autoBind from 'react-autobind'

export default class Card extends Component {
  constructor(props) {
    super(props)
    autoBind(this)

  }
  render() {
    return (
      <div className="col-md-3 card text-center" onClick={this.props.onClick}>
        {this.props.fib}
      </div>
    )
  }
}
