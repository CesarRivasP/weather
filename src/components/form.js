import React, { Component } from 'react';
import PropTypes from 'prop-types';

const countrys = [
  { id: 'AR', name: 'Argentina' },
  { id: 'CO', name: 'Colombia' },
  { id: 'CR', name: 'Costa Rica' },
  { id: 'ES', name: 'España' },
  { id: 'MX', name: 'Mexico' },
  { id: 'PE', name: 'Peru' },
  { id: 'US', name: 'Estados Unidos' },
  { id: 'VE', name: 'Venezuela' }
]

class Form extends Component {


  render(){
    return(
      <div className="card mt-5 ml-5 mr-5 p-4">
        <form >
          <div className="form-group row d-flex justify-content-center align-items-center mb-0">
            <label className="col-sm-4 col-lg-1 col-form-label pr-0" htmlFor="city">Ciudad</label>
            <div className="col-sm-8 col-lg-2">
              <input type="email" className="form-control" id="city" placeholder="Caracas" />
            </div>
            <label className="col-sm-4 col-lg-1 col-form-label pr-0" htmlFor="country">Pais</label>
            <div className="col-sm-8 col-lg-2">
              <select className="form-control" id="country">
                {
                  countrys.map((country) => (
                      <option key={country.id} value={country.id}>{country.name}</option>
                    )
                  )
                }
             </select>
            </div>
            <button
              type="submit"
              className="btn col-sm-4 col-lg-1 mr-3 ml-5"
              style={{ color: 'white', backgroundColor: '#218c74'}}>
              Buscar
            </button>
          </div>
        </form>
      </div>
    )
  }
}

// Form.propTypes = {
//
// };


export default Form;
