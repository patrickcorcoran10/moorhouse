import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Wrapper from './components/Wrapper/Wrapper';
import Parent from './components/Parent/Parent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Wrapper>
              <Parent />
            </Wrapper>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
