import React, { Component } from 'react';
import logo from './logo.svg';
import Wrapper from "./Wrapper";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Wrapper>
          <p>BLACK on mobile, GREEN on desktop</p>
      </Wrapper>
      <Wrapper isAwesome>
          <p>BLUE on mobile, PINK on desktop</p>
      </Wrapper>
      </div>
    );
  }
}

export default App;
