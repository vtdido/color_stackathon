import React from 'react';

const Palette = (props) => {
  const paletteCells = () => {
    const cells = [];
    for(let i = 0; i < 24; i++) {
      cells.push(i);
    }
    return cells;
  };

  const handleSelectEmptyCell = () => {
    props.setTrigger(true);
  }

  return (
    <div id='palette'>
      {paletteCells() && paletteCells().length
      ? paletteCells().map(cell => (
        <div
          className='empty-cell'
          key={`${cell}`}
          onClick={handleSelectEmptyCell}>
          Add color?
        </div>
      ))
      : null}
    </div>
  );
};

export default Palette;
