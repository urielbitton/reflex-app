import React, {createContext, useState} from 'react'

export const StoreContext = createContext()

const StoreContextProvider = (props) => {

  const [courses, setCourses] = useState([

  ])
  const [grades, setGrades] = useState([

  ])
  const [resources, setResources] = useState([

  ])
  const [settings, setSettings] = useState([

  ])
  const [notifs, setNotifs] = useState([

  ])





  return (
    <StoreContext.Provider value={{courses, setCourses, grades, setGrades, resources, setResources, settings, setSettings, notifs, setNotifs}}>
      {props.children}
    </StoreContext.Provider>
  )

}

export default StoreContextProvider