import React from 'react';
import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  headerBar: {
    backgroundColor: '#1e3799',
    color: 'white',
    height: 55,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
});


const Header = (props) => {
  const { title } = props;
  const classes = useStyles();
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
  title: PropTypes.string.isRequired
};


// export default withStyles(styles)(Header);
export default Header;
