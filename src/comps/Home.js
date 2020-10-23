import React, {useState} from 'react'
import { BrowserRouter as Router,Switch,Route,Link, useHistory } from "react-router-dom"
import Calendars from './Calendars'
import Charts from './Chart'
import Circle from './Circle'


function Home() {

  function genDate() {
    let amonth = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    return new Date().toLocaleString('en-us', {  weekday: 'long' }) + ", "+ new Date().getDate() +" "+ amonth[new Date().getMonth()] 
  }

  return ( 
    <div className="homepage">
      <div className="homegrid">
        <div className="dashbox maindashbox">
          <h4>Course Grades</h4>
          <Charts type="line-chart" />
        </div>
        <div className="dashbox statusbox">
          <div>
            <big><Circle circleclass="circular-chart" percent="58" number="58" /></big>
            <h3>Uriel Bitton</h3>
            <h6>Computer Science</h6>
          </div>
          <div className="statusicons">
            <big>86<small><i className="far fa-badge-check"></i>Average</small></big>
            <big>4<small><i className="fal fa-users-class"></i>Classes</small></big>
            <big>12<small><i className="fas fa-tasks"></i>Tasks</small></big>
          </div>
        </div>
        <div className="dashbox tasksbox">
          <h4>Latest Tasks</h4>
          <div className="innertasksbox">
            <div className="taskrow"> <h6><div className="taskcircle orange"></div>Machine Learning</h6> <p>Lab 6 on AdaBoost Classifiers is due tomorrow. Submit on moodle.</p><div className="taskflex"> <div> <div className="classcode orange">ML</div><small className="coursenum">COMP 432</small> </div><small className="taskdate">Due: {genDate()}</small> </div></div>
            <div className="taskrow"> <h6><div className="taskcircle purple"></div>Information Retrieval</h6> <p>Project 2 updated version. Verify and make changes.</p><div className="taskflex"> <div> <div className="classcode purple">IR</div><small className="coursenum">COMP 479</small> </div><small className="taskdate">Due: {genDate()}</small> </div></div>
            <div className="taskrow"> <h6><div className="taskcircle red"></div>Web Applications</h6> <p>Midterm coming up. Review Chapters 1,2,3,6. Create practice review board.</p><div className="taskflex"> <div> <div className="classcode red">WA</div><small className="coursenum">SOEN 387</small> </div><small className="taskdate">Due: {genDate()}</small> </div></div>
            <div className="taskrow"> <h6><div className="taskcircle green"></div>Artificial Intelligence</h6> <p>Complete practice quiz for AI project 2.</p><div className="taskflex"> <div> <div className="classcode green">AI</div><small className="coursenum">COMP 471</small> </div><small className="taskdate">Due: {genDate()}</small> </div></div>
          </div> 
          <h6 className="seeall">See All</h6>
        </div>
        <div className="dashbox projectmanage">
          <h4>Projects Management</h4>
        </div>
      </div>
      <div className="homeside">
        <Calendars />
        <div className="spacers"></div>
        <h4 className="remtitle">Reminders</h4>
        <h6 className="remdate">{genDate()}</h6>
        <div className="dashbox reminderbox"> <div className="remicon testtype"> <i class="fal fa-pencil"></i> </div><div className="remtxt"> <h6>Midterm 3 - Information Retrieval</h6> <small>Due: {genDate()}</small> </div><div className="remicondiv"><i class="far fa-ellipsis-h"></i></div></div>
        <div className="dashbox reminderbox"> <div className="remicon assignmenttype"> <i class="fal fa-puzzle-piece"></i> </div><div className="remtxt"> <h6>Quiz 2 - Machine Learning</h6> <small>Due: {genDate()}</small> </div><div className="remicondiv"><i class="far fa-ellipsis-h"></i></div></div>
        <div className="dashbox reminderbox"> <div className="remicon projecttype"> <i class="far fa-code-branch"></i> </div><div className="remtxt"> <h6>Project 4 - Financial System for Machine Learning</h6> <small>Due: {genDate()}</small> </div><div className="remicondiv"><i class="far fa-ellipsis-h"></i></div></div>
      </div>
    </div>
  ) 
}

export default Home