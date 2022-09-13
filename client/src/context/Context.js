import React, { useState, createContext } from 'react'

export const ContextProvider = createContext()

export const Context = ({children}) => {
  const [ user, setUser ] = useState(localStorage.getItem('user'))
  return (
    <ContextProvider.Provider value = {{user, setUser}}>
        {children}
    </ContextProvider.Provider>
  )
}