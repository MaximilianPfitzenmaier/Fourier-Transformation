import { calculateFFT, calculateFFTCentered } from './calculateFFT';

/**
 *  @param canvasID String for the ID and the REF
 *  @return canvas React element with ref as ID
 */
export const createCanvas = function (canvasID, refName) {
  return <canvas onContextMenu={(e) => (e.button === 2 ? e.preventDefault() : null)} id={canvasID} ref={refName} width={960} height={350} />;
};

/**
 *  @param type which canvas (realspectral, realspatial ...)
 *  @param userData the current userData
 *  @return object for the state with userData, and calculated FFT
 */
export const callFFTCustom = function (type, userData, index) {
  // normalize all arrays
  if (type == 'realspectral') userData.realspectral[index] = userData.realspectral[index] * ((350 / 2) * 0.65);
  if (type == 'realspatial') userData.realspatial[index] = userData.realspatial[index] * ((350 / 2) * 0.65);
  if (type == 'imagspectral') userData.imagspectral[index] = userData.imagspectral[index] * ((350 / 2) * 0.65);
  if (type == 'imagspatial') userData.imagspatial[index] = userData.imagspatial[index] * ((350 / 2) * 0.65);

  if (type == 'realspectral' || type == 'imagspectral') {
    if (userData['centeredZero']) {
      // fire INVERSE fft from stored arrays in state
      const [[imagspatial, realspatial]] = calculateFFTCentered(userData.imagspectral, userData.realspectral);
      // set dropdown to custom
      userData['selectedBaseFunctions']['realspatial'] = '0';
      userData['selectedBaseFunctions']['imagspatial'] = '0';
      return { ...userData, imagspatial, realspatial };
    } else {
      const [[imagspatial, realspatial]] = calculateFFT(userData.imagspectral, userData.realspectral);
      // set dropdown to custom
      userData['selectedBaseFunctions']['realspatial'] = '0';
      userData['selectedBaseFunctions']['imagspatial'] = '0';
      return { ...userData, imagspatial, realspatial };
    }
  } else {
    if (userData['centeredZero']) {
      // fire fft from stored arrays in state
      const [[realspectral, imagspectral]] = calculateFFTCentered(userData.realspatial, userData.imagspatial);

      // set dropdown to custom
      userData['selectedBaseFunctions']['realspectral'] = '0';
      userData['selectedBaseFunctions']['imagspectral'] = '0';
      return { ...userData, realspectral, imagspectral };
    } else {
      // fire fft from stored arrays in state
      const [[realspectral, imagspectral]] = calculateFFT(userData.realspatial, userData.imagspatial);

      // set dropdown to custom
      userData['selectedBaseFunctions']['realspectral'] = '0';
      userData['selectedBaseFunctions']['imagspectral'] = '0';
      return { ...userData, realspectral, imagspectral };
    }
  }
};

/**
 *  @param type which canvas (realspectral, realspatial ...)
 *  @param userData the current userData
 *  @return object for the state with userData, and calculated FFT
 */
