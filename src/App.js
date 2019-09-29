import React from 'react';
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
            <Button label={'sin'} handleClick={this.handleClick} type='input' />
            <Button label={'cos'} handleClick={this.handleClick} type='input' />
            <Button label={'tan'} handleClick={this.handleClick} type='input' />
            <Button label={'log'} handleClick={this.handleClick} type='input' />
            <Button label={'sqrt'} handleClick={this.handleClick} type='input' />
            <Button label={'^'} handleClick={this.handleClick} type='input' />
          </div>
          <div className="button-row">
            <Button label={'('} handleClick={this.handleClick} type='input' />
            <Button label={')'} handleClick={this.handleClick} type='input' />
            <Button label={'%'} handleClick={this.handleClick} type='input' />
            <Button label={'Cls'} handleClick={this.handleClick} type='action' />
          </div>
          <div className="button-row">
            <Button label={'7'} handleClick={this.handleClick} type='input' />
            <Button label={'8'} handleClick={this.handleClick} type='input' />
            <Button label={'9'} handleClick={this.handleClick} type='input' />
            <Button label={'/'} handleClick={this.handleClick} type='action' />
          </div>
          <div className="button-row">
            <Button label={'4'} handleClick={this.handleClick} type='input' />
            <Button label={'5'} handleClick={this.handleClick} type='input' />
            <Button label={'6'} handleClick={this.handleClick} type='input' />
            <Button label={'*'} handleClick={this.handleClick} type='action' />
          </div>
          <div className="button-row">
            <Button label={'1'} handleClick={this.handleClick} type='input' />
            <Button label={'2'} handleClick={this.handleClick} type='input' />
            <Button label={'3'} handleClick={this.handleClick} type='input' />
            <Button label={'-'} handleClick={this.handleClick} type='action' />
          </div>
          <div className="button-row">
            <Button label={'0'} handleClick={this.handleClick} type='input' />
            <Button label={'.'} handleClick={this.handleClick} type='input' />
            <Button label={'='} handleClick={this.handleClick} type='equal' />
            <Button label={'+'} handleClick={this.handleClick} type='action' />
          </div>
        </header>
      </div>
    );
  }
  // our method to handle all click events from our buttons
  handleClick(event){
    const value = event.target.value; // get the value from the target element (button)
    const question = this.state.question;
    switch (value) {
      case '=': {
        fetch('https://vqe3fh8pt7.execute-api.ap-southeast-1.amazonaws.com/dev/calculate',{
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({
            formula: question
          })
        })
        .then(res => res.json())
        .then((data) => {
          // update answer in our state.
          console.log("==== Result", data);
          if (data.result) {
            this.setState({ answer:data.result });
          } else {
            this.setState({ answer:"(" + data.code + "): " + data.detail});
          }
        })
        .catch((data) => {
          // update answer in our state.
          console.log("==== ERROR", data);
        })
        break;
      }
      case 'Cls': {
        // if it's the Cls sign, just clean our question and answer in the state
        this.setState({ question: '', answer: '' });
        break;
      }
      case 'sqrt':
      case 'log':
      case 'sin':
      case 'tan':
      case 'cos': {
        // if it's the Cls sign, just clean our question and answer in the state
        // eslint-disable-next-line
        this.setState({ question: question + value + "("})
        break;
      }
      default: {
        // for every other commmand, update the answer in the state
        // eslint-disable-next-line
        this.setState({ question: question + value})
        break;
      }
    }
  }
}

export default App;
