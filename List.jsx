
import React from 'react';
import "./App.css";

import { Screen, Link } from "react-tiger-transition";

import locationData from './test_pois.json';

function Entry() {

    return (
        <Screen>
            <div
                style={{

                    //backgroundImage: 'url(' + require('./ListImg.jpg') + ')',
                    //backgroundSize: "cover",
                    //backgroundPosition: "center",

                    width: "100%",
                    height: "100%",

                }}
                >
                
                <div
                    className = "list"
                >
                    <h1
                        className = "title"
                    >
                        Our Locations
                    </h1>
                    {locationData.poi.map(Loc => {
                        return(
                        <div
                            className= "listElementWrapper"
                        >
                            <div
                                className = "listElement"
                            >
                                {Loc.address} 
                            </div>
                        </div>)
                    })}
                </div>
            </div>
        </Screen>
    );


}



export default Entry;