import React, {useEffect} from 'react'
import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'

function Calendars() {

  useEffect(() => {
    let calendarEl = document.getElementById('calendar');
  
    let calendar = new Calendar(calendarEl, {
      plugins: [ dayGridPlugin, timeGridPlugin, listPlugin ],
      height: 350,
      contentHeight: 300
    });
    
    calendar.render();
     
  },[])

  return (
    <div className="calendar"> 
      <div id="calendar"></div>
    </div>
  )
}

export default Calendars