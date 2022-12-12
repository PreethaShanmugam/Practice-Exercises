import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class Propsvalidity extends Component {
  render() {
    return (
        <h1>Hello,{this.props.name} -{this.props.id}.props</h1>
    );
  }
}
Greeting.PropTypes={
    name:PropTypes.string,
    id:PropTypes.number.isRequired,
}
Greeting.defaultProps={
    name:'preetha'
};

