import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <div className="flex items-center text-red-400 text-sm mt-2">
      <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2" />
      <span>{message}</span>
    </div>
  );
};

export default ErrorMessage;