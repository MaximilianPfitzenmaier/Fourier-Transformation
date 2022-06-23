import React from 'react';

class BaseGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="fourier-ctr">
          <div className="fourier fourier--basegrid-fourier" style={{ '--count': '1fr 1fr', '--areas': '"left_top right_top" "left_bottom right_bottom"' }}>
            <div className="real real--spatial" style={{ '--area': ' left_top' }}></div>
            <div className="real real--spectral" style={{ '--area': ' left_bottom' }}></div>
            <div className="imag imag--spatial" style={{ '--area': ' right_top' }}></div>
            <div className="imag imag--spectral" style={{ '--area': ' right_bottom' }}></div>
          </div>
        </div>
      </>
    );
  }
}

export default BaseGrid;
