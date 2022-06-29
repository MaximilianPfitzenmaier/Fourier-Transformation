// Left bottom
import React from 'react';
import PropTypes from 'prop-types';
import * as GraphUtils from '../../utilities/graph';
import { cos, kamm, ones, pyra, sin, zero, gaus } from '../../assets/data/basedata';

class RealSpectral extends React.Component {
  constructor(props) {
    super(props);

    this.drawFunction = GraphUtils.drawFunction.bind(this);
    this.createCanvas = GraphUtils.createCanvas.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  canvasID = 'realspectral';

  componentDidMount() {
    this.drawFunction(this.canvasID, this.props.arrayFromState);
  }

  componentDidUpdate() {
    this.drawFunction(this.canvasID, this.props.arrayFromState);
  }

  handleChange(event) {
    const selectedIndex = event.target.options.selectedIndex;
    const newSelectedBaseFunctions = event.target.options[selectedIndex].getAttribute('data-key');
    const array = JSON.parse(event.target.value);
    const size = this.props.arraySize;
    this.props.getBaseFunction(array[size], this.canvasID, newSelectedBaseFunctions);
  }
  getValue() {}
  render() {
    const { labels } = this.props;
    return (
      <div className="real real--spectral" style={{ '--area': ' left_bottom' }}>
        <select defaultValue={this.getValue()} onChange={this.handleChange}>
          <option key={labels.zero} data-key={labels.zero} value={JSON.stringify(zero)}>
            {labels.zero}
          </option>
          <option key={labels.sin} data-key={labels.sin} value={JSON.stringify(sin)}>
            {labels.sin}
          </option>
          <option key={labels.cos} data-key={labels.cos} value={JSON.stringify(cos)}>
            {labels.cos}
          </option>
          <option key={labels.kamm} data-key={labels.kamm} value={JSON.stringify(kamm)}>
            {labels.kamm}
          </option>
          <option key={labels.ones} data-key={labels.ones} value={JSON.stringify(ones)}>
            {labels.ones}
          </option>
          <option key={labels.pyra} data-key={labels.pyra} value={JSON.stringify(pyra)}>
            {labels.pyra}
          </option>
          <option key={labels.gaus} data-key={labels.gaus} value={JSON.stringify(gaus)}>
            {labels.gaus}
          </option>
        </select>
        {this.createCanvas(this.canvasID)}
      </div>
    );
  }
}

export default RealSpectral;

RealSpectral.propTypes = {
  getBaseFunction: PropTypes.func,
  arrayFromState: PropTypes.array,
  arraySize: PropTypes.number,
  selectedBaseFunctions: PropTypes.string,
  labels: PropTypes.object,
};
