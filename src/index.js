import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, combineReducers } from 'redux'
import { toDos, visibilityFilter } from './toDoReducer'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const render = () => ReactDOM.render(<App />, document.getElementById('root'))

const toDoApp = combineReducers({
  toDos,
  visibilityFilter
})
export const store = createStore(toDoApp)
store.subscribe(render)
render()

registerServiceWorker()
