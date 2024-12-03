import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="bg-blue-800 p-8 rounded-lg shadow-lg w-full max-w-2xl border border-blue-700">
      {children}
    </div>
  );
};

export default Card;