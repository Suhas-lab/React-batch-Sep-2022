// Redux : redux is state management tool. Used to maintain state throught out the application.
// Redux is third party tool we need to install it via npm

// Store : Store will maintain all published state updated value at application roote level. Will configure those store at application root file

import { configureStore, combineReducers, createStore } from '@reduxjs/toolkit'

const initialState: any = {
  isLogedIn: false
}

// what is reducer => Reducer is container which accept action by user and update state according to particular action
debugger
export const loginReducer = (state = initialState, action: any) => {
  // debugger;
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        isLogedIn: action.payload
      }
    }
    case 'LOGOUT': {
      return {
        ...state,
        isLogedIn: action.isLogedIn
      }
    }
    default:
      return state
  }
}

const rootReducer: any = combineReducers({
  loginReducer: loginReducer
})

const store = () => createStore(rootReducer)

export default store
