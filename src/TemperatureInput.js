import React from 'react'
import './Temp.css';
const scaleNames={
    c:"celsius",
    f:"fahrenheit",
}
function TemperatureInput({scale,temperature,onTemperatureChange}) {
    const onChangeHandle=(event)=>{
        onTemperatureChange(event.target.value);

    }
  return (
    <div id="out">
        <div id="in">
            <label><h2>Enter Temperature in {scaleNames[scale]}</h2></label>
            <div>
                <input type='text' value={temperature} onChange={onChangeHandle}/>
            </div>
        </div>
    </div>
  )
}

export default TemperatureInput