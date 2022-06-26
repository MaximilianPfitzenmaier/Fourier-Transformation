// left Top
import React from 'react';
import PropTypes from 'prop-types';

class RealSpatial extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate(){
    this.drawfunction;
  }
  render() {
    const { drawfunction ,getBaseFunctionFromSpatialToSpectral} = this.props;

    return (
      <>
        <canvas id="realspatial" width="auto" height="auto" className="graph realspatial"></canvas>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrZero', 'realspatial')}>Zero</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrSin', 'realspatial')}>Sin</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrCos', 'realspatial')}>Cos</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrKamm', 'realspatial')}>Kamm</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrOnes', 'realspatial')}>Ones</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrPyra', 'realspatial')}>Pyra</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral('arrGaus', 'realspatial')}>Gaus</button>
      </>
    );
  }
}

export default RealSpatial;

RealSpatial.propTypes = {
  getBaseFunctionFromSpatialToSpectral: PropTypes.func,
  drawfunction: PropTypes.func,
};
