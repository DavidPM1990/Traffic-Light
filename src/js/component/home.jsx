import React, { useState } from 'react';
import '../../styles/index.css';

const TrafficLight = () => {
  const [lightStates, setLightStates] = useState({
    roja: false,
    amarilla: false,
    verde: false,
    purpura: false
  });

  const [currentColor, setCurrentColor] = useState('roja');

  const handleLightClick = (clickedLight) => {
    setLightStates({
      roja: false,
      amarilla: false,
      verde: false,
      purpura: false,
      [clickedLight]: true
    });
    setCurrentColor(clickedLight);
  };

  const toggleColor = () => {
    if (currentColor === 'roja') {
      handleLightClick('verde');
    } else if (currentColor === 'verde') {
      handleLightClick('amarilla');
    } else {
      handleLightClick('roja');
    }
  };

  const handleTrafficLightCoolClick = () => {
 
    setLightStates({
      roja: false,
      amarilla: false,
      verde: false,
      purpura: true
    });
    setCurrentColor('purpura');
  };

  return (
    <div>
      <div id="barra"></div>
      <div id="semaforo">
        <div
          className={`luz roja ${lightStates.roja && 'encendido'}`}
          onClick={() => handleLightClick("roja")}
        ></div>
        <div
          className={`luz amarilla ${lightStates.amarilla && 'encendido'}`}
          onClick={() => handleLightClick("amarilla")}
        ></div>
        <div
          className={`luz verde ${lightStates.verde && 'encendido'}`}
          onClick={() => handleLightClick("verde")}
        ></div>
		
      </div>
      {lightStates.purpura && (
        <div
          className={`luz purpura ${lightStates.purpura && 'encendido'}`}
        ></div>
      )}
      <div className='d-flex justify-content-center mt-5'>
        <button className="btn btn-primary mt-3" onClick={toggleColor}>Change Color</button>
        <button className="btn btn-info mt-3 ml-3 ms-2" onClick={handleTrafficLightCoolClick}>Traffic Light Cool</button>
      </div>
    </div>
  );
};

export default TrafficLight;
