import React, { useState } from "react";
import Navbar from '../components/Navbar';
// import AppRoutes from "./AppRoutes";
import Mixer from '../components/Mixer';
import Palette from '../components/Palette';

const App = () => {
  const [popupTrigger, setPopupTrigger] = useState(false);

  return (
    <div id='main'>
      <Mixer trigger={popupTrigger} setTrigger={setPopupTrigger} />
      <header>
        <h1>Coloring - Stackathon</h1>
      </header>
      <Navbar />
      <img src='/dragon.jpeg' alt='dragon' />
      <Palette trigger={popupTrigger} setTrigger={setPopupTrigger} />
    </div>
  );
};

export default App;
