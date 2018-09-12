import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCoinbase } from '../redux/selectors';
import { initApp } from '../redux/actions';
import { getTokenList } from '../services/ethPlorer';
import { TokensForm } from '../components';

class App extends Component {
  constructor(props, context) {
    super(props);
  }

  state = {
    tokenList: null
  }

  async componentDidMount() {
    const { coinbase } = this.props;

    if (coinbase) {
      const tokenList = await getTokenList('0x86f7aa79744de79dab78eb2795cf26bed884640f');
      this.setState({ tokenList: tokenList });
    }
  }

  render() {
    const { tokenList } = this.state;

    if (tokenList) {
      return (
        <TokensForm tokens={tokenList}></TokensForm>
      );
    }
    return <div>No Tokens? aja jai jai jai</div>
  }
}

App.propTypes = {
  coinbase: PropTypes.string.isRequired
}

App.defaultProps = {
  coinbase: ''
}

export default connect(
  state => ({
    coinbase: getCoinbase(state)
  }),
  {
    initApp
  }
)(App);
