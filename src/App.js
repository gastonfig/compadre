import React, { Component } from 'react';
import './App.css';

import image from './screenshot.png';

import Comp from './components/Comp';
import Controls from './components/Controls';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opacity: 1,
      zoom: 1
    };

    this.decrementZoom = this.decrementZoom.bind(this);
    this.handleOpacityChange = this.handleOpacityChange.bind(this);
    this.incrementZoom = this.incrementZoom.bind(this);
    this.updateZoom = this.updateZoom.bind(this);
  }

  render() {
    return (
      <div className="App">
        <div className="titleBar" />
        <div className="container">
          <Controls
            decrementZoom={this.decrementZoom}
            handleOpacityChange={this.handleOpacityChange}
            incrementZoom={this.incrementZoom}
            opacity={this.state.opacity}
            zoom={this.state.zoom}
          />
          <Comp
            image={image}
            opacity={this.state.opacity}
            zoom={this.state.zoom}
          />
        </div>
      </div>
    );
  }

  handleOpacityChange(event) {
    this.setState({ opacity: event.target.value });
  }

  decrementZoom() {
    this.updateZoom('down');
  }

  incrementZoom() {
    this.updateZoom('up');
  }

  updateZoom(upDown) {
    const zoom = this.state.zoom;
    const value = upDown === 'up' ? 0.1 : -0.1;
    const newZoom = zoom + value;

    this.setState({
      zoom: newZoom
    });
  }
}

export default App;
