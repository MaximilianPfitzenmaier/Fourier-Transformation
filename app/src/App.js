import React from 'react';
import BaseGrid from './components/fft/BaseGrid';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="App">
          <BaseGrid></BaseGrid>
        </div>
      </>
    );
  }
}

export default App;
