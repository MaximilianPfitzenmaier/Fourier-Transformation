// data
import { arrZero } from '../assets/data/basedata';
export const getSessionStorage = function () {
  let data = {};
  if (!sessionStorage.getItem('bv_project')) {
    data = { realspatial: arrZero, imagspatial: arrZero, realspectral: arrZero, imagspectral: arrZero };
  } else {
    data = JSON.parse(sessionStorage.getItem('bv_project'));
  }
  return data;
};

export const initialize = async function () {
  // * 1. Init App Data
  const appData = {};

  // * 2. Init User Data
  const userData = await getSessionStorage();

  this.setState({
    appData,
    userData,
  });
};
