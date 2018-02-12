import NodeCastor from 'nodecastor';
import Device from '../models/device';

const CAST_APP_ID = 'EA81AB3C';

class Castor {
  init() {
    this.scan();
  }

  /**
   * Scan for chromecasts.
   */
  scan() {
    NodeCastor
      .scan()
      .on('online', async (device) => {
        console.info('[CK] New device found: %s', device.address);

        // Add device to mongodb if it doesn't exists yet.
        if(!await this.deviceExists(device)) {
          await this.addDevice(device);
        }

        // connect + start watching status.
        this.initDevice(device);
      })
      .on('offline', (device) => {
        console.info('[CK] Device offline: %s', device.address);
      })
      .start();
  }

  /**
   * Check if the device exists in mongoDB with a given device.
   * @param id number
   * @return {Query|void}
   */
  deviceExists({ id }) {
    return Device.findOne({ _id: id });
  }

  /**
   * Add device to mongoDB.
   * @param id number
   * @return {Promise}
   */
  addDevice({ id }) {
    console.info('[CK] Adding device: ', id);
    return new Device({ _id: id }).save();
  }

  /**
   * Connect to device and check if ready for takeover.
   * Will takeover when status is backdrop.
   * @param device
   */
  initDevice(device) {
    try {
      device
        .on('connect', () => {
          console.info('[CK] Connect to: %s', device.address);
        })
        .on('status', (status) => {
          if(status.applications) {
            const deviceStatus = status.applications[0].displayName;
            this.checkTakeover(device);
            console.info('[CK] The device: %s is currently in %s', device.address, deviceStatus);
          }
        });
    } catch(exception) {
      console.error('[CK] Error checking for connection: %s', exception);
    }
  }

  /**
   * Check if status is Backdrop.
   * @param device
   */
  checkTakeover(device) {
    try {
      device.status((error, status) => {
        if(error) {
          console.warn('[CK] Cant get device status of ', device.address, ':', error);
          return;
        }

        if(status.applications && status.applications[0].displayName == 'Backdrop') {
          this.takeOver(device);
        }
      });
    } catch(error) {
      console.info('[CK] Error taking over:', error);
    }
  }

  /**
   * Takeover device with the specified app id.s
   * @param device
   */
  takeOver(device) {
    try {
      console.info('[CK] Taking over device ', device.address);
      device.application(CAST_APP_ID, (error, app) => {
        if(error) {
          console.error('[CK] Can\'t create application:', error);
          return;
        }
        app.run();
      });
    } catch(error) {
      console.error('[CK] Error taking over device:', error);
    }
  }
}

const singleton = new Castor();
export default singleton;
