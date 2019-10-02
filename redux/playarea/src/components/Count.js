import React from 'react'
import { connect } from 'react-redux'
import Btn from './Btn';
function Count(props) {
  console.log(props)
  return (
    <div>
      <h1>The count is {props.count}</h1>
      <Btn />
    </div>
  )
}

// HOC -a component  that takes another component as argument or returns a component

// returned component from a HOC is known as a wrapped component

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}


export default connect(mapStateToProps)(Count)