import React from 'react';
import { useDispatch } from 'react-redux';
import { addMixerColor } from '../features/mixerSlice';

const Palette = (props) => {
  const dispatch = useDispatch();

  const paletteCells = () => {
    const cells = [];
    for(let i = 0; i < 24; i++) {
      cells.push(i);
    }
    return cells;
  };

  const handleSelectEmptyCell = () => {
    props.setTrigger(true);
    dispatch(addMixerColor([0, 0, 0, 0]));
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
