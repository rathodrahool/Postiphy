import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faStar, faPlus } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';

const HookTable = ({ hooks, onGenerateMore, onScoreSelect }) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('Hook copied to clipboard!');
  };

  if (!hooks || hooks.length === 0) return null;

  return (
    <div className="mt-6">
      <div className="bg-blue-700 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-600">
              <th className="px-4 py-3 text-left text-white">Hook</th>
              <th className="px-4 py-3 text-center text-white w-24">Score</th>
              <th className="px-4 py-3 text-center text-white w-16">Copy</th>
            </tr>
          </thead>
          <tbody>
            {hooks.map((hook, index) => (
              <tr key={index} className="border-t border-blue-600">
                <td className="px-4 py-3 text-white">{hook.text}</td>
                <td className="px-4 py-3 text-center">
                  <button 
                    onClick={() => onScoreSelect(hook.score)}
                    className="flex items-center justify-center text-yellow-400 hover:text-yellow-300 transition-colors w-full"
                  >
                    <FontAwesomeIcon icon={faStar} className="mr-1" />
                    <span>{hook.score}/10</span>
                  </button>
                </td>
                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() => copyToClipboard(hook.text)}
                    className="text-white hover:text-green-400 transition-colors"
                  >
                    <FontAwesomeIcon icon={faCopy} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={onGenerateMore}
        className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
      >
        <FontAwesomeIcon icon={faPlus} className="mr-2" />
        Generate More Hooks
      </button>
    </div>
  );
};

export default HookTable;