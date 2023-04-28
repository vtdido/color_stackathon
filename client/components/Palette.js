import React from 'react';

const Palette = () => {
  const paletteCells = () => {
    const cells = [];
    for(let i = 0; i < 24; i++) {
      cells.push(i);
    }
    return cells;
  };

  return (
    <div id='palette'>
      {paletteCells() && paletteCells().length
      ? paletteCells().map(cell => (
        <div
          className='empty-cell'
          key={`${cell}`}
          // onClick={() => className='selected-cell'}
        />
      ))
      : null}
    </div>
  );
};

export default Palette;
