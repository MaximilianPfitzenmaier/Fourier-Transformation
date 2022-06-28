import React from 'react';

// Components
import Navigation from './components/Navigation';
import RealSpatial from './components/fft/RealSpatial';
import RealSpectral from './components/fft/RealSpectral';
import ImagSpectral from './components/fft/ImagSpectral';
import ImagSpatial from './components/fft/ImagSpatial';

// functions
import * as InitUtils from './utilities/init';
import * as HelperUtils from './utilities/helper';
import * as GraphUtils from './utilities/graph';

class App extends React.Component {
  constructor(props) {
    super(props);

    // Bind init functions
    this.initialize = InitUtils.initialize.bind(this);
    this.getSessionStorage = InitUtils.getSessionStorage.bind(this);

    // Bind Helper functions
    this.setSessionStorage = HelperUtils.setSessionStorage.bind(this);

    // Bind Graph functions
    this.getBaseFunction = GraphUtils.getBaseFunction.bind(this);

    // Set initial state
    this.state = {};
  }

  componentDidMount() {
    // Get data from SessionStorage
    this.initialize();
  }

  componentDidUpdate() {
    // Set data to SessionStorage
    this.setSessionStorage();
  }

  render() {
    const s = this.state;
    return s.userData ? (
      <>
        <Navigation />
        <div className="fourier-ctr">
          <div className="fourier fourier--basegrid-fourier" style={{ '--count': '1fr 1fr', '--areas': '"left_top right_top" "left_bottom right_bottom"' }}>
            <RealSpatial arrayFromState={s.userData.realspatial} getBaseFunction={this.getBaseFunction} />
            <RealSpectral arrayFromState={s.userData.realspectral} getBaseFunction={this.getBaseFunction} />
            <ImagSpatial arrayFromState={s.userData.imagspatial} getBaseFunction={this.getBaseFunction} />
            <ImagSpectral arrayFromState={s.userData.imagspectral} getBaseFunction={this.getBaseFunction} />
          </div>
        </div>
      </>
    ) : null;
  }
}

export default App;
