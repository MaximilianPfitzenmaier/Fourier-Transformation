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
    this.handleArraySizeChange = HelperUtils.handleArraySizeChange.bind(this);

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
        <select defaultValue={64} onChange={this.handleArraySizeChange}>
          <option value={16}>16</option>
          <option value={32}>32</option>
          <option value={64}>64</option>
          <option value={128}>128</option>
        </select>

        <div className="fourier fourier--basegrid-fourier" style={{ '--count': '1fr 1fr', '--areas': '"left_top right_top" "left_bottom right_bottom"' }}>
          <RealSpatial arraySize={s.userData.arraySize} arrayFromState={s.userData.realspatial} getBaseFunction={this.getBaseFunction} />
          <RealSpectral arraySize={s.userData.arraySize} arrayFromState={s.userData.realspectral} getBaseFunction={this.getBaseFunction} />
          <ImagSpatial arraySize={s.userData.arraySize} arrayFromState={s.userData.imagspatial} getBaseFunction={this.getBaseFunction} />
          <ImagSpectral arraySize={s.userData.arraysize} arrayFromState={s.userData.imagspectral} getBaseFunction={this.getBaseFunction} />
        </div>
      </>
    ) : null;
  }
}

export default App;
