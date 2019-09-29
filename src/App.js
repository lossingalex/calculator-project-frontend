import React from 'react';
import logo from './logo.svg';
import './App.css';
import Screen from './components/screen';
import Button from './components/button';

// create a class which extends react component
class App extends React.Component {
  constructor() {
    super();
    // set our default state
    this.state = {
      question: '',
      answer: ''
    }
    // Bind our handleClick method (sets 'this' explicitly to refer to this componenent)
    // We did this because 'this' would refer to the source of the click events
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="title">
            <h1>Welcome to the Calculator Project</h1>
          </div>
          <Screen question={this.state.question} answer={this.state.answer}/>
          <div className="button-row">
            <Button label={'1'} handleClick={this.handleClick} type='input' />
            <Button label={'2'} handleClick={this.handleClick} type='input' />
            <Button label={'3'} handleClick={this.handleClick} type='input' />
            <Button label={'4'} handleClick={this.handleClick} type='input' />
            <Button label={'-'} handleClick={this.handleClick} type='action' />
            <Button label={'+'} handleClick={this.handleClick} type='action' />
          </div>
          <div className="button-row">
            <Button label={'5'} handleClick={this.handleClick} type='input' />
            <Button label={'6'} handleClick={this.handleClick} type='input' />
            <Button label={'7'} handleClick={this.handleClick} type='input' />
            <Button label={'8'} handleClick={this.handleClick} type='input' />
            <Button label={'*'} handleClick={this.handleClick} type='action' />
            <Button label={'/'} handleClick={this.handleClick} type='action' />
          </div>
          <div className="button-row">
            <Button label={'9'} handleClick={this.handleClick} type='input' />
            <Button label={'.'} handleClick={this.handleClick} type='input' />
            <Button label={'0'} handleClick={this.handleClick} type='input' />
            <Button label={'Cls'} handleClick={this.handleClick} type='action' />
            <Button label={'='} handleClick={this.handleClick} type='action' />
          </div>
        </header>
      </div>
    );
  }
  // our method to handle all click events from our buttons
  handleClick(event){
    const value = event.target.value; // get the value from the target element (button)
    switch (value) {
      case '=': { 
        // if it's an equal sign, use the eval module to evaluate the question
        // convert the answer (in number) to String
        const answer = eval(this.state.question).toString();
        // update answer in our state.
        this.setState({ answer });
        break;
      }
      case 'Cls': {
        // if it's the Cls sign, just clean our question and answer in the state
        this.setState({ question: '', answer: '' });
        break;
      }
      default: {
        // for every other commmand, update the answer in the state
        this.setState({ question: this.state.question += value})
        break;
      }
    }
  }
}

export default App;
