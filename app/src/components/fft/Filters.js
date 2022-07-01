import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  constructor(props) {
    super(props);
  }

  sizeFilter() {
    return (
      <select defaultValue={this.props.arraySize} onChange={this.props.handleArraySizeChange}>
        <option value={16}>16</option>
        <option value={32}>32</option>
        <option value={64}>64</option>
        <option value={128}>128</option>
      </select>
    );
  }

  resetAll() {
    return <button onClick={this.props.handleResetAll}>{this.props.labels.reset}</button>;
  }

  render() {
    return (
      <div className="filters">
        {this.sizeFilter()}
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
  arraySize: PropTypes.number,
};
