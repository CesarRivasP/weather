import React, {Component} from 'react';
import PropTypes from 'prop-types';

const countrys = [
  {
    id: 'AR',
    name: 'Argentina'
  }, {
    id: 'CO',
    name: 'Colombia'
  }, {
    id: 'CR',
    name: 'Costa Rica'
  }, {
    id: 'ES',
    name: 'España'
  }, {
    id: 'MX',
    name: 'Mexico'
  }, {
    id: 'PE',
    name: 'Peru'
  }, {
    id: 'US',
    name: 'Estados Unidos'
  }, {
    id: 'VE',
    name: 'Venezuela'
  }
];

class Form extends Component {

  cityRef = React.createRef()
  countryRef = React.createRef()

  searchWeather = (e) => {
    e.preventDefault();

    // leer los refs
    const response = {
      city: this.cityRef.current.value,
      country: this.countryRef.current.value
    }
    // console.log(response);
    // enviar props
    this.props.queryData(response);
    // resetear el form
  }

  render() {
    return (<div className="card mt-5 ml-5 mr-5 p-4">
      <form onSubmit={this.searchWeather}>
        <div className="form-group row d-flex justify-content-center align-items-center mb-1">
          <label className="col-sm-4 col-lg-1 col-form-label pr-0" htmlFor="city">Ciudad</label>
          <div className="col-sm-8 col-lg-2">
            <input type="text" className="form-control" id="city" style={{border: '0.5px solid #CED4DA'}} placeholder="Caracas" ref={this.cityRef} />
          </div>
          <label className="col-sm-4 col-lg-1 col-form-label pr-0" htmlFor="country">País</label>
          <div className="col-sm-8 col-lg-2">
            <select className="form-control" id="country" ref={this.countryRef}>
              <option value=""></option>
              {countrys.map((country) => (<option key={country.id} value={country.id}>{country.name}</option>))}
            </select>
          </div>
          <button
            type="submit"
            className="btn col-sm-4 col-lg-1 mr-3 ml-5"
            style={{ color: 'white', backgroundColor: '#218c74' }}>
            Buscar
          </button>
        </div>
      </form>
    </div>)
  }
}

// Form.propTypes = {
//
// };

export default Form;
