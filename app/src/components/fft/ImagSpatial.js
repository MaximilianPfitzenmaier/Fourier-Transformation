// Right Top
import React from 'react';
import PropTypes from 'prop-types';
import * as GraphUtils from '../../utilities/graph';
import * as Filter from '../../utilities/filter';

class ImagSpatial extends React.Component {
  constructor(props) {
    super(props);

    this.drawFunction = GraphUtils.drawFunction.bind(this);
    this.createCanvas = GraphUtils.createCanvas.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getDropdown = Filter.getDropdown.bind(this);
  }

  canvasID = 'imagspatial';

  componentDidMount() {
    this.drawFunction(this.canvasID, this.props.arrayFromState);
  }

  componentDidUpdate() {
    const p = this.props;
    this.drawFunction(this.canvasID, p.arrayFromState);
    this.getDropdown(p.labels, p.selectedBaseFunctions);
  }

  getValue() {}

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
      <div className="imag imag--spatial" style={{ '--area': ' right_top' }}>
        {this.getDropdown(labels, selectedBaseFunctions)}
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
  labels: PropTypes.object,
  selectedBaseFunctions: PropTypes.string,
};
