import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import CalculatorButton from './CalculatorButton.js';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
       num1: '',
       num2: '',
       result: ''
   
    };
  }
  
 getNum1  = (event) => {
 this.setState({ num1: event.target.value });
 };

 getNum2   = (event) => {
  this.setState({ num2: event.target.value })
 };


addition = () => {
this.setState({ result: parseInt(this.state.num1) + parseInt(this.state.num2) });
};
subtraction = () => {
  this.setState({ result: parseInt(this.state.num1) - parseInt(this.state.num2) });
};
multiplication = () => {
  this.setState({ result: parseInt(this.state.num1) * parseInt(this.state.num2) });
};
division = () => {
  this.setState({ result: parseInt(this.state.num1) / parseInt(this.state.num2) });
};

render() {
  //let { value } = this.state;
  return (
    <>
   
    <div class="col-md-4  mt-4 ml-md-5">
    <h2>Operations on Two Numbers</h2>
      Number 1
        <Input  type="text" value={this.state.num1} onChange={ this.getNum1 }></Input>
        Number 2
        <Input  type="text" value={this.state.num2} onChange={ this.getNum2 }></Input>
        Result:  <Input  type="text" value={this.state.result} ></Input> 
       
    </div>   
    <div class="col-md-4 mt-3 ml-md-5">
    <CalculatorButton  color="primary ml-md-3"  onClick={this.addition} buttonText="Addition"/>
    <CalculatorButton  color="secondary ml-md-3"  onClick={this.subtraction} buttonText="Subtract" />
    <CalculatorButton  color="success ml-md-3"  onClick={this.multiplication} buttonText="Multiply" />
    <CalculatorButton  color="warning ml-md-3"  onClick={this.division} buttonText="Division" />  
</div>   
</>
  );
}

}