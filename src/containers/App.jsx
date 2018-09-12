import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCoinbase } from '../redux/selectors';

class App extends Component {
  constructor (props, context) {
    super(props);
  }

  render () {
    return (<div>Hello From Weekly Token Race</div>)
  }
}

export default connect(
  state => ({
    coinbase: getCoinbase(state)
  }), {}
)(App);