export const callFFT = function (type, userData) {
  // normalize all arrays

  for (let i = 0; i < userData.realspectral.length; i++) {
    if (type == 'realspectral') userData.realspectral[i] = userData.realspectral[i] * ((350 / 2) * 0.65);
    if (type == 'realspatial') userData.realspatial[i] = userData.realspatial[i] * ((350 / 2) * 0.65);
    if (type == 'imagspectral') userData.imagspectral[i] = userData.imagspectral[i] * ((350 / 2) * 0.65);
    if (type == 'imagspatial') userData.imagspatial[i] = userData.imagspatial[i] * ((350 / 2) * 0.65);
  }

  if (type == 'realspectral' || type == 'imagspectral') {
    if (userData['centeredZero']) {
      // fire INVERSE fft from stored arrays in state
      const [[imagspatial, realspatial]] = calculateFFTCentered(userData.imagspectral, userData.realspectral);

      // set dropdown to custom
      userData['selectedBaseFunctions']['realspatial'] = '0';
      userData['selectedBaseFunctions']['imagspatial'] = '0';
      return { ...userData, imagspatial, realspatial };
    } else {
      // fire INVERSE fft from stored arrays in state
      const [[imagspatial, realspatial]] = calculateFFT(userData.imagspectral, userData.realspectral);

      // set dropdown to custom
      userData['selectedBaseFunctions']['realspatial'] = '0';
      userData['selectedBaseFunctions']['imagspatial'] = '0';
      return { ...userData, imagspatial, realspatial };
    }
  } else {
    if (userData['centeredZero']) {
      // fire fft from stored arrays in state
      const [[realspectral, imagspectral]] = calculateFFTCentered(userData.realspatial, userData.imagspatial);

      // set dropdown to custom
      userData['selectedBaseFunctions']['realspectral'] = '0';
      userData['selectedBaseFunctions']['imagspectral'] = '0';
      return { ...userData, realspectral, imagspectral };
    } else {
      // fire fft from stored arrays in state
      const [[realspectral, imagspectral]] = calculateFFT(userData.realspatial, userData.imagspatial);

      // set dropdown to custom
      userData['selectedBaseFunctions']['realspectral'] = '0';
      userData['selectedBaseFunctions']['imagspectral'] = '0';
      return { ...userData, realspectral, imagspectral };
    }
  }
};

/**
 *  @param funcArray Array for one of the Base functions e.g sin, cos
 *  @param type string if button is for real or imag part
 */
export const getBaseFunction = function (funcArray, type, newSelectedBaseFunctions) {
  // get state
  const userData = JSON.parse(JSON.stringify(this.state.userData));

  userData['custom']['realspatial'] = false;
  userData['custom']['imagspatial'] = false;
  userData['custom']['realspectral'] = false;
  userData['custom']['imagspectral'] = false;

  // set userData Array of this canvas to clicked function
  userData[type] = funcArray;

  // set userData selected Basefunction for this canvas
  userData['selectedBaseFunctions'][type] = newSelectedBaseFunctions;

  // call ( inverse ) FFT and set the state
  this.setState({
    userData: callFFT(type, userData),
  });
};

/**
 *  @param canvasID Canvas ID to identify (realspatial, realspectral, imagspatial, imagspectral)
 *  @param arrayFromUserData Array from userData to be drawn
 *  @return void
 */
