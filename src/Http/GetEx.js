import { valueToPercent } from '@mui/base'
import React, { Component } from 'react'

export default class GetEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        posts:[]
      }
    }
    componentDidMount(){
        axios.get("")
        .then((res)=>{
            this.setState({posts:res.data})
        })
    }
  render() {
    return (
      <div>GetEx
      <p>{this.state.posts.map
        ((post) =><ul key={posts.id}<li>{posts.title}</li></ul>)}</p>
      </div>
    )
  }
}
