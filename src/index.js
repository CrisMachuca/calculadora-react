//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import your own components

import Calculator from "./component/calculator.jsx";

//render your react application
ReactDOM.render(<Calculator />, document.querySelector("#app"));
