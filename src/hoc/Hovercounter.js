import React, { Component } from 'react'
import EnComponent from './Hoc'

 class HoverCounter extends Component {
  render() {
    const {count,inc}=this.props
    return (
      <div>
      {this.props.name}
      <h1 onMouseEnter={this.inc}>Hover{this.state.count}</h1>
      </div>
    )
  }
}
export default EnComponent(HoverCounter);
