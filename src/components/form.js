import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  textField: {
   width: 200,
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center'
   ,
   flexDirection: 'column',
 },
 formControl: {
    minWidth: 275,
    padding: '0px 0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

const classes = useStyles();

class Form extends Component {

    state = {
     city: '',
     values: ''
   };

   handleChange = name => event => {
     this.setState({ [name]: event.target.value });
   };


  handleSelectChange = (event) =>  {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render(){
    return(
      <div className="container">
         <Card className={classes.card}>
           <CardContent>
             <form /*onSubmit={}*/ noValidate autoComplete="off">
             <div>
               <TextField
                 id="standard-name"
                 label="Ciudad"
                 className={classes.textField}
                 value={this.state.city}
                 onChange={this.handleChange('city')}
                 margin="normal"
               />
             </div>
             <div>
               <FormControl className={classes.formControl}>
                 <InputLabel htmlFor="age-simple">Age</InputLabel>
                 <Select
                   value={this.state.values}
                   onChange={this.handleSelectChange}
                   inputProps={{
                     name: 'age',
                     id: 'age-simple',
                   }}
                   >
                     <MenuItem value="">
                       <em>None</em>
                     </MenuItem>
                     <MenuItem value={10}>Ten</MenuItem>
                     <MenuItem value={20}>Twenty</MenuItem>
                     <MenuItem value={30}>Thirty</MenuItem>
                   </Select>
                 </FormControl>
             </div>
             </form>
           </CardContent>
         </Card>
      </div>
    )
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default Form;
