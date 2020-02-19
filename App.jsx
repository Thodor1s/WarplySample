import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Entry from "./Entry.jsx";
import Map from "./Map.jsx";
import List from "./List.jsx";


import "react-tiger-transition/styles/main.min.css";

import {
    Navigation,
    Route,
    Screen,
    Link,
    glide,
} from "react-tiger-transition";



glide({
    name: 'glide-left',
    direction: 'left'
});

glide({
    name: 'glide-bottom',
    direction: 'bottom'
});

glide({
    name: 'glide-right',
    direction: 'right'
});




const screenStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FAFAFA",
};

const displayStyle = {
    

    borderColor: "black"
};



document.getElementById("root").style.height = "100vh";

document.body.style.backgroundColor = 'black';

export default () => (

    <Router>
        <Navigation>

            <Route exact path="/">
                {// First Thing in Path / is to get Geolocation and saves it as prop
                }
                <script>
                    if (navigator.geolocation) { //check if geolocation is available
                        navigator.geolocation.getCurrentPosition(function (position) { })
                    }
                </script>
                <Entry/>
            </Route>

            <Route path="/Locations/:id">
                <Screen style={{ display: "flex" }}>
                    <Screen display style={{ display: "flex" }}>
                        
                            <Route
                                key="Map"
                                exact
                                path="/Locations/Map"
                                screen
                                screenProps={{
                                    style: {                                    
                                        backgroundColor: "black",
                                        bottom: "80px"
                                    }
                                }}
                            >
                                <Map/>
                            
                                
                            </Route>
                            <Route
                                key="List"
                                exact
                                path="/Locations/List"
                                screen
                                screenProps={{
                                    style: {
                                        backgroundColor: "#878787"
                                    }
                                }}
                            >
                                <List/>
                            </Route>
                        ))}
                    </Screen>
                  
                    










                    <div
                        className="bar"
                    >
                        <div className="locationsbarWrapper">
                        <div className="locationsButtonWrapper">
                            <Link 
                                className="button"
                                key="Map"
                                to="/locations/Map"
                                transition='glide-right'
                            >
                                Map
                            </Link>
                        </div>
                        <div className="locationsButtonWrapper">
                            <Link
                                className="button"
                                key="List"
                                to="/locations/List"
                                transition='glide-left'
                            >
                                List
                            </Link>
                        </div>
                        <div className="locationsButtonWrapper">
                            <Link
                                className="button"
                                to="/"
                                transition="glide-right"
                                style={{ top: "50%" }}

                            >
                                Back to home page
                            </Link>
                        </div>
                        </div>

                    </div>
                    
                </Screen>
            </Route>




        </Navigation>
    </Router>
);