export const drawFunction = function (canvasID, arrayFromUserData, centeredZero, line) {
  let canvasArray = arrayFromUserData;
  let canvas;
  let ctx;
  if (canvasID.current) {
    canvas = canvasID.current;
    ctx = canvas.getContext('2d');
  } else {
    canvas = canvasID;
    ctx = canvasID.getContext('2d');
  }

  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.restore();

  const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  canvas.width = width / 2 - 20;
  canvas.height = height / 2 - 120;

  ctx.translate(0, canvas.height / 2);
  ctx.beginPath();
  ctx.setLineDash([5, 3]);
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'hsl(176, 72%, 71%)';
  ctx.moveTo(0, 0);
  ctx.lineTo(canvas.width, 0);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'hsl(176, 72%, 71%)';

  if (centeredZero) {
    ctx.moveTo(canvas.width / 2, -canvas.height / 2);
    ctx.lineTo(canvas.width / 2, canvas.height);
  } else {
    ctx.moveTo(0 + canvas.width / (canvasArray.length + 2), -canvas.height / 2);
    ctx.lineTo(0 + canvas.width / (canvasArray.length + 2), canvas.height);
  }

  ctx.stroke();
  ctx.setLineDash([0, 0]);

  let count = 0;
  let yposition = 0;
  let yposition2 = 0;
  canvasArray.unshift(0);
  canvasArray.push(0);

  for (let i = 0; i < canvas.width; i = i + canvas.width / canvasArray.length) {
    yposition = -canvasArray[count]; //* peaks * scale;
    yposition = yposition ? yposition : 0;
    yposition2 = -canvasArray[count + 1]; //* peaks * scale;
    yposition2 = yposition2 ? yposition2 : 0;

    ctx.beginPath();
    ctx.lineWidth = 2;
    var grad = ctx.createLinearGradient(i, 0, i, yposition);
    grad.addColorStop(0, 'hsl(176, 72%, 71%)');
    grad.addColorStop(1, 'hsl(251, 53%, 45%)');
    ctx.strokeStyle = grad;
    ctx.moveTo(i, 0);
    ctx.lineTo(i, yposition);
    ctx.stroke();
    ctx.closePath();

    if (line) {
      // draw line
      ctx.beginPath();
      ctx.strokeStyle = 'hsl(251, 53%, 45%)';
      ctx.moveTo(i, yposition);
      ctx.lineTo(i + canvas.width / canvasArray.length, yposition2);

      ctx.stroke();
    } else {
      // draw circles
      ctx.beginPath();
      ctx.arc(i, yposition, 3, 0, 2 * Math.PI);

      if (count == 0 || count == canvasArray.length || count == canvasArray.length - 1) {
        ctx.fillStyle = 'transparent';
      } else {
        ctx.fillStyle = 'hsl(251, 53%, 45%)';
      }
    }

    ctx.fill();
    ctx.closePath();
    count++;
  }

  canvasArray.shift();
  canvasArray.pop();
};

let isPressed = false;
let rightPressed = false;
let middlePressed = false; // must be assigned
let canvasTarget, firstRight, firstMiddleX, firstMiddleY, nextMiddleX, nextMiddleY;
let control = 1;
/**
 *  @param mousedown event
 * Resets all custom statements to false except this canvas to handle draw scaling and
 * sets this select to custom
 */
