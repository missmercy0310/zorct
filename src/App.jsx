/* === Imports === */

import React from 'react';
import Screen from './Components/Screen';

/* === Variables === */

let copy = <div className="copy"><p className='title'>Hellscape</p><p>Copyright (c) 2022 Mar Mercy. All rights reserved.</p><p>Revision 00</p></div>;
let welcome = <div className='welcome'><p>You have been sent to Hell for misuse of the word "multitudinous." Have a look around.</p></div>
let start = <div className="start"><p>West of House</p><p>You are standing in an open field west of a white house, with a boarded front door.</p><p>There is a small mailbox here.</p></div>;

/* === Components === */

function App() {
  return (
    <div className="App">
        <Screen sound={true} location={"West of House"} score={0} moves={0} text={[copy, welcome, start]} typing={[]} />
    </div>
  );
}

/* === Exports === */

export default App;