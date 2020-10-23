import React from 'react'

function Navbar() {
  return ( 
    <nav>
      <div className="navsearchdiv">
      <label>
        <i className="far fa-search"></i>
        <input placeholder="Search for courses, tasks, grades..."/>
      </label>
      </div>
      
      <div className="accountdiv">
        <div className="notifcont"><i className="fal fa-bell"></i><small>12</small></div>
        <div className="profcont">
          <img src="https://i.imgur.com/5EpxSCQ.jpg" alt=""/>
          <h6>Uriel Bitton<i className="fas fa-angle-down"></i></h6>
        </div>
      </div>
    </nav>
  )
}

export default Navbar