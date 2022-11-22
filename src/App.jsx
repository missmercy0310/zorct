/* === Imports === */

import React from 'react';
import Screen from './Components/Screen';

/* === Variables === */

let copy = <div className="copy"><p className='title'>Hellscape</p><p>Copyright (c) 2022 Mar Mercy. All rights reserved.</p><p>Revision 00</p></div>;
let start = <div className="start"><p>West of House</p><p>You are standing in an open field west of a white house, with a boarded front door.</p><p>There is a small mailbox here.</p></div>;

/* === Components === */

function App() {
  return (
    <div className="App">
        <Screen sound={false} location={["westOfHouse"]} score={0} moves={0} text={[copy, start]} typing={[]} inventory={[]} />
    </div>
  );
}

/* === Exports === */

export default App;