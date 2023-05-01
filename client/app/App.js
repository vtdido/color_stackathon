import React, { useState } from "react";
import Navbar from '../components/Navbar';
import Mixer from '../components/Mixer';
import Palette from '../components/Palette';

const App = () => {
  const [popupTrigger, setPopupTrigger] = useState(false);

  const handleMixColor = (color) => {
    setPopupTrigger(false);
  };  

  return (
    <div id='main'>
      <Mixer trigger={popupTrigger} setTrigger={setPopupTrigger} onMixColor={handleMixColor} />
      <header>
        <h1>Coloring - Stackathon</h1>
      </header>
      <Navbar />
      <img src='/dragon.jpeg' alt='dragon' />
      <Palette trigger={popupTrigger} setTrigger={setPopupTrigger} onMixColor={handleMixColor} />
    </div>
  );
};

export default App;
