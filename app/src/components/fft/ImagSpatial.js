// Right Top
import React from 'react';
import PropTypes from 'prop-types';
import * as GraphUtils from '../../utilities/graph';
import { arrCos, arrKamm, arrOnes, arrPyra, arrSin, arrZero, arrGaus } from '../../assets/data/basedata';

class ImagSpatial extends React.Component {
  constructor(props) {
    super(props);

    this.createCanvas = GraphUtils.createCanvas.bind(this);
    this.drawFunction = GraphUtils.drawFunction.bind(this);
  }

  canvasID = 'imagspatial';

  componentDidMount() {
    this.drawFunction(this.canvasID, this.props.arrayFromState);
  }

  componentDidUpdate() {
    this.drawFunction(this.canvasID, this.props.arrayFromState);
  }

  render() {
    const { getBaseFunction } = this.props;
    return (
      <div className="imag imag--spatial" style={{ '--area': ' right_top' }}>
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

export default ImagSpatial;

ImagSpatial.propTypes = {
  getBaseFunction: PropTypes.func,
  arrayFromState: PropTypes.array,
};
