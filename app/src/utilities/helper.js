import { arrCos, arrKamm, arrOnes, arrPyra, arrSin, arrZero, arrGaus } from '../assets/data/basedata';
import { calculateFFT } from './calculateFFT';

export const slideUp = (target, duration) => {
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.boxSizing = 'border-box';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  ['height', 'paddingTop', 'paddingBottom', 'marginTop', 'marginBottom'].forEach((prop) => {
    target.style[prop] = 0;
  });
  window.setTimeout(() => {
    target.style.display = 'none';
    ['height', 'padding-top', 'padding-bottom', 'margin-top', 'margin-bottom', 'overflow', 'transition-duration', 'transition-property'].forEach((prop) =>
      target.style.removeProperty(prop)
    );
  }, duration);
};

export const slideDown = (target, duration) => {
  target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;
  display === 'none' && (display = 'block');
  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = 'hidden';
  ['height', 'paddingTop', 'paddingBottom', 'marginTop', 'marginBottom'].forEach((prop) => {
    target.style[prop] = 0;
  });
  target.offsetHeight;
  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  ['padding-top', 'padding-bottom', 'margin-top', 'margin-bottom'].forEach((prop) => target.style.removeProperty(prop));
  window.setTimeout(() => {
    ['height', 'overflow', 'transition-duration', 'transition-property'].forEach((prop) => target.style.removeProperty(prop));
  }, duration);
};

export const slideToggle = (target, duration = 500) =>
  window.getComputedStyle(target).display === 'none' ? slideDown(target, duration) : slideUp(target, duration);

/**
 *  @param funcName string for one of the Base functions e.g arrSin, arrCos
 *  @param type string if button is for real or imag part
 */
export const getBaseFunctionFromSpatialToSpectral = function (funcName, type) {
  // get state
  const userData = { ...this.state.userData };
  const button = type;

  // set imag/real to state
  switch (funcName) {
    case 'arrZero':
      button === 'real' ? (userData.realSpatialArray = arrZero) : (userData.imagSpatialArray = arrZero);
      this.setState({
        userData,
      });
      break;

    case 'arrSin':
      button === 'real' ? (userData.realSpatialArray = arrSin) : (userData.imagSpatialArray = arrSin);
      this.setState({
        userData,
      });
      break;

    case 'arrCos':
      button === 'real' ? (userData.realSpatialArray = arrCos) : (userData.imagSpatialArray = arrCos);
      this.setState({
        userData,
      });
      break;

    case 'arrKamm':
      button === 'real' ? (userData.realSpatialArray = arrKamm) : (userData.imagSpatialArray = arrKamm);
      this.setState({
        userData,
      });
      break;

    case 'arrOnes':
      button === 'real' ? (userData.realSpatialArray = arrOnes) : (userData.imagSpatialArray = arrOnes);
      this.setState({
        userData,
      });
      break;

    case 'arrPyra':
      button === 'real' ? (userData.realSpatialArray = arrPyra) : (userData.imagSpatialArray = arrPyra);
      this.setState({
        userData,
      });
      break;

    case 'arrGaus':
      button === 'real' ? (userData.realSpatialArray = arrGaus) : (userData.imagSpatialArray = arrGaus);
      this.setState({
        userData,
      });
      break;

    default:
      break;
  }

  // fire fft from stored arrays in state
  console.log(calculateFFT(userData.realSpatialArray, userData.imagSpatialArray));
};

// Set current Array values to SessionStorage
export const setSessionStorage = function () {
  if (!sessionStorage.getItem('bv_project')) {
    sessionStorage.setItem('bv_project', JSON.stringify(this.state.userData));
  } else {
    sessionStorage.removeItem('bv_project');
    sessionStorage.setItem('bv_project', JSON.stringify(this.state.userData));
  }
};
