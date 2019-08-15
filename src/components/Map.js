import React from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            center: {
                lat: 59.95,
                lng: 30.33
            },
            zoom: 11
        };
    }
    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                bootstrapURLKeys={{key: "AIzaSyAwDlaMxPqLGTAchUYWM6mO7r__BqOkiFI"}}
                yesIWantToUseGoogleMapApiInternals
                defaultCenter={this.state.center}
                defaultZoom={this.state.zoom}
                >
                    <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
  }

  export default Map;