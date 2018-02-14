import React from 'react';

import Device from '../Device/teaser';

// styled
import DeviceOverview from './styled/DeviceOverview';

const DeviceView = () => (
  <DeviceOverview>
    <Device id={1} />
    <Device id={1} />
    <Device id={1} />
    <Device id={1} />
    <Device id={1} />
    <Device id={1} />
    <Device id={1} />
  </DeviceOverview>
);

DeviceView.propTypes = {};
DeviceView.defaultProps = {};

export default DeviceView;
