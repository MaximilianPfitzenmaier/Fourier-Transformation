import React from 'react';

// Components
import Navigation from './components/Navigation';
import Filters from './components/fft/Filters';
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
    this.handleResetAll = HelperUtils.handleResetAll.bind(this);

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

        <Filters labels={s.appData.labels} handleArraySizeChange={this.handleArraySizeChange} handleResetAll={this.handleResetAll} />

        <div className="fourier fourier--basegrid-fourier" style={{ '--count': '1fr 1fr', '--areas': '"left_top right_top" "left_bottom right_bottom"' }}>
          <RealSpatial
            selectedBaseFunctions={s.userData.selectedBaseFunctions.realspatial}
            labels={s.appData.labels}
            arraySize={s.userData.arraySize}
            arrayFromState={s.userData.realspatial}
            getBaseFunction={this.getBaseFunction}
          />
          <RealSpectral
            selectedBaseFunctions={s.userData.selectedBaseFunctions.realspectral}
            labels={s.appData.labels}
            arraySize={s.userData.arraySize}
            arrayFromState={s.userData.realspectral}
            getBaseFunction={this.getBaseFunction}
          />

          <ImagSpatial
            selectedBaseFunctions={s.userData.selectedBaseFunctions.imagspatial}
            labels={s.appData.labels}
            arraySize={s.userData.arraySize}
            arrayFromState={s.userData.imagspatial}
            getBaseFunction={this.getBaseFunction}
          />
          <ImagSpectral
            selectedBaseFunctions={s.userData.selectedBaseFunctions.imagspectral}
            labels={s.appData.labels}
            arraySize={s.userData.arraySize}
            arrayFromState={s.userData.imagspectral}
            getBaseFunction={this.getBaseFunction}
          />
        </div>
      </>
    ) : null;
  }
}

export default App;
