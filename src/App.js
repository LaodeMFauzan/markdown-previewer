import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'

let marked = require("marked");

class App extends Component {

  state = {
    markdown : ""
  }

  updateMarkdown = (markdown) => {
    this.setState({markdown});
  }

  render() {
    let{markdown} = this.state; 

    console.log(markdown);
    return (
      <div className="App container">
      <div>
        <FormGroup controlId="formControlTextarea">
          <ControlLabel>Markdown Input</ControlLabel>
          <FormControl componentClass="textarea" placeholder="Enter Text" value={markdown} onChange={(event) => this.updateMarkdown(event.target.value)}></FormControl>
        </FormGroup>
      </div>

      <div>
        <h1>Markdown Ouput</h1>
        <div dangerouslySetInnerHTML = {{__html: marked(markdown)}}>

        </div>
      </div>
      </div>
    );
  }
}

export default App;
