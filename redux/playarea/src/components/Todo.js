import React from 'react'
import { addTodo, removeTodo } from '../actions/todo'

import { connect } from 'react-redux'

function Todo(props) {
  return (
    <div>
      <h2>Listing tasks -{props.todo.length}</h2>
      <ul>
        {props.todo.map((todo) => {
          return <li key={todo.id}>{todo.title}
            <button onClick={() => {
              props.dispatch(removeTodo(todo.id))
            }}> remove </button>
          </li>
        })}
      </ul>
      <button onClick={() => {
        const title = window.prompt('Enter todo')
        const todo = {
          id: Number(new Date()),
          title,
        }
        if (todo.title === '') {
          window.alert('Enter todo title')
        }
        else {
          props.dispatch(addTodo(todo))
        }
      }} >
        Add Todo
      </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    todo: state.todo
  }
}

export default connect(mapStateToProps)(Todo)