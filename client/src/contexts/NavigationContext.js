import { createContext, useReducer } from 'react'
import { formViews } from '../views/index'

export const NavigationContext = createContext()

const initialState = {
  currentViewIndex: 0,
  disableNext: false,
  disablePrevious: false,
  disableSubmit: false,
  lastViewIndex: formViews.length - 1,
  submitViewIndex: formViews.length - 2,
  disableSkip: false,
}

const navigationReducer = (navigationState, action) => {
  let {
    currentViewIndex,
    disableNext,
    disableSubmit,
    disablePrevious,
    disableSkip,
  } = navigationState

  switch (action.type) {
    case 'disableNext':
      disableNext = true
      return { ...navigationState, disableNext: disableNext }
    case 'enableNext':
      disableNext = false
      return { ...navigationState, disableNext: disableNext }
    case 'disableSkip':
      disableSkip = true
      return { ...navigationState, disableSkip: disableSkip }
    case 'enableSkip':
      disableSkip = false
      return { ...navigationState, disableSkip: disableSkip }
    case 'disableSubmit':
      disableSubmit = true
      return { ...navigationState, disableSubmit: disableSubmit }
    case 'enableSubmit':
      disableSubmit = false
      return { ...navigationState, disableSubmit: disableSubmit }
    case 'next':
      currentViewIndex += 1
      return { ...navigationState, currentViewIndex: currentViewIndex }
    case 'previous':
      currentViewIndex -= 1
      disableNext = false
      return { ...navigationState, currentViewIndex: currentViewIndex, disableNext: disableNext }
    case 'reset':
      disableNext = false
      disablePrevious = false
      currentViewIndex = 0
      return {
        ...navigationState,
        currentViewIndex: currentViewIndex,
        disableNext: disableNext,
        disablePrevious: disablePrevious,
      }
    case 'submit':
      ;(disableNext = true), (disablePrevious = true), (currentViewIndex += 1)
      return {
        ...navigationState,
        currentViewIndex: currentViewIndex,
        disableNext: disableNext,
        disablePrevious: disablePrevious,
      }
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
