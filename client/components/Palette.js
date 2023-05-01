import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPaletteColors, selectPaletteColors } from '../features/paletteSlice';

const Palette = (props) => {
  const dispatch = useDispatch();
  const paletteColors = useSelector(selectPaletteColors);

  useEffect(() => {
    dispatch(fetchPaletteColors());
  }, [/* paletteColors, dispatch */]);

  const paletteCells = () => {
    let cells = [];
    if(paletteColors) {
      cells = paletteColors.map((color, index) => (
        <div
          className='filled-cell'
          key={`${index}`}
          style={{ backgroundColor: `rgb(${color.value.join(',')})` }}
          onClick={handleSelectFilledCell}
        />
      ));
    }
    for(let i = paletteColors.length; i < 24; i++) {
      cells.push(
        <div
          className='empty-cell'
          key={`${i}`}
          onClick={handleSelectEmptyCell}>
          Add color?
        </div>
      )
    }
    return cells;
  };

  const handleSelectEmptyCell = () => {
    props.setTrigger(true);
  }

  const handleSelectFilledCell = () => {
    // Change className to 'selected-cell'
  }

  return (
    <div id='palette'>
      {paletteCells() && paletteCells().length
      ? paletteCells().map(cell => cell)
      : null}
    </div>
  );
};

export default Palette;
