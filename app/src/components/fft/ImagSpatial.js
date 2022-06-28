// Right Top
import React from 'react';
import PropTypes from 'prop-types';
import * as GraphUtils from '../../utilities/graph';
import { cos, kamm, ones, pyra, sin, zero, gaus } from '../../assets/data/basedata';

class ImagSpatial extends React.Component {
  constructor(props) {
    super(props);

    this.createCanvas = GraphUtils.createCanvas.bind(this);
    this.drawFunction = GraphUtils.drawFunction.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  canvasID = 'imagspatial';

  componentDidMount() {
    this.drawFunction(this.canvasID, this.props.arrayFromState);
  }

  componentDidUpdate() {
    this.drawFunction(this.canvasID, this.props.arrayFromState);
  }

  handleChange(event) {
    const array = JSON.parse(event.target.value);
    const size = this.props.arraySize;
    this.props.getBaseFunction(array[size], this.canvasID);
  }

  render() {
    return (
      <div className="imag imag--spatial" style={{ '--area': ' right_top' }}>
        <select onChange={this.handleChange}>
          <option value={JSON.stringify(zero)}>Zero</option>
          <option value={JSON.stringify(sin)}>Sin</option>
          <option value={JSON.stringify(cos)}>Cos</option>
          <option value={JSON.stringify(kamm)}>Kamm</option>
          <option value={JSON.stringify(ones)}>Ones</option>
          <option value={JSON.stringify(pyra)}>Pyra</option>
          <option value={JSON.stringify(gaus)}>Gaus</option>
        </select>
        {this.createCanvas(this.canvasID)}
      </div>
    );
  }
}

export default ImagSpatial;

ImagSpatial.propTypes = {
  getBaseFunction: PropTypes.func,
  arrayFromState: PropTypes.array,
  arraySize: PropTypes.number,
};
