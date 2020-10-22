import React from 'react'
import Homecont from './Homecont'
import Sidebar from './Sidebar'

function AppContainer() {
  return (
    <div className="appcontainer">
      <Sidebar />
      <Homecont />
    </div>
  )
}

export default AppContainer