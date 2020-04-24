import React from 'react';
import './CityInput.scss';

const CityInput = ({handleSearch}) => {
  
  const handleChange = (ev) => {
    let val = ev.nativeEvent.target.value;
    if (val.length >= 3) {
      handleSearch(val);
    }
  }

  return (
    <div className="city-input">
      <form data-ts="Form">
        <fieldset>
          <label>
            <input onChange={handleChange} type="text" required/>
          </label>
        </fieldset>
      </form>
    </div>
  )
};

export default CityInput;
