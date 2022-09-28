import React from 'react'

const InputField = ({
  value,
  setValue,
  currency,
  setCurrency,
  setFrontConversion,
  conversionValue,
  options,

}) => {
  
  return (
    <div>
      <input 
        type='number' 
        className='input'
        value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setFrontConversion(conversionValue);
          }}
        />

      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        {options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </div>
  )
};
export default InputField;
