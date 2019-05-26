import React, { Component } from 'react';
import Header from './components/header';
import Form from './components/form';

class App extends Component {
  render(){
    return (
      <div>
        <Header title="Clima" />
        <Form />
      </div>
    );
  }
}

export default App;
