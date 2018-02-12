import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography } from 'material-ui';

const AppBarComponent = ({ title }) => (
  <AppBar position='static'>
    <Toolbar>
      <Typography type='title' color='inherit'>
        {title}
      </Typography>
    </Toolbar>
  </AppBar>
);

AppBarComponent.propTypes = {
  title: PropTypes.string,
};
AppBarComponent.defaultProps = {
  title: 'Chromecast kiosk',
};

export default AppBarComponent;
