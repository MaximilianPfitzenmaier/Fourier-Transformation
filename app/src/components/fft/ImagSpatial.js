// Right Top
import React from 'react';
import PropTypes from 'prop-types';

class ImagSpatial extends React.Component {
  constructor(props) {
    super(props);
  }

  getSpatialCanvas() {
    // Get data for imag spatial from state
    const arr = this.userData.imagSpatial;
    return this.draw(arr);
  }

  getCalculatedCanvas() {
    // Get data for imag spatial from state
    // 2. Calculate FFT...
    // return this.draw(arr);
  }

  draw(arr) {
    // const canvas = React.createElement('canvas');
    // Draw
    // return canvas;
  }

  render() {
    const { drawFunction, getBaseFunctionFromSpatialToSpectral } = this.props;
    return (
      <div className="imag imag--spatial" style={{ '--area': ' right_top' }}>
        {/* <canvas id="imagspatial" className="graph imagspatial"></canvas> */}
        {/* drawFunction()*/}
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrZero', 'imagspatial')}>Zero</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrSin', 'imagspatial')}>Sin</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrCos', 'imagspatial')}>Cos</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrKamm', 'imagspatial')}>Kamm</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrOnes', 'imagspatial')}>Ones</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrPyra', 'imagspatial')}>Pyra</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrGaus', 'imagspatial')}>Gaus</button>
      </div>
    );
  }
}

export default ImagSpatial;

ImagSpatial.propTypes = {
  getBaseFunctionFromSpatialToSpectral: PropTypes.func,
  drawFunction: PropTypes.func,
};
