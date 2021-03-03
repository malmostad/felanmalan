import { createContext, useReducer } from 'react'
import { formViews } from '../../views/index'

export const NavigationContext = createContext()

const initialState = {
  currentViewIndex: 0,
  disableNext: false,
  lastViewIndex: formViews.length - 1,
}

const navigationReducer = (navigationState, action) => {
  let { currentViewIndex, disableNext } = navigationState

  switch (action.type) {
    case 'disableNext':
      disableNext = true
      return { ...navigationState, disableNext: disableNext }
    case 'enableNext':
      disableNext = false
      return { ...navigationState, disableNext: disableNext }
    case 'next':
      currentViewIndex += 1
      return { ...navigationState, currentViewIndex: currentViewIndex }
    case 'previous':
      currentViewIndex -= 1
      return { ...navigationState, currentViewIndex: currentViewIndex }
    case 'reset':
      currentViewIndex = 0
      return { ...navigationState, currentViewIndex: currentViewIndex }
    case 'submit':
      return { ...navigationState, currentViewIndex: currentViewIndex }
    default:
      return { ...navigationState }
  }
}

export const NavigationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(navigationReducer, initialState)

  return (
    <NavigationContext.Provider value={{ state, dispatch }}>{children}</NavigationContext.Provider>
  )
}
