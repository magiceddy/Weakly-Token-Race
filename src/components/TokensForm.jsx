import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class TokensForm extends Component {
  constructor(props, context) {
    super(props);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   nextProps
  // }

  handleChange = token => event =>
    this.setState({ [token]: event.target.checked });

  render() {
    const { tokens } = this.props;

    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Select Token to Bet</FormLabel>
        <FormGroup>
          {
            tokens.map((token, i) =>
              <FormControlLabel key={token + i}
                control={
                  <Checkbox id={token + i} onChange={this.handleChange(token)} />
                }
                label={token}
              />
            )
          }
        </FormGroup>
      </FormControl>
    );
  }
}

TokensForm.propTypes = {
  tokens: PropTypes.array
}

TokensForm.defaultProps = {
  tokens: []
}

export default TokensForm;
