import React from 'react';

import Device from '../Device/teaser';

// styled
import DeviceOverview from './styled/DeviceOverview';

const DeviceView = () => (
  <DeviceOverview>
    <Device />
    <Device />
    <Device />
    <Device />
    <Device />
    <Device />
    <Device />
    <Device />
    <Device />
  </DeviceOverview>
);

DeviceView.propTypes = {};
DeviceView.defaultProps = {};

export default DeviceView;
