import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMixerColor, deleteMixerColors, selectMixerColors } from '../features/mixerSlice';
import { addNewColor } from '../features/colorLibrarySlice';
import ColorLibrary from './ColorLibrary';

const Mixer = (props) => {
  const dispatch = useDispatch();
  const mixerColors = useSelector(selectMixerColors);

  const [selectedColor, setSelectedColor] = useState('transparent');
  const [mixedColor, setMixedColor] = useState('transparent');
  const [cellStatus, setCellStatus] = useState([
    { status: 'empty', color: 'transparent' },
    { status: 'blank', color: 'transparent' },
    { status: 'blank', color: 'transparent' },
    { status: 'blank', color: 'transparent' },
    { status: 'blank', color: 'transparent' },
    { status: 'blank', color: 'transparent' },
    { status: 'blank', color: 'transparent' },
    { status: 'blank', color: 'transparent' },
    { status: 'blank', color: 'transparent' },
    { status: 'blank', color: 'transparent' },
    { status: 'blank', color: 'transparent' },
    { status: 'blank', color: 'transparent' }
  ]);
  const [cellIndex, setCellIndex] = useState(0);

  const mixerCells = cellStatus.map((cell, index) => (
    <div
      className={`mixer-cell-${cell.status}`}
      key={`${index}`}
      style={{ backgroundColor: cell.color }}
    />
  ));

  useEffect(() => {
    const mixItUp = () => {
      const red = [];
      const green = [];
      const blue = [];
      mixerColors.forEach(color => {
        red.push(color.value[0]);
        green.push(color.value[1]);
        blue.push(color.value[2]);
      });
      const colorAvg = [];
      colorAvg.push(Math.round(red.reduce((acc, num) => acc + num, 0)/red.length));
      colorAvg.push(Math.round(green.reduce((acc, num) => acc + num, 0)/green.length));
      colorAvg.push(Math.round(blue.reduce((acc, num) => acc + num, 0)/blue.length));
      return `rgb(${colorAvg.join(',')})`;
    }
    setMixedColor(mixItUp());
  }, [mixerColors]);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setCellStatus(prevStatus => {
      const nextStatus = [...prevStatus];
      nextStatus[cellIndex].color = color;
      return nextStatus;
    });
  };

  const handleAddColor = () => {
    setCellStatus(prevStatus => {
      const nextStatus = [...prevStatus];
      const emptyIndex = nextStatus.findIndex(cell => cell.status === 'empty');
      if (emptyIndex !== -1) {
        nextStatus[emptyIndex].status = 'filled';
        nextStatus[emptyIndex + 1].status = 'empty';
        nextStatus[emptyIndex].color = selectedColor;
      }
      const colorArray = selectedColor.slice(4, -1).split(',');
      const numberArray = colorArray.map(string => Number(string));
      dispatch(addMixerColor(numberArray));
      setCellIndex(cellIndex + 1);
      return nextStatus;
    });
  };
  
  const handleMix = () => {
    const colorArray = mixedColor.slice(4, -1).split(',');
    const numberArray = colorArray.map(string => Number(string));
    dispatch(addNewColor(numberArray));
    setSelectedColor('transparent');
    dispatch(deleteMixerColors());
    setCellStatus([
      { status: 'empty', color: 'transparent' },
      { status: 'blank', color: 'transparent' },
      { status: 'blank', color: 'transparent' },
      { status: 'blank', color: 'transparent' },
      { status: 'blank', color: 'transparent' },
      { status: 'blank', color: 'transparent' },
      { status: 'blank', color: 'transparent' },
      { status: 'blank', color: 'transparent' },
      { status: 'blank', color: 'transparent' },
      { status: 'blank', color: 'transparent' },
      { status: 'blank', color: 'transparent' },
      { status: 'blank', color: 'transparent' }
    ]);
    setCellIndex(0);
    props.setTrigger(false);
    // call the onMixColor function to close the mixer popup and add the mixed color to the palette component
    props.onMixColor(`rgb(${numberArray.join(',')})`);
  };
  
  return (props.trigger) ? (
    <div id='mixer'>
      <div id='mixer-inner'>
        {props.children}
        <ColorLibrary onColorSelect={handleColorSelect} />
        <div id='mixer-container'>
          {mixerCells && mixerCells.length
            ? mixerCells.map(cell => cell)
            : null}
          <button id='add-color-button' onClick={handleAddColor}>
            Add Color
          </button>
          <button id='mix-button' onClick={handleMix}>
            Mix
          </button>
        </div>
        <div id='preview'>
          Preview
          <div
            id='preview-window'
            style={{ backgroundColor: mixedColor }} />
        </div>
      </div>
    </div>
  ) : null;
};

export default Mixer;
