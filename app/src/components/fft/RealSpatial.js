// left Top
import React from 'react';
import PropTypes from 'prop-types';
import * as GraphUtils from '../../utilities/graph';
import { arrCos, arrKamm, arrOnes, arrPyra, arrSin, arrZero, arrGaus } from '../../assets/data/basedata';

class RealSpatial extends React.Component {
  constructor(props) {
    super(props);

    this.drawFunction = GraphUtils.drawFunction.bind(this);
    this.createCanvas = GraphUtils.createCanvas.bind(this);
  }

  canvasID = 'realspatial';

  componentDidMount() {
    this.drawFunction(this.canvasID, this.props.arrayFromState);
  }

  componentDidUpdate() {
    this.drawFunction(this.canvasID, this.props.arrayFromState);
  }

  render() {
    const { getBaseFunctionFromSpatialToSpectral } = this.props;

    return (
      <div className="real real--spatial" style={{ '--area': ' left_top' }}>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral(arrZero, this.canvasID)}>Zero</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral(arrSin, this.canvasID)}>Sin</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral(arrCos, this.canvasID)}>Cos</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral(arrKamm, this.canvasID)}>Kamm</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral(arrOnes, this.canvasID)}>Ones</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral(arrPyra, this.canvasID)}>Pyra</button>
        <button onClick={() => getBaseFunctionFromSpatialToSpectral(arrGaus, this.canvasID)}>Gaus</button>
        {this.createCanvas(this.canvasID)}
      </div>
    );
  }
}

export default RealSpatial;

RealSpatial.propTypes = {
  getBaseFunctionFromSpatialToSpectral: PropTypes.func,
  arrayFromState: PropTypes.array,
};
