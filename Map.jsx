//   This class is going places.
//   It doesn't really work.
//   !!!!!!!!!!!!!!!!!!!!!!!!!!!

import "./App.css";

import React from "react";

import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow //   Elements won't draw on map
} from "react-google-maps";

import locationData from './test_pois.json'; 

import mapStyles from './MapStyles.jsx';


function GMap() {
   
    return (
        <GoogleMap
            defaultZoom={7}
            defaultCenter={{ lat: 39.0742, lng: 23.8243 }}
            //   Styles from
            defaultOptions={{ styles: mapStyles }}
        >
            {/*
             
             Here is where locations would go and they would look something
             like this: 
             
              locationData.poi.map(Loc => {
                <Marker
                    key={Loc.id}
                    position={{
                        lat: Loc.latitude,
                        lng: Loc.longitude
                    }}


                />
            })
            
            Unfortunately it appears that for multiple browsers and for 
            - as I understand it - any kind of element, for some reason 
            it won't draw elements on top of Google Maps anymore. 

            So expect a replacement for this class that actually delivers
            because as far as I've seen, my other project broke too.
            
            */}
        </GoogleMap>
    );
}


const MapWrapped = withScriptjs(withGoogleMap(GMap));

export default function Map() {
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <MapWrapped

                //   I'm leaving my personal API key in. Pls don't abuse.
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
                    "[PLS USE YOUR OWN API KEY]"
                    }`}
                loadingElement={<div style={{ height: `100%`}} />}
                containerElement={<div style={{ height: `100%`}} />}
                mapElement={<div style={{ height: `100%`}} />}
            />
        </div>
    );
}
