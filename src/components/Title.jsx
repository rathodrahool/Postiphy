import React from 'react';

const Title = ({ children }) => {
  return (
    <h2 className="text-white text-lg font-bold mb-2">
      {children}
    </h2>
  );
};

export default Title;