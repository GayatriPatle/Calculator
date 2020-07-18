import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import './App.css';
import ReactDOM from 'react-dom';
import Center from 'react-center';

class App extends Component {
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
    <Button outline  color="primary ml-md-3"  onClick={this.addition}>Addition</Button>
    <Button outline  color="secondary ml-md-3"  onClick={this.subtraction}>Subtract</Button>
    <Button outline  color="success ml-md-3"  onClick={this.multiplication}>Multiply</Button>
    <Button outline  color="warning ml-md-3"  onClick={this.division}>Division</Button>  
</div>   
</>
  );
}

}
ReactDOM.render(<App />, document.getElementById('root'));
export default App;
