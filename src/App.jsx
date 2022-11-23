/* === Imports === */

import React from 'react';
import Screen from './Components/Screen';
import {westOfHouse} from "./map/locations";

/* === Variables === */

let copy = <div className="copy"><p className='title'>Hellscape</p><p>Copyright (c) 2022 Mar Mercy. All rights reserved.</p><p>Revision 00</p></div>;
let start = <div className="start"><p>{westOfHouse.name}</p><p>{westOfHouse.description}</p></div>;

/* === Components === */

function App() {
  return (
    <div className="App">
        <Screen sound={false} location={westOfHouse} score={0} moves={0} text={[copy, start]} typing={[]} inventory={[]} />
    </div>
  );
}

/* === Exports === */

export default App;