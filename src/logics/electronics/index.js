/**
 * Created by Serhiy on 07.10.18.
 */

const ampsToVoltsFromWatts = (amps, watts) => {
  return watts / amps;
};

const ampsToVoltsFromOhms = (amps, ohms) => {
  return ohms * amps;
};

const ampsFromWattAndCurrent = (watts, volts) => watts / volts;

const ampsToVolts = {
  fromWatts: ampsToVoltsFromWatts,
  fromOhms: ampsToVoltsFromOhms
};

export {
  ampsToVolts,
  ampsFromWattAndCurrent
};

