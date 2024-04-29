// class component props access
import React, { Component } from 'react'

 class ClassProps extends Component {
  render() {
    return (
      <>
      <h4>Class Props</h4>
      <h1>I am Using {this.props.mobile} phone </h1>
      </>
    )
  }
}
export default ClassProps
