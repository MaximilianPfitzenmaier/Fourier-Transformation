// left Top
import React from 'react';
import PropTypes from 'prop-types';

class RealSpatial extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { getBaseFunctionFromSpatialToSpectral } = this.props;

    return (
      <>
        <canvas id="realspatial" width="auto" height="auto" className="graph realspatial"></canvas>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrZero', 'real')}>Zero</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrSin', 'real')}>Sin</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrCos', 'real')}>Cos</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrKamm', 'real')}>Kamm</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrOnes', 'real')}>Ones</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrPyra', 'real')}>Pyra</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrGaus', 'real')}>Gaus</button>
      </>
    );
  }
}

export default RealSpatial;

RealSpatial.propTypes = {
  getBaseFunctionFromSpatialToSpectral: PropTypes.func,
};
