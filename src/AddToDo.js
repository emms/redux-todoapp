import React, { Component } from 'react'
import { store } from './'

let nextTodoId = 0

class AddToDo extends Component {
  render() {
    return (
      <div className="AddToDo">
        <input
          className="ToDoInput"
          type="text" name="ToDoInput"
          placeholder={ this.props.placeholder }
          ref={ dom => this.inputRef = dom }
        />
        <button
          children="Add"
          onClick={ () => {
            store.dispatch({
              type: 'ADD_TODO',
              text: this.inputRef.value,
              id: nextTodoId++
            })
            this.inputRef.value = ''
          }}
        />
      </div>
    )
  }
}

export default AddToDo
