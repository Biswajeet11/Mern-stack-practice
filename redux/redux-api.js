const { createStore, combineReducers, applyMiddleware } = require('redux')
const thunk = require('redux-thunk')
const axios = require('axios')

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_USERS': {
      return [...action.payload]
    }
    default: {
      return [...state]
    }
  }
}

const configureStore = () => {
  const store = createStore(combineReducers({
    users: usersReducer
  }), applyMiddleware(thunk.default))
  return store
}

const store = configureStore()

console.log(store.getState())

store.subscribe(() => {
  console.log(store.getState())
})

const setUsers = (users) => {
  return {
    type: 'SET_USERS',
    payload: users
  }
}

const startSetUsers = () => {
  return (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        const user = response.data
        dispatch(setUsers(user))
      })
  }
}

store.dispatch(startSetUsers())