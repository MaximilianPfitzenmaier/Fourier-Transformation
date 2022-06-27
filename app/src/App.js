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
    this.getBaseFunctionFromSpatialToSpectral = GraphUtils.getBaseFunctionFromSpatialToSpectral.bind(this);
    // this.drawFunction = GraphUtils.drawFunction.bind(this);
    // this.createCanvas = GraphUtils.createCanvas.bind(this);
    // this.drawfunction = GraphUtils.drawfunction.bind(this);
    // this.clickGraph = GraphUtils.clickGraph.bind(this);

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
    return (
      <>
        <Navigation />
        <div className="fourier-ctr">
          <div className="fourier fourier--basegrid-fourier" style={{ '--count': '1fr 1fr', '--areas': '"left_top right_top" "left_bottom right_bottom"' }}>
            <RealSpatial
              // createCanvas={this.createCanvas}
              // drawFunction={this.drawFunction}
              getBaseFunctionFromSpatialToSpectral={this.getBaseFunctionFromSpatialToSpectral}
            />
            <RealSpectral />
            <ImagSpatial drawFunction={this.drawFunction} getBaseFunctionFromSpatialToSpectral={this.getBaseFunctionFromSpatialToSpectral} />
            <ImagSpectral />
          </div>
        </div>
      </>
    );
  }
}

export default App;
