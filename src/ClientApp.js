//this is gonna be all the code that runs only in the browser
import React from "react";
import { hydrate } from "react-dom";
import App from "./App";

//any other browser-only things
hydrate(<App />, document.getElementById("root"));
