import { calculateFFT } from './calculateFFT';

/**
 *  @param canvasID String for the ID and the REF
 *  @return canvas React element with ref as ID
 */
export const createCanvas = function (canvasID, refName) {
  return <canvas id={canvasID} ref={refName} width={300} height={300} />;
};

/**
 *  @param funcArray Array for one of the Base functions e.g sin, cos
 *  @param type string if button is for real or imag part
 */
export const getBaseFunction = function (funcArray, type, newSelectedBaseFunctions) {
  // const selectedBaseFunctions = 'selectedBaseFunctions';

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

  // call inverse FFT if spectral button
  if (type == 'realspectral' || type == 'imagspectral') {
    // fire INVERSE fft from stored arrays in state
    const [[imagspatial, realspatial]] = calculateFFT(userData.imagspectral, userData.realspectral);

    // set dropdown to custom
    userData['selectedBaseFunctions']['realspatial'] = '0';
    userData['selectedBaseFunctions']['imagspatial'] = '0';

    // set all the other Arrays in userData
    this.setState({
      userData: {
        ...userData,
        realspatial,
        imagspatial,
      },
    });
  } else {
    // fire fft from stored arrays in state
    const [[realspectral, imagspectral]] = calculateFFT(userData.realspatial, userData.imagspatial);

    // set dropdown to custom
    userData['selectedBaseFunctions']['realspectral'] = '0';
    userData['selectedBaseFunctions']['imagspectral'] = '0';

    // set all the other Arrays in userData
    this.setState({
      userData: {
        ...userData,
        realspectral,
        imagspectral,
      },
    });
  }
};

/**
 *  @param canvasID Canvas ID to identify (realspatial, realspectral, imagspatial, imagspectral)
 *  @param arrayFromUserData Array from userData to be drawn
 *  @return void
 */
export const drawFunction = function (canvasID, arrayFromUserData, custom) {
  let maxPeak = findPeaks(arrayFromUserData);

  if (!custom) {
    for (let i = 0; i < arrayFromUserData.length; i++) {
      maxPeak = maxPeak ? maxPeak : 1;
      arrayFromUserData[i] = arrayFromUserData[i] / maxPeak;
    }
  }

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

  canvas.width = width / 2;
  canvas.height = height / 2;
  // const halfWidth = width / 2;
  // const halfHeight = height / 2;

  let peaks = 1;
  let tickPeak = 1;
  let scale = (canvas.height / 2) * 0.65;
  if (!custom) {
    scale = 1;
    peaks = (canvas.height / 2 / findPeaks(canvasArray)) * 0.6;
    tickPeak = findPeaks(canvasArray);
  }

  ctx.translate(0, canvas.height / 2);

  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#000000';
  ctx.moveTo(0, 0);
  ctx.lineTo(canvas.width, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#000000';
  ctx.moveTo(canvas.width / 2, -canvas.height / 2);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();

  let count = 0;
  let yposition = 0;
  canvasArray.unshift(0);
  canvasArray.push(0);

  for (let i = 0; i < canvas.width; i = i + canvas.width / canvasArray.length) {
    yposition = -canvasArray[count] * peaks * scale;
    yposition = yposition ? yposition : 0;

    ctx.beginPath();
    ctx.lineWidth = 1;
    //ctx.lineWidth = canvas.width / (canvasArray.length * 2);
    ctx.strokeStyle = '#000000';
    ctx.moveTo(i, 0);

    ctx.lineTo(i, yposition);

    ctx.stroke();
    ctx.closePath();
    // draw circles

    ctx.beginPath();
    ctx.arc(i, yposition, 4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    count++;
  }

  canvasArray.shift();
  canvasArray.pop();

  ctx.beginPath();
  ctx.font = '300 13px Arial';
  ctx.textAlign = 'left';
  if (Math.ceil(tickPeak) != 0 || -Math.ceil(tickPeak) != 0) {
    ctx.fillText(-Math.ceil(tickPeak), canvas.width / 2 + 10, (canvas.height / 2) * 0.65 + 5);
    ctx.fillText(Math.ceil(tickPeak), canvas.width / 2 + 10, -(canvas.height / 2) * 0.65 + 5);
    ctx.closePath();
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000000';
    ctx.moveTo(canvas.width / 2 - 6, (canvas.height / 2) * 0.65);
    ctx.lineTo(canvas.width / 2 + 6, (canvas.height / 2) * 0.65);
    ctx.moveTo(canvas.width / 2 - 6, -(canvas.height / 2) * 0.65);
    ctx.lineTo(canvas.width / 2 + 6, -(canvas.height / 2) * 0.65);
    ctx.closePath();
    ctx.stroke();
  }
};

/**
 *  @param Array which has to be drawn
 *  @return highest Peak
 */
export function findPeaks(arr) {
  let smallest_number = Math.min(...arr);
  let largest_number = Math.max(...arr);
  let peaks = 0;
  smallest_number < 0 ? (smallest_number = smallest_number * -1) : smallest_number;
  smallest_number > largest_number ? (peaks = smallest_number) : (peaks = largest_number);

  return peaks;
}

let isPressed = false;
let canvasTarget;
/**
 *  @param mousedown event
 * Resets all custom statements to false except this canvas to handle draw scaling and
 * sets this select to custom
 */
export const mouseDown = function (event) {
  const userData = JSON.parse(JSON.stringify(this.state.userData));

  // set all custom statemants to false
  userData['custom']['realspatial'] = false;
  userData['custom']['imagspatial'] = false;
  userData['custom']['imagspectral'] = false;
  userData['custom']['realspectral'] = false;
  if (event.target.closest('canvas')) {
    isPressed = true;
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

  if (canvasTarget == event.target.closest('canvas') && isPressed && currentIndex >= 0 && currentIndex < size) {
    const y = event.clientY - rect.top;
    const canvasID = event.target.id;
    const customArray = userData[canvasID];

    if (currentIndex >= 0 && currentIndex < userData.arraySize) {
      customArray[currentIndex] = -(y - canvas.height / 2) / (canvas.height / 2.65);
      userData[canvasID] = customArray;
    }

    drawFunction(event.target, customArray, true);

    // call inverse FFT if spectral button
    if (canvasID == 'realspectral' || canvasID == 'imagspectral') {
      // fire INVERSE fft from stored arrays in state
      const [[imagspatial, realspatial]] = calculateFFT(userData.imagspectral, userData.realspectral);

      // set dropdown to custom
      userData['selectedBaseFunctions']['realspatial'] = '0';
      userData['selectedBaseFunctions']['imagspatial'] = '0';

      // set all the other Arrays in userData
      this.setState({
        userData: {
          ...userData,
          realspatial,
          imagspatial,
        },
      });
    } else {
      // fire fft from stored arrays in state
      const [[realspectral, imagspectral]] = calculateFFT(userData.realspatial, userData.imagspatial);

      // set dropdown to custom
      userData['selectedBaseFunctions']['realspectral'] = '0';
      userData['selectedBaseFunctions']['imagspectral'] = '0';

      // set all the other Arrays in userData
      this.setState({
        userData: {
          ...userData,
          realspectral,
          imagspectral,
        },
      });
    }
  }
};
