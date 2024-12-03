import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagic } from '@fortawesome/free-solid-svg-icons';

const Button = ({ onClick, children, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-green-500 text-white py-2 px-4 rounded-lg flex items-center justify-center mt-4 transition-colors ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'
      }`}
    >
      <FontAwesomeIcon icon={faMagic} className="mr-2" />
      {children}
    </button>
  );
};

export default Button;