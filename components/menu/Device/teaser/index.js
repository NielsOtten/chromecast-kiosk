import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const DeviceTeaser = ({ title, image }) => (
  <Card>
    <CardMedia
      image={image}
      title={title}
    />
    <CardContent>
      <Typography variant='headline' component='h2'>
        {title}
      </Typography>
    </CardContent>
  </Card>
);

DeviceTeaser.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,

};
DeviceTeaser.defaultProps = {
  image: '/defaultimage.jpg',
  title: 'Unnamed Device',
};

export default DeviceTeaser;
