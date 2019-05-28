import React, {Component} from 'react';
import Header from './components/header';
import Form from './components/form';
import Error from './components/error';

class App extends Component {
  state = {
    error: false,
    query: {},
    result: {}
  }

  componentDidUpdate(){
    this.consultApi()
  }

  consultApi = () => {
    const { city, country } = this.state.query;

    if(!city || !country) return null;

    //leer la url
    const url = `http://localhost:3002/getWeather?city=${city}&country=${country}`;

    // query con fetch api
    fetch(url)
     .then((response) => response.json())
     .then((data) => {
        console.log(data);
        this.setState({
          result: data
        })
     })
     .catch((error) => console.log(error))
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
