import React, { Component } from 'react'
import EnComponent from './Hoc'
class Clickcounter extends Component{
  render() {
    return (
      <div>
      {this.props.name}
      <button onClick={this.inc}>Click{this.state.count}</button>
      </div>
    )
  }
  inc=()=>{this.setState({count:this.state.count+1})}
}
export default EnComponent(Clickcounter);
