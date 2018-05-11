import React, { Component } from 'react';
import './App.css';

import Comp from './components/Comp';
import Controls from './components/Controls';

import { loadImage } from './utils/loadImage';
import { defaultImg } from './data/defaultImg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: defaultImg,
      opacity: 1,
      zoom: 1
    };

    this.decrementZoom = this.decrementZoom.bind(this);
    this.handleImageLoad = this.handleImageLoad.bind(this);
    this.handleOpacityChange = this.handleOpacityChange.bind(this);
    this.incrementZoom = this.incrementZoom.bind(this);
    this.updateImage = this.updateImage.bind(this);
    this.updateZoom = this.updateZoom.bind(this);
  }

  render() {
    return (
      <div className="App">
        <button className="loadButton" onClick={this.handleImageLoad}>
          Load
        </button>
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
            image={this.state.image}
            opacity={this.state.opacity}
            zoom={this.state.zoom}
          />
        </div>
      </div>
    );
  }

  updateImage(image) {
    this.setState({ image: image });
  }

  handleImageLoad() {
    loadImage(this.updateImage);
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
