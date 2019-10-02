import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import countReducer from '../reducers/countReducer'
import todoReducer from '../reducers/todoReducer'
import userReducer from '../reducers/userReducer'
const configureStore = () => {
  const store = createStore(combineReducers({
    count: countReducer,
    todo: todoReducer,
    users: userReducer,
  }), applyMiddleware(thunk))
  return store
}

export default configureStore
