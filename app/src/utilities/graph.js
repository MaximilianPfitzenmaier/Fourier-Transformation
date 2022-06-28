import { calculateFFT } from './calculateFFT';

/*
TODO: 16 - 128 dropdown, zero all button, handfree
*/

/**
 *  @param canvasID String for the ID and the REF
 *  @return canvas React element with ref as ID
 */
export const createCanvas = function (canvasID) {
  return <canvas ref={canvasID} width={300} height={300} />;
};

/**
 *  @param funcArray Array for one of the Base functions e.g sin, cos
 *  @param type string if button is for real or imag part
 */
export const getBaseFunction = function (funcArray, type) {
  console.log(funcArray);
  console.log(type);

  // get state
  const userData = JSON.parse(JSON.stringify(this.state.userData));
  let inverse = false;

  // set userData Array of this canvas to clicked function
  userData[type] = funcArray;

  // call inverse FFT if spectral button
  if (type == 'realspectral' || type == 'imagspectral') {
    inverse = true;

    // fire INVERSE fft from stored arrays in state
    const [[imagspatial, realspatial]] = calculateFFT(userData.imagspectral, userData.realspectral, inverse);

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
    const [[realspectral, imagspectral]] = calculateFFT(userData.realspatial, userData.imagspatial, inverse);

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
export const drawFunction = function (canvasID, arrayFromUserData) {
  let canvasArray = arrayFromUserData;
  const canvas = this.refs[canvasID];
  const ctx = this.refs[canvasID].getContext('2d');

  ctx.save();

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.restore();

  const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  canvas.width = width / 2;
  canvas.height = height / 2;
  const halfWidth = width / 2;
  const halfHeight = height / 2;

  let peaks = canvas.height / 2 / findPeaks(canvasArray);
  let tickPeak = findPeaks(canvasArray);

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
    yposition = -canvasArray[count] * (peaks * 0.6);
    yposition = yposition ? yposition : 0;

    ctx.beginPath();
    ctx.lineWidth = 1;
    //ctx.lineWidth = canvas.width / (canvasArray.length * 2);
    ctx.strokeStyle = '#000000';
    ctx.moveTo(i, 0);
    ctx.lineTo(i, -canvasArray[count] * (peaks * 0.6));
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
