import React from 'react';

const DereceInput = ({ value, onChange }) => {
  return (
    <input
      type="number"
      className="form-control Hover"
      id="derece"
      placeholder="Celsius"
      value={value}
      onChange={onChange}
    />
  );
}

export default DereceInput;
