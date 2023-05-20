// Redux : redux is state management tool. Used to maintain state throught out the application.
// Redux is third party tool we need to install it via npm

// Store : Store will maintain all published state updated value at application roote level. Will configure those store at application root file

import { configureStore, combineReducers, createStore } from '@reduxjs/toolkit'
import { loginReducer } from './reducer/loginReducer'

const rootReducer: any = combineReducers({
  loginReducer: loginReducer
})

const store = () => createStore(rootReducer)

export default store;