export const mouseDown = function (event) {
  const userData = JSON.parse(JSON.stringify(this.state.userData));

  // draw on click
  const canvas = event.target;
  canvasTarget = event.target;
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const size = userData.arraySize + 2;
  let currentIndex = Math.floor(Math.floor(x) / (Math.floor(canvas.width) / size) - 0.5);
  if (event.button === 0) {
    // reset if mouseheel was used before
    firstMiddleX = 0;
    firstMiddleY = 0;
    nextMiddleX = 0;
    nextMiddleY = 0;
    control = 1;
    isPressed = true;

    if (canvasTarget == event.target.closest('canvas') && currentIndex >= 0 && currentIndex < size - 2) {
      const y = event.clientY - rect.top;
      const canvasID = event.target.id;
      const customArray = userData[canvasID];

      if (currentIndex >= 0 && currentIndex < userData.arraySize) {
        customArray[currentIndex] = -(y - canvas.height / 2) / (canvas.height / 2.65);
        userData[canvasID] = customArray;
      }

      // call ( inverse ) FFT and set the state
      this.setState({
        userData: callFFTCustom(canvasTarget.id, userData, currentIndex),
      });
    }
  }

  // Mousewheel
  if (event.button === 1) {
    const y = event.clientY - rect.top; // must be assigned
    const canvasID = event.target.id;
    const customArray = userData[canvasID];
    const xArray = [0, 0];
    const yArray = [0, 0];
    let differenceX, differenceY;

    if (canvasTarget != event.target.closest('canvas')) {
      firstMiddleX = 0;
      firstMiddleY = 0;
      nextMiddleX = 0;
      nextMiddleY = 0;
      control = 1;
    }

    if (control % 2 == 1) {
      firstMiddleX = Math.floor(Math.floor(event.clientX - rect.left) / (Math.floor(canvas.width) / size) - 0.5);
      firstMiddleY = -(event.clientY - rect.top - canvas.height / 2) / (canvas.height / 2.65);

      control = 2;
    } else {
      nextMiddleX = Math.floor(Math.floor(event.clientX - rect.left) / (Math.floor(canvas.width) / size) - 0.5);
      nextMiddleY = -(event.clientY - rect.top - canvas.height / 2) / (canvas.height / 2.65);

      control = 1;
    }
    xArray[0] = firstMiddleX;
    yArray[0] = firstMiddleY;
    xArray[1] = nextMiddleX;
    yArray[1] = nextMiddleY;

    differenceX = Math.min(...xArray) - Math.max(...xArray);
    differenceY = firstMiddleY - nextMiddleY;
    let steps = differenceY / differenceX;
    let stepClone = steps;

    if (currentIndex >= 0 && currentIndex < userData.arraySize && control == 1) {
      if (firstMiddleX < nextMiddleX) {
        for (let i = Math.min(...xArray); i <= Math.max(...xArray); i++) {
          if (firstMiddleY > nextMiddleY) {
            customArray[i] = -Math.min(...yArray) + stepClone;
            stepClone = stepClone + steps;
          } else {
            customArray[i] = Math.min(...yArray) + stepClone;
            stepClone = stepClone + steps;
          }
        }

        userData[canvasID] = customArray;
      } else {
        for (let i = Math.max(...xArray); i >= Math.min(...xArray); i--) {
          if (firstMiddleY > nextMiddleY) {
            customArray[i] = -Math.min(...yArray) + stepClone;
            stepClone = stepClone + steps;
          } else {
            customArray[i] = Math.min(...yArray) + stepClone;
            stepClone = stepClone + steps;
          }
        }

        userData[canvasID] = customArray;
      }
    }

    if (control == 1) {
      // call ( inverse ) FFT and set the state
      this.setState({
        userData: callFFT(canvasTarget.id, userData),
      });
    }
  }

  // Right Click
  if (event.button === 2) {
    // reset if mouseheel was used before
    firstMiddleX = 0;
    firstMiddleY = 0;
    nextMiddleX = 0;
    nextMiddleY = 0;
    control = 1;

    // rechts click alle gleich hoch beim moven wie der erste
    rightPressed = true;
    canvasTarget = event.target;
    firstRight = event.clientY - rect.top;
  }

  // set all custom statemants to false
  userData['custom']['realspatial'] = false;
  userData['custom']['imagspatial'] = false;
  userData['custom']['imagspectral'] = false;
  userData['custom']['realspectral'] = false;
  if (event.target.closest('canvas')) {
    canvasTarget = event.target;
    const canvasid = canvasTarget.id;

    // set this select to custom
    userData['selectedBaseFunctions'][canvasid] = '0';

    // execpt this one must be true
    userData['custom'][canvasid] = true;

    this.setState({
      userData: {
        ...userData,
      },
    });
  }
};

/**
 *  @param mouseup event
 * end of drawing when isPressed is false
 */
export const mouseUp = function () {
  isPressed = false;
  rightPressed = false;
  middlePressed = false;

  const userData = JSON.parse(JSON.stringify(this.state.userData));
  const canvas = event.target;
  const canvasID = event.target.id;
  const customArray = userData[canvasID];
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const size = userData.arraySize + 2;
  let currentIndex = Math.floor(Math.floor(x) / (Math.floor(canvas.width) / size) - 0.5);
  if (canvasTarget == event.target.closest('canvas') && currentIndex >= 0 && currentIndex < size - 2 && !isNaN(currentIndex)) {
    const y = event.clientY - rect.top;
    if (currentIndex >= 0 && currentIndex < userData.arraySize) {
      customArray[currentIndex] = -(y - canvas.height / 2) / (canvas.height / 2.65);
      userData[canvasID] = customArray;
    }
    // call ( inverse ) FFT and set the state
    this.setState({
      userData: callFFTCustom(canvasID, userData, currentIndex),
    });
  }
};

/**
 *  @param mousemove event
 * calls the drawFunction
 */
