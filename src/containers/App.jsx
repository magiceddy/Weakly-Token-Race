import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCoinbase, getTokenList } from '../redux/selectors';
import { initApp } from '../redux/actions';
import { TokensForm } from '../components';

class App extends Component {
  componentDidMount() {
    const { coinbase, initApp } = this.props;

    if (coinbase) {
      initApp('0x86f7aa79744de79dab78eb2795cf26bed884640f');
    }
  }

  render() {
    const { tokenList } = this.props;

    if (tokenList.length > 0) {
      return <TokensForm tokens={tokenList}></TokensForm>
    } else {
      return <div>{`Your address doesn't have tokens`}</div>
    }
  }
}

App.propTypes = {
  coinbase: PropTypes.string.isRequired,
  initApp: PropTypes.func.isRequired,
  tokenList: PropTypes.array.isRequired
}

App.defaultProps = {
  coinbase: ''
}

export default connect(
  state => ({
    coinbase: getCoinbase(state),
    tokenList: getTokenList(state)
  }),
  {
    initApp
  }
)(App);
