import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  constructor(props) {
    super(props);
  }

  sizeFilter() {
    return (
      <div className="size">
        <label htmlFor="arraySize">{this.props.labels.chooseArraySize}</label>
        <select name="arraySize" defaultValue={this.props.arraySize} onChange={this.props.handleArraySizeChange}>
          <option value={16}>16</option>
          <option value={32}>32</option>
          <option value={64}>64</option>
          <option value={128}>128</option>
        </select>
      </div>
    );
  }

  centeredZeroCheckbox() {
    return (
      <>
        <label htmlFor="centeredZero">
          {this.props.labels.centeredZeroCheckbox}
          <input name="centeredZero" type="checkbox" defaultChecked={this.props.centeredZero} onChange={this.props.handleCenteredZero}></input>
        </label>
      </>
    );
  }

  drawLine() {
    return (
      <>
        <label htmlFor="drawLine">
          {this.props.labels.drawLine}
          <input name="drawLine" type="checkbox" defaultChecked={this.props.line} onChange={this.props.drawLine}></input>
        </label>
      </>
    );
  }

  resetAll() {
    return <button onClick={this.props.handleResetAll}>{this.props.labels.reset}</button>;
  }

  scaleAll() {
    return <button onClick={this.props.handleScaleAll}>{this.props.labels.scale}</button>;
  }

  render() {
    return (
      <div className="filters">
        {this.sizeFilter()}
        {this.centeredZeroCheckbox()}
        {this.drawLine()}
        {this.scaleAll()}
        {this.resetAll()}
      </div>
    );
  }
}

export default Filters;

Filters.propTypes = {
  handleArraySizeChange: PropTypes.func,
  labels: PropTypes.object,
  handleResetAll: PropTypes.func,
  handleScaleAll: PropTypes.func,
  arraySize: PropTypes.number,
  centeredZero: PropTypes.bool,
  handleCenteredZero: PropTypes.func,
  line: PropTypes.bool,
  drawLine: PropTypes.func,
};
