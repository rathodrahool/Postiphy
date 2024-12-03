import React from 'react';

const TextArea = ({ value, onChange, placeholder, disabled }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`w-full h-32 p-4 border-2 border-green-500 rounded-lg text-gray-700 ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      placeholder={placeholder}
    />
  );
};

export default TextArea;