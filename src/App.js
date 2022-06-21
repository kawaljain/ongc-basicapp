import React, { useEffect, useState } from "react";

import UserAddress from "./components/user-address";
import MapUI from "./components/user-address/map-ui";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">Add Address</header>
      {/* <MapUI ></MapUI> */}
      <UserAddress />
    </div>
  );
}

export default App;
