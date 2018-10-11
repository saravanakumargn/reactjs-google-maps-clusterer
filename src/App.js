import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { compose, withProps, withHandlers } from 'recompose';
import MarkerClusterer from 'react-google-maps/lib/components/addons/MarkerClusterer';
import { randomPosition } from '@turf/random';
import CircularProgress from '@material-ui/core/CircularProgress';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import uniqid from 'uniqid';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import logo from './logo.svg';
import './App.css';

const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyARtVW-A41AQRDz0Zm9WAva78ZgV5TAARQ&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withHandlers({
    onMarkerClustererClick: () => (markerClusterer) => {
      const clickedMarkers = markerClusterer.getMarkers()
      console.log(`Current clicked markers length: ${clickedMarkers.length}`)
      console.log(clickedMarkers)
    },
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{ lat: 25.0391667, lng: 121.525 }}
  >
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.markers.map(marker => (
        <Marker
          key={marker.id}
          position={{ lat: parseFloat(marker.latitude), lng: parseFloat(marker.longitude) }}
        />
      ))}
    </MarkerClusterer>
  </GoogleMap>
);

class App extends Component {
  componentWillMount() {
    this.setState({ markers: [] })
  }
  state = {
    numberCount: 100,
    isLoading: false,
  };

  onChange = () => {
    if (!this.state.isLoading) {
      // console.log('onChangedd');
      // let markerData = [];
      this.setState(
        {
          isLoading: true,
          markers: [],
        },
        () => {

          let jsonUrl = '';
          switch (this.state.numberCount) {
            case 100:
              jsonUrl = 'https://gist.githubusercontent.com/saravanakumargn/416de2c54af114c54f1cca8d161b5a39/raw/215034acca7f3d8be0ecd77ad6d2a2a2826e4545/data_100.json';
              break;
            case 500:
              jsonUrl = 'https://gist.githubusercontent.com/saravanakumargn/a3a6f67f0fad2dbd310a67dad9edf163/raw/03f1e3561a734d7b55bbd7888c7749bbb02258a5/data_500.json';
              break;
            case 1000:
              jsonUrl = 'https://gist.githubusercontent.com/saravanakumargn/f0aa9985935504c70dfc4f11dea3a0e0/raw/8e495c6c1d0e9b7ecf9904b60d26a9e993c5e840/data_1000.json';
              break;
            case 2000:
              jsonUrl = 'https://gist.githubusercontent.com/saravanakumargn/98e4657b58a400f653eb53b0cc3e905a/raw/8affea8c43e177f66aa179ba1329d477551ff2e4/data_2000.json';
              break;
            case 4000:
              jsonUrl = 'https://gist.githubusercontent.com/saravanakumargn/1525eda6e8cc33c2ef6dc5dde9a20347/raw/20b2ccb75caffdebdcc9c2184263ecd599501b1d/data_4000.json';
              break;
            case 6000:
              jsonUrl = 'https://gist.githubusercontent.com/saravanakumargn/1fa7121c3a8ca53d4117abde5e03595e/raw/8383068132b9a27e649e945bf40a62a5bcfc347c/data_6000.json';
              break;
            default:
              jsonUrl = 'https://gist.githubusercontent.com/saravanakumargn/416de2c54af114c54f1cca8d161b5a39/raw/215034acca7f3d8be0ecd77ad6d2a2a2826e4545/data_100.json';
              break;
          }

          fetch(jsonUrl)
            .then(res => res.json())
            .then(data => {
              console.log(data);
              this.setState({ markers: data, isLoading: false, });
            });

          // for(let i=0; i<=this.state.numberCount; i++) {
          //   var position = randomPosition([-180, -90, 180, 90]);
          //   // console.log(position);
          //   markerData.push({
          //     markerId: uniqid(),
          //     longitude: position[0],
          //     latitude: position[1]
          //   });
          // }
          // this.setState({
          //   markers: markerData,
          //   isLoading: false,
          // }); 
        });
    }
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleChange = event => {
    this.setState({ numberCount: event.target.value });
  };
  render() {
    return (
      <div>
        <MapWithAMarkerClusterer markers={this.state.markers} />

        <div className="controls">
          {/* <TextField
          id="standard-name"
          label="Name"
          value={this.state.numberCount}
          onChange={this.handleChange('numberCount')}
          className="textField"
          margin="normal"
        />
        <br/> */}

          {/* <InputLabel htmlFor="age-simple">Age</InputLabel> */}
          <Select
            value={this.state.numberCount}
            onChange={this.handleChange}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          >
            <MenuItem value={100}>100</MenuItem>
            <MenuItem value={500}>500</MenuItem>
            <MenuItem value={1000}>1000</MenuItem>
            <MenuItem value={2000}>2000</MenuItem>
            <MenuItem value={4000}>4000</MenuItem>
            <MenuItem value={6000}>6000</MenuItem>
          </Select>

          <div className="wrapper">
            <Button
              variant="contained"
              color="primary"
              disabled={this.state.isLoading}
              onClick={() => this.onChange()}
            >
              Generate
          </Button>
            {this.state.isLoading && <CircularProgress size={24} className="buttonProgress" />}
          </div>

        </div>
      </div>

    )
  }
}

export default App;
