import { useState } from 'react';

const TextBox = ({ initialValue, onChange }) => {
  const [value, setValue] = useState(initialValue || '');

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
};

export default TextBox;