export const mouseMove = function (event) {
  const userData = JSON.parse(JSON.stringify(this.state.userData));
  const canvas = event.target;
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;

  // size + 2 because we add 0 at the beginning and end of each array
  const size = userData.arraySize + 2;
  // -0,5 because of mouse click diffrence
  let currentIndex = Math.floor(Math.floor(x) / (Math.floor(canvas.width) / size) - 0.5);

  // handle left click move
  if (canvasTarget == event.target.closest('canvas') && isPressed && currentIndex >= 0 && currentIndex < size - 2) {
    const y = event.clientY - rect.top;
    const canvasID = event.target.id;
    const customArray = userData[canvasID];

    if (currentIndex >= 0 && currentIndex < userData.arraySize) {
      customArray[currentIndex] = -(y - canvas.height / 2) / (canvas.height / 2.65);
      userData[canvasID] = customArray;
    }
    // call ( inverse ) FFT and set the state
    this.setState({
      userData: callFFTCustom(canvasID, userData, currentIndex),
    });
  }

  // handle right click move
  if (canvasTarget == event.target.closest('canvas') && rightPressed && currentIndex >= 0 && currentIndex < size - 2) {
    const y = event.clientY - rect.top; // must be assigned
    const canvasID = event.target.id;
    const customArray = userData[canvasID];

    if (currentIndex >= 0 && currentIndex < userData.arraySize) {
      customArray[currentIndex] = -(firstRight - canvas.height / 2) / (canvas.height / 2.65);
      userData[canvasID] = customArray;
    }

    // call ( inverse ) FFT and set the state
    this.setState({
      userData: callFFTCustom(canvasID, userData, currentIndex),
    });
  }
};

export const handleCenteredZero = function () {
  // get state
  const userData = JSON.parse(JSON.stringify(this.state.userData));

  let zero = userData['centeredZero'];
  if (false === zero) {
    zero = true;
  } else {
    zero = false;
  }

  userData['centeredZero'] = zero;

  // set new zero status
  this.setState({
    userData: {
      ...userData,
    },
  });
};

export const drawLine = function () {
  const userData = JSON.parse(JSON.stringify(this.state.userData));

  let line = userData['line'];
  if (false === line) {
    line = true;
  } else {
    line = false;
  }

  userData['line'] = line;

  // set new zero status
  this.setState({
    userData: {
      ...userData,
    },
  });
};

/**
 * scalls all canvases
 */
export const handleScaleAll = function () {
  const userData = JSON.parse(JSON.stringify(this.state.userData));
  let peakSpectral = findPeak(userData, 'spectral');
  let peakSpatial = findPeak(userData, 'spatial');

  for (let i = 0; i < userData.realspectral.length; i++) {
    userData.realspectral[i] = (userData.realspectral[i] * ((350 / 2) * 0.65)) / peakSpectral;
    userData.realspatial[i] = (userData.realspatial[i] * ((354 / 2) * 0.65)) / peakSpatial;
    userData.imagspectral[i] = (userData.imagspectral[i] * ((354 / 2) * 0.65)) / peakSpectral;
    userData.imagspatial[i] = (userData.imagspatial[i] * ((354 / 2) * 0.65)) / peakSpatial;
  }

  // set new zero status
  this.setState({
    userData: {
      ...userData,
    },
  });
};

/**
 *  @param Array which has to be drawn
 *  @return highest Peak
 */
export const findPeak = function (userData, part) {
  let arrayLeft = 'real' + part;
  let arrayRight = 'imag' + part;

  let maxLeft = Math.max(...userData[arrayLeft]);
  let minLeft = Math.min(...userData[arrayLeft]);

  let maxRight = Math.max(...userData[arrayRight]);
  let minRight = Math.min(...userData[arrayRight]);

  return Math.max(Math.abs(maxLeft), Math.abs(maxRight), Math.abs(minLeft), Math.abs(minRight));
};
