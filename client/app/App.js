import React, { useState } from "react";
import Navbar from '../components/Navbar';
import Mixer from '../components/Mixer';
import Palette from '../components/Palette';

const App = () => {
  const [popupTrigger, setPopupTrigger] = useState(false);

  const addColorToPalette = (color) => {
    const emptyCell = document.querySelector('.empty-cell');
    if (emptyCell) {
      emptyCell.style.backgroundColor = color;
      emptyCell.classList = 'filled-cell'
      emptyCell.onClick.remove('handleSelectEmptyCell');
    }
  };  

  const handleMixColor = (color) => {
    // close the mixer popup by setting the popupTrigger variable to false
    setPopupTrigger(false);
    // add the mixed color to the palette component by passing it as an argument to a function in the palette component
    addColorToPalette(color);
  };
  

  return (
    <div id='main'>
      <Mixer trigger={popupTrigger} setTrigger={setPopupTrigger} onMixColor={handleMixColor} />
      <header>
        <h1>Coloring - Stackathon</h1>
      </header>
      <Navbar />
      <img src='/dragon.jpeg' alt='dragon' />
      <Palette trigger={popupTrigger} setTrigger={setPopupTrigger} addColorToPalette={addColorToPalette} />
    </div>
  );
};

export default App;
