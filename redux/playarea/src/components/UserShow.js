import React from 'react'
import { connect } from 'react-redux'
function UserShow(props) {
  return (
    <div>
      <h1>{props.user.name}</h1>
    </div>
  )
}
const mapStateToProps = (state, props) => {
  return {
    user: state.users.find(user => user.id === Number(props.match.params.id))
  }
}
export default connect(mapStateToProps)(UserShow)