import React, {Component} from 'react';
import Header from './components/header';
import Form from './components/form';
import Error from './components/error';

class App extends Component {
  state = {
    error: false
  }

  queryData = (response) => {

    if(response.city === '' || response.country === ''){
      console.log('Hay errores');
      this.setState({ error: true })
    }
    else {
      console.log(response);
      this.setState({ error: false })
    }
  }

  render() {

    const error = this.state.error;

    let result;

    if(error){
      result = <Error message="Ambos campos son obligatorios" />;
    }

    return (
      <div>
        <Header title="Clima"/>
        <Form queryData={this.queryData} />
        { result }
      </div>
    );
  }
}

export default App;
