// Left bottom
import React from 'react';

class RealSpectral extends React.Component {
  render() {
    //const { number, updateRealSpectral } = this.props;
    return (
      <div className="real real--spectral" style={{ '--area': ' left_bottom' }}>
        <canvas id="realspectral" width="auto" height="auto" className="graph realspectral"></canvas>
      </div>
    );
  }
}

export default RealSpectral;
