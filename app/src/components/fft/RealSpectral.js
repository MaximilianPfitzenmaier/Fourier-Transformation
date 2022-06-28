// Left bottom
import React from 'react';
import PropTypes from 'prop-types';
import * as GraphUtils from '../../utilities/graph';
import { arrCos, arrKamm, arrOnes, arrPyra, arrSin, arrZero, arrGaus } from '../../assets/data/basedata';

class RealSpectral extends React.Component {
  constructor(props) {
    super(props);

    this.drawFunction = GraphUtils.drawFunction.bind(this);
    this.createCanvas = GraphUtils.createCanvas.bind(this);
  }

  canvasID = 'realspectral';

  componentDidMount() {
    this.drawFunction(this.canvasID, this.props.arrayFromState);
  }

  componentDidUpdate() {
    this.drawFunction(this.canvasID, this.props.arrayFromState);
  }

  render() {
    const { getBaseFunctionFromSpectralToSpatial } = this.props;
    return (
      <div className="real real--spectral" style={{ '--area': ' left_bottom' }}>
        <button onClick={() => getBaseFunctionFromSpectralToSpatial(arrZero, this.canvasID)}>Zero</button>
        <button onClick={() => getBaseFunctionFromSpectralToSpatial(arrSin, this.canvasID)}>Sin</button>
        <button onClick={() => getBaseFunctionFromSpectralToSpatial(arrCos, this.canvasID)}>Cos</button>
        <button onClick={() => getBaseFunctionFromSpectralToSpatial(arrKamm, this.canvasID)}>Kamm</button>
        <button onClick={() => getBaseFunctionFromSpectralToSpatial(arrOnes, this.canvasID)}>Ones</button>
        <button onClick={() => getBaseFunctionFromSpectralToSpatial(arrPyra, this.canvasID)}>Pyra</button>
        <button onClick={() => getBaseFunctionFromSpectralToSpatial(arrGaus, this.canvasID)}>Gaus</button>
        {this.createCanvas(this.canvasID)}
      </div>
    );
  }
}

export default RealSpectral;

RealSpectral.propTypes = {
  getBaseFunctionFromSpectralToSpatial: PropTypes.func,
  arrayFromState: PropTypes.array,
};
