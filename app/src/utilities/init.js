import { getCustomBoolean, resetAllDropdowns } from './helper';
import { zero } from '../assets/data/basedata';
import { labels } from '../assets/data/labels';

export const getSessionStorage = function () {
  let data = {};

  // if session storage not set, set new one
  if (!sessionStorage.getItem('bv_project')) {
    const selectedBaseFunctions = resetAllDropdowns();
    const custom = getCustomBoolean();
    data = { selectedBaseFunctions, arraySize: 64, realspatial: zero[64], imagspatial: zero[64], realspectral: zero[64], imagspectral: zero[64], custom };
  } else {
    // get current session storage
    data = JSON.parse(sessionStorage.getItem('bv_project'));
  }
  return data;
};

// set appData and UserData to state
export const initialize = function () {
  // *1. Init App Data
  const appData = { labels: labels };

  // *2. Init User Data
  const userData = getSessionStorage();

  this.setState({
    appData,
    userData,
  });
};
