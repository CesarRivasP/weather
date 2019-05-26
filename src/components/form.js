import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Form extends Component {


  render(){
    return(
      <div className="card mt-5">
        <form >
          <div className="form-group row">
            <label className="col-sm-4 col-lg-4 col-form-label">Nombre de Mascota</label>
            <div className="col-sm-8 col-lg-8">
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-lg-4 col-form-label">Nombre del Dueño</label>
            <div className="col-sm-8 col-lg-8">
              <select class="form-control" id="exampleFormControlSelect1">
               <option>1</option>
               <option>2</option>
               <option>3</option>
               <option>4</option>
               <option>5</option>
             </select>
            </div>
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
