const { createStore, combineReducers } = require('redux')

//reducer is a function  is used to update a property within the state
const countReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return state + 1
    }
    case 'DECREMENT': {
      return state - 1
    }
    case 'RESET': {
      return 0
    }
    case 'INCREMENTBY': {
      // state += action.payload
      return state + action.payload
    }
    default: {
      return state
    }
  }
}

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER': {
      return Object.assign({}, action.payload)
      // {...action.payload}
    }
    case 'REMOVE_USER': {
      return {}
    }
    default: {
      return Object.assign({}, state)
    }
  }
}

const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_STUDENT': {
      return state.concat(action.payload) // [...state,...action.payload]
    }
    case 'REMOVE_STUDENT': {
      return state.filter((student) => student.id != action.payload)
    }
    default: {
      return [].concat(state) //[...state]
    }
  }
}
const store = createStore(combineReducers({
  count: countReducer,
  user: userReducer,
  student: studentsReducer
}))

// console.log(store)

store.subscribe(() => {
  console.log(store.getState())
})

const increment = () => {
  return {
    type: 'INCREMENT'
  }
}
const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

const reset = () => {
  return {
    type: 'RESET'
  }
}

const incrementBy = (value) => {
  return {
    type: 'INCREMENTBY',
    payload: value
  }
}

const setUser = (value) => {
  return {
    type: 'SET_USER',
    payload: value
  }
}
const removeUser = () => {
  return {
    type: 'REMOVE_USER'
  }
}

const addStudent = (value) => {
  return {
    type: 'ADD_STUDENT',
    payload: value
  }
}

const removeStudent = (id) => {
  return {
    type: 'REMOVE_STUDENT',
    payload: id
  }
}

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())

store.dispatch(decrement())
store.dispatch(reset())
store.dispatch(incrementBy(6))
store.dispatch(setUser({ id: 1, name: 'biswajeet', email: 'biswajeet@gmail.com' }))

store.dispatch(addStudent([{ id: 1, name: 'biswajeet' }]))
store.dispatch(addStudent([{ id: 2, name: 'ravi' }]))
store.dispatch(removeStudent(2))