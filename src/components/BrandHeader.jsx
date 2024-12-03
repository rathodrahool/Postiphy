import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagicWandSparkles } from '@fortawesome/free-solid-svg-icons';

const BrandHeader = () => {
  return (
    <div className="text-center mb-6">
      <div className="flex items-center justify-center mb-2">
        <FontAwesomeIcon 
          icon={faMagicWandSparkles} 
          className="text-green-400 text-3xl mr-2" 
        />
        <h1 className="text-3xl font-bold text-white">Postiphy</h1>
      </div>
      <p className="text-blue-300 text-sm">
        Simple yet powerful hook generator that generates the best hooks so far
      </p>
    </div>
  );
};

export default BrandHeader;