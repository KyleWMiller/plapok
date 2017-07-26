import React, { Component } from "react"
import autoBind from "react-autobind"
import update from "immutability-helper"
import io from "socket.io-client"

import Card from "./Card"
const socket = io.connect("http://localhost:8080")

export default class RoomPane extends Component {
  constructor(props) {
    super(props)
    autoBind(this)
    this.state = {
      fibos: ['1/2',1,2,3,5,8,13,21,40,80,'infinity','N/A'],
      user: "Josh",
      cards: [
        // {
        //   user: {},
        //   fibCard: {}
        // }
      ],
      facilitator: "",
      card: {
        user: "",
        num: null
      }
    }
    socket.on('card selected', (card) => this.cardSetter(card))
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.card !== nextState.card
  }
  cardSelector(e) {
    console.log(e.target.innerHTML)
    let newCard = update(this.state.card, {
      user: {$set: this.state.user},
      num: {$set: e.target.innerHTML}
    })
    this.setState({card: newCard})
    console.log(this.state.card)
    socket.emit('card selected', this.state.card)
    this.setState({card: {user: "", num: null}})
  }
  cardSetter(card) {
    // console.log(card)
    let newCards = Object.assign({}, this.state.cards)
    // console.log(newCards)
    // this.setState()
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-10 col-md-offset-2">
            {this.state.fibos.map((fib) => {
              return <Card fib={fib} key={fib} onClick={this.cardSelector}/>
            })}
          </div>
        </div>
        <div className="row">

        </div>
      </div>
    )
  }
}
