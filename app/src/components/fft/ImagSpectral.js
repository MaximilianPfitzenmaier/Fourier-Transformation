// right Bottom
import React from 'react';
import PropTypes from 'prop-types';
import * as GraphUtils from '../../utilities/graph';
import { getDropdown } from '../../utilities/filter';

class ImagSpectral extends React.Component {
  constructor(props) {
    super(props);

    this.drawFunction = GraphUtils.drawFunction.bind(this);
    this.createCanvas = GraphUtils.createCanvas.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getDropdown = getDropdown.bind(this);

    // Refs
    this.select = React.createRef();
  }

  canvasID = 'imagspectral';

  componentDidMount() {
    this.drawFunction(this.canvasID, this.props.arrayFromState);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedBaseFunctions !== this.props.selectedBaseFunctions) {
      this.updateValue(this.props.selectedBaseFunctions);
    }
    const p = this.props;
    this.drawFunction(this.canvasID, p.arrayFromState);
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
      <div className="imag imag--spectral" style={{ '--area': ' right_bottom' }}>
        {this.getDropdown(labels, selectedBaseFunctions, this.select)}
        {this.createCanvas(this.canvasID)}
      </div>
    );
  }
}

export default ImagSpectral;

ImagSpectral.propTypes = {
  getBaseFunction: PropTypes.func,
  arrayFromState: PropTypes.array,
  arraySize: PropTypes.number,
  selectedBaseFunctions: PropTypes.string,
  labels: PropTypes.object,
};
