import C from './constants'
import appReducer from './store/reducers'
import { createStore } from 'redux'

// parse to Object
const initialState = localStorage['redux-store'] ?
  JSON.parse(localStorage['redux-store']) : {}

const store = createStore(appReducer, initialState)

// Global save the store
// Chrome - console - >store.getState() - to view state
// Very usefull to Debug, but do not forget to delete it for production
// store.dispatch({type:"SET_GOAL", payload: 12}) - run dispath from Chrome console
window.store = store

store.subscribe(() => console.log(store.getState()))

// Chrome - console - >localStorage - to view the data
// Chrome - console - >localStorage.clear() - to clear the data
store.subscribe(() => {
  const state = JSON.stringify(store.getState())
  localStorage['redux-store'] = state
})

store.dispatch({
  type: C.ADD_DAY,
  payload: {
    "resort": "Mt shasta",
    "date": "2016-10-28",
    "powder": false,
    "backcountry": true
  }
})

store.dispatch({
  type: C.SET_GOAL,
  payload: 2
})
