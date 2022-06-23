// Right Top
import React from 'react';
import PropTypes from 'prop-types';

class ImagSpatial extends React.Component {
  render() {
    const { getBaseFunctionFromSpatialToSpectral } = this.props;
    return (
      <>
        <canvas id="imagspatial" className="graph imagspatial"></canvas>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrZero', 'imag')}>Zero</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrSin', 'imag')}>Sin</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrCos', 'imag')}>Cos</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrKamm', 'imag')}>Kamm</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrOnes', 'imag')}>Ones</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrPyra', 'imag')}>Pyra</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrGaus', 'imag')}>Gaus</button>
      </>
    );
  }
}

export default ImagSpatial;

ImagSpatial.propTypes = {
  getBaseFunctionFromSpatialToSpectral: PropTypes.func,
};
