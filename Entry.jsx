
import React from 'react';

import "./App.css";

import Logo from "./Logo.png"

//

import { Screen, Link } from "react-tiger-transition";

function Entry() {

    return (
        <Screen>
            <div
                style={{

                    //Background Image

                    backgroundImage: 'url(' + require('./EntryImg.jpg') + ')',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "100%"
                }}
            >

                <div
                    className="entry"
                >
                    <img
                        src={Logo}
                        style={{
                            width: "100px",
                        }}
                    />
                    <text className="entrytext">
                        <br />
                        We're <b>Rop-e-r</b>, the
                        world's foremost
                        yachting supply
                        company. Find where
                        our stores are located by
                        pressing the button
                        below!
                    </text>
                </div>
            </div>
            <div
                className="bar"
            >
                <div
                    className="entryButtonWrapper"
                >
                    <Link
                        className="button"
                        to="/Locations/Map"
                        transition='glide-left'
                    >
                        Find us!
                            </Link>
                </div>
            </div>
        </Screen>
    );


}



export default Entry;