// data
import { zero } from '../assets/data/basedata';
import { labels } from '../assets/data/labels';

export const getSessionStorage = function () {
  let data = {};
  if (!sessionStorage.getItem('bv_project')) {
    const selectedBaseFunctions = {
      realspatial: 'zero',
      realspectral: 'zero',
      imagspatial: 'zero',
      imagspectral: 'zero',
    };

    data = { selectedBaseFunctions, arraySize: 64, realspatial: zero[64], imagspatial: zero[64], realspectral: zero[64], imagspectral: zero[64] };
  } else {
    data = JSON.parse(sessionStorage.getItem('bv_project'));
  }
  return data;
};

export const initialize = function () {
  // *1. Init User Data
  const userData = getSessionStorage();
  const appData = { labels: labels };
  this.setState({
    appData,
    userData,
  });
};
