// right Bottom
import React from 'react';
import PropTypes from 'prop-types';
import * as GraphUtils from '../../utilities/graph';
import { arrCos, arrKamm, arrOnes, arrPyra, arrSin, arrZero, arrGaus } from '../../assets/data/basedata';

class ImagSpectral extends React.Component {
  constructor(props) {
    super(props);

    this.drawFunction = GraphUtils.drawFunction.bind(this);
    this.createCanvas = GraphUtils.createCanvas.bind(this);
  }

  canvasID = 'imagspectral';

  componentDidMount() {
    this.drawFunction(this.canvasID, this.props.arrayFromState);
  }

  componentDidUpdate() {
    this.drawFunction(this.canvasID, this.props.arrayFromState);
  }

  render() {
    const { getBaseFunction } = this.props;
    return (
      <div className="imag imag--spectral" style={{ '--area': ' right_bottom' }}>
        <button onClick={() => getBaseFunction(arrZero, this.canvasID)}>Zero</button>
        <button onClick={() => getBaseFunction(arrSin, this.canvasID)}>Sin</button>
        <button onClick={() => getBaseFunction(arrCos, this.canvasID)}>Cos</button>
        <button onClick={() => getBaseFunction(arrKamm, this.canvasID)}>Kamm</button>
        <button onClick={() => getBaseFunction(arrOnes, this.canvasID)}>Ones</button>
        <button onClick={() => getBaseFunction(arrPyra, this.canvasID)}>Pyra</button>
        <button onClick={() => getBaseFunction(arrGaus, this.canvasID)}>Gaus</button>
        {this.createCanvas(this.canvasID)}
      </div>
    );
  }
}

export default ImagSpectral;

ImagSpectral.propTypes = {
  getBaseFunction: PropTypes.func,
  arrayFromState: PropTypes.array,
};
