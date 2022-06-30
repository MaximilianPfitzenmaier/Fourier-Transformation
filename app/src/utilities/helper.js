import { zero } from '../assets/data/basedata';

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

// Set current Array values to SessionStorage
export const setSessionStorage = function () {
  if (!sessionStorage.getItem('bv_project')) {
    sessionStorage.setItem('bv_project', JSON.stringify(this.state.userData));
  } else {
    sessionStorage.removeItem('bv_project');
    sessionStorage.setItem('bv_project', JSON.stringify(this.state.userData));
  }
};

// Set current Array values to SessionStorage
export const handleArraySizeChange = function (event) {
  // get selected value
  const size = Number(event.target.value);

  // get state
  const userData = JSON.parse(JSON.stringify(this.state.userData));
  const custom = getCustomBoolean();
  // build new arraysize and redraw all canvas
  const selectedBaseFunctions = resetAllDropdowns();
  const data = { custom, selectedBaseFunctions, arraySize: size, realspatial: zero[size], imagspatial: zero[size], realspectral: zero[size], imagspectral: zero[size] };

  // set new array size
  this.setState({
    userData: {
      ...userData,
      ...data,
    },
  });
};

// reset all dropdowns to zero
export const resetAllDropdowns = function () {
  const selectedBaseFunctions = {
    realspatial: JSON.stringify(zero),
    realspectral: JSON.stringify(zero),
    imagspatial: JSON.stringify(zero),
    imagspectral: JSON.stringify(zero),
  };

  return selectedBaseFunctions;
};

// reset all dropdowns to zero
export const getCustomBoolean = function () {
  const custom = {
    realspatial: false,
    realspectral: false,
    imagspatial: false,
    imagspectral: false,
  };

  return custom;
};

export const handleResetAll = function () {
  // get state
  const userData = JSON.parse(JSON.stringify(this.state.userData));

  // get current ArraySize
  const size = userData.arraySize;

  // reset all dropdowns
  const selectedBaseFunctions = resetAllDropdowns();

  // reset custom
  const custom = getCustomBoolean();

  const data = { custom, selectedBaseFunctions, arraySize: size, realspatial: zero[size], imagspatial: zero[size], realspectral: zero[size], imagspectral: zero[size] };

  // set new array size
  this.setState({
    userData: {
      ...userData,
      ...data,
    },
  });
};
