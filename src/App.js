import React, {Component} from 'react';
import Header from './components/header';
import Form from './components/form';
import Error from './components/error';

class App extends Component {
  state = {
    error: false,
    query: {}
  }

  componentDidUpdate(){
    this.consultApi()
  }

  consultApi = () => {
    const { city, country } = this.state.query;

    if(!city || !country) return null;

    const appId = '512fe;00c10c48f78d1c866cb80a4f7d';
    let url = `https://samples.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
    // query con fetch api
    
    //leer la url y agregar el api key

    // consular con fect
  }

  queryData = (response) => {

    if(response.city === '' || response.country === ''){
      console.log('Hay errores');
      this.setState({ error: true })
    }
    else {
      console.log(response);
      this.setState({ error: false, query: response })
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
