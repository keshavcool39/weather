import React from 'react';

const Third = ({ rise }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Sunrise & Sunset</div>
        <div className="mb-2">
          <span className="text-gray-700">Sunrise:</span>{' '}
          <span className="text-xl font-semibold">{rise.sunrise}</span>
        </div>
        <div className="mb-2">
          <span className="text-gray-700">Sunset:</span>{' '}
          <span className="text-xl font-semibold">{rise.sunset}</span>
        </div>
      </div>
    </div>
  );
};

export default Third;
