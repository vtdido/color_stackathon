import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchColorLibrary, selectColorLibrary } from '../features/colorLibrarySlice';

const ColorLibrary = (props) => {
  const dispatch = useDispatch();
  const colorLibrary = useSelector(selectColorLibrary);

  useEffect(() => {
    dispatch(fetchColorLibrary());
  }, [dispatch]);

  const rgb = (color) => `rgb(${color.value[0]},${color.value[1]},${color.value[2]})`;

  const handleColorSelect = (color) => {
    props.onColorSelect(rgb(color));
  };

  return (
    <div id='color-library'>
      {colorLibrary && colorLibrary.length
      ? colorLibrary.map(color => (
        <div 
          className='library-cell'
          key={color.id}
          style={{ backgroundColor: rgb(color)}}
          onClick={() => handleColorSelect(color)}
        />
      ))
      : null}
    </div>
  );
};

export default ColorLibrary;
