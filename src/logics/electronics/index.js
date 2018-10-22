/**
 * Created by Serhiy on 07.10.18.
 */

const ampsToVoltsFromWatts = (amps, watts) => {
  return watts / amps;
};

const ampsToVoltsFromOhms = (amps, ohms) => {
  return ohms * amps;
};

const electronics = {
  ampsToVolts: {
    fromWatts: ampsToVoltsFromWatts,
    fromOhms: ampsToVoltsFromOhms
  }
};

export default electronics;

