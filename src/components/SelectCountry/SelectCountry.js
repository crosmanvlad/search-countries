import React from 'react';
import PropTypes from 'prop-types';
import './SelectCountry.scss';

const SelectCountry = ({countries,handleChange}) => {
  const handle = (ev) => {
    handleChange(ev.nativeEvent.target.value);
  }

  return (
    <div className="select-country">
      <form data-ts="Form">
        <fieldset>
          <label>
            <select onChange={handle} placeholder='Please Select' required>
              <option></option>
              {
                countries.length ? countries.map(country => {
                  return (
                  <option key={country.name} value={country.code}>{country.name}</option>
                  )
                }) : null
              }
            </select>
          </label>
        </fieldset>
      </form>
    </div>
  )
};

SelectCountry.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  handleChange: PropTypes.func.isRequired
}

export default SelectCountry;