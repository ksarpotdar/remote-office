import React, { useEffect } from 'react'
import { useState } from 'react'
import Create from './Create'
import Room from './Room'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Video from './Video'


const App = (props) => {

  return <Router>
    <Switch>
      <Route path="/video">
        <Video />
      </Route>
      <Route path="/create">
        <Create />
      </Route>
      <Route path="/room">
        <Room />
      </Route>
      <Route path="*">
        <Redirect to="/create" />
      </Route>

    </Switch>

  </Router>
}

export default App