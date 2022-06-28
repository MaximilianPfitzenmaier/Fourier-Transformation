// data
import { zero } from '../assets/data/basedata';

export const getSessionStorage = function () {
  let data = {};
  if (!sessionStorage.getItem('bv_project')) {
    data = { realspatial: zero[128], imagspatial: zero[128], realspectral: zero[128], imagspectral: zero[128] };
  } else {
    data = JSON.parse(sessionStorage.getItem('bv_project'));
  }
  return data;
};

export const initialize = function () {
  // *1. Init User Data
  const userData = getSessionStorage();

  this.setState({
    userData,
  });
};
