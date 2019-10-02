const todoInitialState = []
const todoReducer = (state = todoInitialState, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return [...state, action.payload]
    }
    case 'REMOVE_TODO': {
      return state.filter((task) => task.id !== action.payload)
    }
    default: {
      return [...state]
    }
  }
}

export default todoReducer