import React, { Component } from 'react';
import './App.css';

import Comp from './components/Comp';
import Titlebar from './components/Titlebar';

import { loadImage, readFile } from './utils/loadImage';
import { defaultImg } from './data/defaultImg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: defaultImg,
      opacity: 1,
      zoom: 1
    };

    this.handleImageLoad = this.handleImageLoad.bind(this);
    this.handleOpacityChange = this.handleOpacityChange.bind(this);
    this.handleZoomChange = this.handleZoomChange.bind(this);
    this.updateImage = this.updateImage.bind(this);
  }

  componentDidMount() {
    document.ondragover = document.ondrop = e => {
      e.preventDefault();
    };

    document.body.ondrop = e => {
      const filePath = e.dataTransfer.files[0].path;

      readFile(this.updateImage, filePath);
      e.preventDefault();
    };
  }

  render() {
    return (
      <div className="App">
        <Titlebar
          handleImageLoad={this.handleImageLoad}
          handleOpacityChange={this.handleOpacityChange}
          handleZoomChange={this.handleZoomChange}
          opacity={this.state.opacity}
          zoom={this.state.zoom}
        />
        <div className="container">
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

  handleZoomChange(event) {
    this.setState({ zoom: event.target.value });
  }
}

export default App;
