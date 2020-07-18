import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class CalculatorButton extends Component {

  render () {
    const { color, buttonText, outline } = this.props;
    return (
    <Button outline={outline}  color={color} onClick={this.props.onClick}>{buttonText}</Button>
    )
  }
}