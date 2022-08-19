import React from 'react';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
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

    // Bind eventListener
    this.mouseDown = GraphUtils.mouseDown.bind(this);
    this.mouseMove = GraphUtils.mouseMove.bind(this);
    this.mouseUp = GraphUtils.mouseUp.bind(this);

    // Set initial state
    this.state = {};
  }



  componentDidMount() {
    // Get data from SessionStorage
    this.initialize();

    window.addEventListener('mousedown', (event) => {
      this.mouseDown(event);
    });
    window.addEventListener('mousemove', (event) => {
      this.mouseMove(event);
    });
    window.addEventListener('mouseup', (event) => {
      this.mouseUp(event);
    });

    window.addEventListener('touchdown', (event) => {
      this.mouseDown(event);
    });
    window.addEventListener('touchmove', (event) => {
      this.mouseMove(event);
    });
    window.addEventListener('touchend', (event) => {
      this.mouseUp(event);
    });
  }

  componentDidUpdate() {
    // Set data to SessionStorage
    this.setSessionStorage();
    this.isMobile();
  }

  isMobile() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      return true;
    }

    return false;
  }

  render() {
    const s = this.state;
    return ! this.isMobile() && s.userData ? (
      <>
        <Navigation />

        <Filters
          labels={s.appData.labels}
          arraySize={s.userData.arraySize}
          handleArraySizeChange={this.handleArraySizeChange}
          handleResetAll={this.handleResetAll}
        />

        <div className="fourier fourier--basegrid-fourier" style={{ '--count': '1fr 1fr', '--areas': '"left_top right_top" "left_bottom right_bottom"' }}>
          <RealSpatial
            custom={s.userData.custom.realspatial}
            selectedBaseFunctions={s.userData.selectedBaseFunctions.realspatial}
            labels={s.appData.labels}
            arraySize={s.userData.arraySize}
            arrayFromState={s.userData.realspatial}
            getBaseFunction={this.getBaseFunction}
          />
          <RealSpectral
            custom={s.userData.custom.realspectral}
            selectedBaseFunctions={s.userData.selectedBaseFunctions.realspectral}
            labels={s.appData.labels}
            arraySize={s.userData.arraySize}
            arrayFromState={s.userData.realspectral}
            getBaseFunction={this.getBaseFunction}
          />

          <ImagSpatial
            custom={s.userData.custom.imagspatial}
            selectedBaseFunctions={s.userData.selectedBaseFunctions.imagspatial}
            labels={s.appData.labels}
            arraySize={s.userData.arraySize}
            arrayFromState={s.userData.imagspatial}
            getBaseFunction={this.getBaseFunction}
          />
          <ImagSpectral
            custom={s.userData.custom.imagspectral}
            selectedBaseFunctions={s.userData.selectedBaseFunctions.imagspectral}
            labels={s.appData.labels}
            arraySize={s.userData.arraySize}
            arrayFromState={s.userData.imagspectral}
            getBaseFunction={this.getBaseFunction}
          />
        </div>
      </>
    ) : (
      <>
        <header>
          <Navigation />
        </header>
        <main>
          This Application is not made for mobile use. Please change to your Desktop PC.
        </main>
        <footer style={{ position: 'absolute', bottom: '0' }}>
          <Footer />
        </footer>
      </>
    );
  }
}

export default App;
