// right Bottom
import React from 'react';

class ImagSpectral extends React.Component {
  render() {
    //const { number, updateImagSpectral } = this.props;
    return (
      <div className="imag imag--spectral" style={{ '--area': ' right_bottom' }}>
        {/* this.props.getCanvas('') */}

        <canvas id="imagspectral" className="graph imagspectral"></canvas>
      </div>
    );
  }
}

export default ImagSpectral;
