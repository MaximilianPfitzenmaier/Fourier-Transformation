// right Bottom
import React from 'react';
import PropTypes from 'prop-types';
import * as GraphUtils from '../../utilities/graph';
import { cos, kamm, ones, pyra, sin, zero, gaus } from '../../assets/data/basedata';

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
        <button onClick={() => getBaseFunction(zero[128], this.canvasID)}>Zero</button>
        <button onClick={() => getBaseFunction(sin[128], this.canvasID)}>Sin</button>
        <button onClick={() => getBaseFunction(cos[128], this.canvasID)}>Cos</button>
        <button onClick={() => getBaseFunction(kamm[128], this.canvasID)}>kamm</button>
        <button onClick={() => getBaseFunction(ones[128], this.canvasID)}>Ones</button>
        <button onClick={() => getBaseFunction(pyra[128], this.canvasID)}>Pyra</button>
        <button onClick={() => getBaseFunction(gaus[128], this.canvasID)}>Gaus</button>
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
