import React from 'react'
import { BrowserRouter as Router,Switch,Route,Link, useHistory } from "react-router-dom"
import Home from './Home'
import MyCourses from './MyCourses'
import Tasks from './Tasks'
import Grades from './Grades'
import Resources from './Resources'
import Settings from './Settings'
import Navbar from './Navbar'


function Homecont() {
  return (
    <div className="homecont">
      <div className="innerhomecont">
      <Navbar />
      <div className="spacern"></div> 
      <Router> 
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/mycourses">
            <MyCourses />
          </Route>
          <Route path="/grades">
            <Grades />
          </Route>
          <Route path="/tasks">
            <Tasks />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </Router>
      </div>
    </div>
  )
}

export default Homecont