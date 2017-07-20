import './FilterOption.css'
import React from 'react'
import { store } from './'

export const FilterOption = ({ filter, children, currentFilter }) => {
  return (
    <a
      href="#"
      onClick={ (e) => {
        e.preventDefault()
        store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter
        })
      }}
      children={ children }
      className={ `FilterOption ${currentFilter === filter ? 'active' : ''}` }
    />
  )
}
