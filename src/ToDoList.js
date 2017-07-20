import './ToDoList.css'
import React, { Component } from 'react'
import { store } from './'
import { FilterOption } from './FilterOption'

const getVisibleTodos = (toDos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return toDos

    case 'SHOW_COMPLETE':
      return toDos.filter(t => t.completed)

    case 'SHOW_INCOMPLETE':
      return toDos.filter(t => !t.completed)
  }
}

class ToDoList extends Component {
  render() {
    const visibleToDos = getVisibleTodos(this.props.toDos, this.props.visibilityFilter)
    const filterOptions = [{type: 'SHOW_ALL', text: 'All'}, {type: 'SHOW_COMPLETE', text: 'Completed'}, {type: 'SHOW_INCOMPLETE', text: 'Incomplete'}]
    return (
      <div>
        <ul>
          { visibleToDos && visibleToDos.map((toDo, i) => (
            <li
              key={toDo.id}
              onClick={ () => {
                store.dispatch({
                  type: 'TOGGLE_TODO',
                  id: toDo.id
                })
              }}
              children={ toDo.text }
              className={ toDo.completed ? 'completed' : ''}
            />
          )) }
        </ul>
        <p>
          Show:
          { filterOptions.map((option, i) => (
            <FilterOption
              key={i}
              filter={option.type}
              currentFilter={this.props.visibilityFilter}
              children={option.text}
            />
          ))}
        </p>
      </div>
    )
  }
}

export default ToDoList
