import expect from 'expect'
import { toDos } from './toDoReducer'

it('adds a todo', () => {
  const stateBefore = [ ]
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  }
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    }
  ]
  expect(toDos( stateBefore, action )).toEqual( stateAfter )
})

it('toggles whether a todo is completed', () => {
  const stateBefore = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false,
    }, {
      id: 1,
      text: 'Go shopping',
      completed: false,
    }
  ]
  const action = {
    type: 'TOGGLE_TODO',
    id: 1,
  }
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false,
    }, {
      id: 1,
      text: 'Go shopping',
      completed: true,
    }
  ]
  expect(toDos( stateBefore, action )).toEqual( stateAfter )
})
