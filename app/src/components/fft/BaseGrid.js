import React from 'react';
import RealSpatial from './RealSpatial';
import RealSpectral from './RealSpectral';
import ImagSpatial from './ImagSpatial';
import ImagSpectral from './ImagSpectral';

class BasegridFourier extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="fourier-ctr">
          <div className="fourier fourier--basegrid-fourier" style={{ '--count': '1fr 1fr', '--areas': '"left_top right_top" "left_bottom right_bottom"' }}>
            <div className="real real--spatial" style={{ '--area': ' left_top' }}>
              <RealSpatial />
            </div>
            <div className="real real--spectral" style={{ '--area': ' left_bottom' }}>
              <RealSpectral></RealSpectral>
            </div>
            <div className="imag imag--spatial" style={{ '--area': ' right_top' }}>
              <ImagSpatial></ImagSpatial>
            </div>
            <div className="imag imag--spectral" style={{ '--area': ' right_bottom' }}>
              <ImagSpectral></ImagSpectral>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BasegridFourier;
