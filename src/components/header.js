import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const styles = {
  headerBar: {
    backgroundColor: '#1e3799',
    color: 'white',
    height: 55,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
};


const Header = (props) => {
  const { classes, title } = props;
  return (
    <header>
        <AppBar position="static" color="default" className={classes.headerBar}>
          <Toolbar>
            <h1>{ title }</h1>
          </Toolbar>
      </AppBar>
    </header>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};


export default withStyles(styles)(Header);
