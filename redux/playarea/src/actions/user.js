import axios from 'axios'
export const setUser=(users)=>{
  return {
    type:'SET_USERS',
    payload:users
  }
}

export const startSetUsers=()=>{
  return ((dispatch)=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
      const users=response.data
      dispatch(setUser(users))
    })
  })
}