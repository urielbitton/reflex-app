import React, {useContext, useEffect} from 'react'
import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import { StoreContext } from './StoreContext'

function Calendars() {

  const {event} = useContext(StoreContext)

  useEffect(() => {
    let calendarEl = document.getElementById('calendar');
  
    let calendar = new Calendar(calendarEl, {
      plugins: [ dayGridPlugin, timeGridPlugin, listPlugin ],
      height: 350,
      contentHeight: 300,
      events: [
        {
          title: 'ML Quiz',
          start: '2020-10-26'
        },
        {
          title: 'Event2',
          start: '2020-11-05'
        }
      ],
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