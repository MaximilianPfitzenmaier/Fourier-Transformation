// left Top
import React from 'react';
import PropTypes from 'prop-types';
import { arrZero } from '../../assets/data/basedata';

class RealSpatial extends React.Component {
  constructor(props) {
    super(props);
  }

  canvasID = 'realspatial';

  componentDidMount() {
    this.drawFunction(this.canvasID);
  }

  createCanvas = function (canvasID) {
    return <canvas ref={canvasID} width={300} height={300} />;
  };

  drawFunction = function (canvasID) {
    // get state
    // const userData = JSON.parse(JSON.stringify(this.state.userData));

    // ! const canvasArray = userData.canvasID;
    // let canvasArray = [];
    // for (const [key, value] of Object.entries(userData)) {
    //   if (key == canvasID) {
    //     canvasArray = [value];
    //   }
    // }

    const canvasArray = arrZero;

    // ! const canvas = this.refs.canvasID;
    const canvas = this.refs.realspatial;
    const ctx = this.refs.realspatial.getContext('2d');

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

    let peaks = canvas.height / 2 / this.findPeaks(canvasArray);

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
      ctx.lineTo(i, -canvasArray[count] * peaks);
      count++;
      ctx.stroke();
    }
  };

  // calculate peaks and look if smalles or bigges peak is higher return the highest peak
  findPeaks = function (arr) {
    const numbers = arr;

    const smallest_number = Math.min(...numbers);
    const largest_number = Math.max(...numbers);
    let peaks = 0;

    smallest_number * -1 > largest_number ? (peaks = smallest_number) : (peaks = largest_number);

    return peaks;
  };

  render() {
    const { createCanvas, drawFunction, getBaseFunctionFromSpatialToSpectral } = this.props;

    return (
      <div className="real real--spatial" style={{ '--area': ' left_top' }}>
        {this.createCanvas(this.canvasID)}
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrZero', this.canvasID)}>Zero</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrSin', this.canvasID)}>Sin</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrCos', this.canvasID)}>Cos</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrKamm', this.canvasID)}>Kamm</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrOnes', this.canvasID)}>Ones</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrPyra', this.canvasID)}>Pyra</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrGaus', this.canvasID)}>Gaus</button>
      </div>
    );
  }
}

export default RealSpatial;

RealSpatial.propTypes = {
  getBaseFunctionFromSpatialToSpectral: PropTypes.func,
  createCanvas: PropTypes.func,
  drawFunction: PropTypes.func,
};
