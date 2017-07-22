import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import { BrowserRouter as Router , Link, Route } from 'react-router-dom'
import './index.css'

import Account from "Account"

ReactDOM.render(<Router>
  <Route path="/" component={Account}>
    <Route exact={true} path="/acct/create"></Route>
    <Route exact={true} path="/acct/joinRoom"></Route>
  </Route>
  <Route path="/room" component={Room}>
    <Route path="/room/:roomNum"></Route>
  </Route>
  </Router>, document.getElementById('root'))





registerServiceWorker()
