import React, { Component } from 'react';
import './App.css';

import Comp from './components/Comp';
import Titlebar from './components/Titlebar';

import { loadImage, readFile } from './utils/loadImage';
import { defaultImg } from './data/defaultImg';

const ipcRenderer = window.require('electron').ipcRenderer;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileName: undefined,
      image: defaultImg,
      opacity: '1',
      zoom: '1'
    };

    this.handleImageLoad = this.handleImageLoad.bind(this);
    this.handleOpacityChange = this.handleOpacityChange.bind(this);
    this.handleZoomChange = this.handleZoomChange.bind(this);
    this.updateImage = this.updateImage.bind(this);
    this.updateFileName = this.updateFileName.bind(this);
  }

  componentDidMount() {
    document.ondragover = document.ondrop = e => {
      e.preventDefault();
    };

    document.body.ondrop = e => {
      const file = e.dataTransfer.files[0];
      const fileName = file.name;
      const filePath = file.path;

      this.updateFileName(fileName);

      readFile(this.updateImage, filePath);
      e.preventDefault();
    };

    ipcRenderer.on('openFile', (event, message) => {
      this.handleImageLoad();
    });
  }

  render() {
    return (
      <div className="App">
        <Titlebar
          fileName={this.state.fileName}
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

  updateFileName(fileName) {
    fileName = fileName.replace(/^.*[\\/]/, '');

    this.setState({ fileName: fileName });
  }

  handleImageLoad() {
    loadImage(this.updateFileName, this.updateImage);
  }

  handleOpacityChange(event) {
    this.setState({ opacity: event.target.value });
  }

  handleZoomChange(event) {
    this.setState({ zoom: event.target.value });
  }
}

export default App;
