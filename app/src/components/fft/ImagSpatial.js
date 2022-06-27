// Right Top
import React from 'react';
import PropTypes from 'prop-types';

class ImagSpatial extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { getBaseFunctionFromSpatialToSpectral } = this.props;
    return (
      <>
        <canvas id="imagspatial" className="graph imagspatial"></canvas>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrZero', 'imagspatial')}>Zero</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrSin', 'imagspatial')}>Sin</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrCos', 'imagspatial')}>Cos</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrKamm', 'imagspatial')}>Kamm</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrOnes', 'imagspatial')}>Ones</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrPyra', 'imagspatial')}>Pyra</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrGaus', 'imagspatial')}>Gaus</button>
      </>
    );
  }
}

export default ImagSpatial;

ImagSpatial.propTypes = {
  getBaseFunctionFromSpatialToSpectral: PropTypes.func,
};
