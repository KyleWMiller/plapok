import React, { Component } from 'react'
import autoBind from 'react-autobind'
import gravatar from 'gravatar'
import md5 from 'md5'

export default class GravatarPane extends component {
  constructor(props) {
    super(props)
    autoBind(this)

    this.state = {
      "avatarUrl": ""
    }
  }
  createHash(hashee) {
    let groomed = hashee.trim().toLowerCase()
    console.log(groomed)
    // return md5(groomed)
  }
  gravatarHandeler(email) {
    let hash = this.createHash(email),
        avatarUrl = gravatar(hash)
    this.setState({
      "avatarUrl"
    })

  }
  render() {
    return (
      <div>

      </div>
    )
  }
}
