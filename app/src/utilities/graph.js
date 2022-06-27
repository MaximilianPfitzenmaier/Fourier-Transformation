import { arrCos, arrKamm, arrOnes, arrPyra, arrSin, arrZero, arrGaus } from '../assets/data/basedata';
import { calculateFFT } from './calculateFFT';

/**
 *  @param funcName string for one of the Base functions e.g arrSin, arrCos
 *  @param type string if button is for real or imag part
 */
export const getBaseFunctionFromSpatialToSpectral = function (funcName, type) {
  // get state
  const userData = { ...this.state.userData };

  console.log();
  const button = type;
  // set imag/real to state
  switch (funcName) {
    case 'arrZero':
      button === 'realspatial' ? (userData.realSpatialArray = arrZero) : (userData.imagSpatialArray = arrZero);
      this.setState({
        userData,
      });
      break;

    case 'arrSin':
      button === 'realspatial' ? (userData.realSpatialArray = arrSin) : (userData.imagSpatialArray = arrSin);
      this.setState({
        userData,
      });
      break;

    case 'arrCos':
      button === 'realspatial' ? (userData.realSpatialArray = arrCos) : (userData.imagSpatialArray = arrCos);
      this.setState({
        userData,
      });
      break;

    case 'arrKamm':
      button === 'realspatial' ? (userData.realSpatialArray = arrKamm) : (userData.imagSpatialArray = arrKamm);
      this.setState({
        userData,
      });
      break;

    case 'arrOnes':
      button === 'realspatial' ? (userData.realSpatialArray = arrOnes) : (userData.imagSpatialArray = arrOnes);
      this.setState({
        userData,
      });
      break;

    case 'arrPyra':
      button === 'realspatial' ? (userData.realSpatialArray = arrPyra) : (userData.imagSpatialArray = arrPyra);
      this.setState({
        userData,
      });
      break;

    case 'arrGaus':
      button === 'realspatial' ? (userData.realSpatialArray = arrGaus) : (userData.imagSpatialArray = arrGaus);
      this.setState({
        userData,
      });
      break;

    default:
      break;
  }

  // fire fft from stored arrays in state
  const calcArr = calculateFFT(userData.realSpatialArray, userData.imagSpatialArray);
  const baseArr = [];

  calcArr[0].push(userData.imagSpatialArray);
  calcArr[0].push(userData.realSpatialArray);
  baseArr.push(userData.realSpatialArray);
  baseArr.push(userData.imagSpatialArray);
  drawfunction(calcArr, button, baseArr);
};

// Draw Function
export const drawfunction = function (arr, id, baseArr) {
  // declare new Graphs for each Grid in Array
  const graphArr = ['imagspatial', 'imagspectral', 'realspatial', 'realspectral'];

  // cut out clicked button from specific Graph from array
  for (var i = graphArr.length - 1; i >= 0; i--) {
    if (graphArr[i] === id) {
      graphArr.splice(i, 1);
    }
  }

  // switch case to draw the right coordinates for the right canvases
  graphArr.forEach((el) => {
    switch (el) {
      case 'imagspatial':
        Coord(el, arr[0][2]);
        break;

      case 'imagspectral':
        Coord(el, arr[0][1]);
        break;

      case 'realspatial':
        Coord(el, arr[0][3]);
        break;

      case 'realspectral':
        Coord(el, arr[0][0]);
        break;

      default:
        break;
    }
  });

  // Base draw for the Array which button was clicked

  switch (id) {
    case 'realspatial':
      drawClickedFunct(id, baseArr[0]);
      break;
    case 'imagspatial':
      drawClickedFunct(id, baseArr[1]);
      break;
    default:
      break;
  }
};

export function Coord(con, arr) {
  // user defined properties

  const canvas = document.getElementById(con);
  const ctx = canvas.getContext('2d');

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

  let peaks = canvas.height / 2 / findPeaks(arr);

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
  for (let i = 0; i < canvas.width; i = i + canvas.width / 128) {
    ctx.beginPath();
    ctx.lineWidth = canvas.width / 256;
    ctx.strokeStyle = '#000000';
    ctx.moveTo(i, 0);
    ctx.lineTo(i, -arr[count] * peaks);
    count++;
    ctx.stroke();
  }
}

export function drawClickedFunct(con, baseArr) {
  const canvas = document.getElementById(con);
  const ctx = canvas.getContext('2d');

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

  let peaks = canvas.height / 2 / findPeaks(baseArr);

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
  for (let i = 0; i < canvas.width; i = i + canvas.width / 128) {
    ctx.beginPath();
    ctx.lineWidth = canvas.width / 256;
    ctx.strokeStyle = '#000000';
    ctx.moveTo(i, 0);
    ctx.lineTo(i, -baseArr[count] * peaks);
    count++;
    ctx.stroke();
  }
}

// calculate peaks and look if smalles or bigges peak is higher return the highest peak
export function findPeaks(arr) {
  const numbers = arr;

  const smallest_number = Math.min(...numbers);
  const largest_number = Math.max(...numbers);
  let peaks = 0;

  smallest_number * -1 > largest_number ? (peaks = smallest_number) : (peaks = largest_number);

  return peaks;
}

// war schon richtig alles :) habe die funktion nur noch in der App.js aufgerufen
export const clickGraph = function () {
  const graphArr = ['imagspatial', 'imagspectral', 'realspatial', 'realspectral'];

  graphArr.forEach((el) => {
    const canvas = document.getElementById(el);
    canvas.addEventListener(
      'click',
      function () {
        console.log(el);
        console.log(canvas);
      },
      false
    );
  });
};
