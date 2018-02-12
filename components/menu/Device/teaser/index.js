import React from 'react';
import PropTypes from 'prop-types';
import { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

// styled
import DeviceCardMedia from './styled/DeviceCardMedia';
import DeviceCard from './styled/DeviceCard';

const DeviceTeaser = ({ title, image }) => (
  <DeviceCard>
    <DeviceCardMedia
      image={image}
      title={title}
    />
    <CardContent>
      <Typography variant='headline' component='h2'>
        {title}
      </Typography>
    </CardContent>
  </DeviceCard>
);

DeviceTeaser.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};
DeviceTeaser.defaultProps = {
  image: '/static/device-placeholder.png',
  title: 'Unnamed Device',
};

export default DeviceTeaser;
