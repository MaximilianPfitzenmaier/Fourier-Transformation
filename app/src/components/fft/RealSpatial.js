// left Top
import React from 'react';
import PropTypes from 'prop-types';
import * as GraphUtils from '../../utilities/graph';
import { getDropdown } from '../../utilities/filter';

class RealSpatial extends React.Component {
  constructor(props) {
    super(props);

    this.drawFunction = GraphUtils.drawFunction.bind(this);
    this.createCanvas = GraphUtils.createCanvas.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getDropdown = getDropdown.bind(this);

    // Refs
    this.select = React.createRef();
    this.canvas = React.createRef();
  }

  canvasID = 'realspatial';

  componentDidMount() {
    this.drawFunction(this.canvas, this.props.arrayFromState, this.props.custom);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedBaseFunctions !== this.props.selectedBaseFunctions) {
      this.updateValue(this.props.selectedBaseFunctions);
    }

    const p = this.props;
    this.drawFunction(this.canvas, p.arrayFromState, p.custom);
    this.getDropdown(p.labels, p.selectedBaseFunctions);
  }

  updateValue(value) {
    this.select.current.value = value;
  }

  handleChange(event) {
    const newValue = event.target.value;
    if (newValue !== '0') {
      const array = JSON.parse(event.target.value);
      const size = this.props.arraySize;
      this.props.getBaseFunction(array[size], this.canvasID, newValue);
    }
  }

  render() {
    const { labels, selectedBaseFunctions } = this.props;
    return (
      <div className="real real--spatial" style={{ '--area': ' left_top' }}>
        <div className="title">{labels.realspatial}</div>
        {this.getDropdown(labels, selectedBaseFunctions, this.select)}
        {this.createCanvas(this.canvasID, this.canvas)}
      </div>
    );
  }
}

export default RealSpatial;

RealSpatial.propTypes = {
  getBaseFunction: PropTypes.func,
  arrayFromState: PropTypes.array,
  arraySize: PropTypes.number,
  labels: PropTypes.object,
  selectedBaseFunctions: PropTypes.string,
  custom: PropTypes.bool,
};
