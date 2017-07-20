import React, { Component } from 'react'
import { store } from './'
import AddToDo from './AddToDo'
import ToDoList from './ToDoList'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddToDo placeholder="What do you need to do?"/>
        <ToDoList {...store.getState()}/>
      </div>
    );
  }
}

export default App
