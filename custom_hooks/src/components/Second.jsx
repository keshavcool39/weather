import React from 'react';

const Second = ({ area}) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Area Information</div>
        <div className="mb-2">
          <span className="text-gray-700">Country:</span>{' '}
          <span className="text-xl font-semibold">{area.country}</span>
        </div>
        <div className="mb-2">
          <span className="text-gray-700">Latitude:</span>{' '}
          <span className="text-xl font-semibold">{area.latitude}</span>
        </div>
        <div className="mb-2">
          <span className="text-gray-700">Longitude:</span>{' '}
          <span className="text-xl font-semibold">{area.longitude}</span>
        </div>
        <div className="mb-2">
          <span className="text-gray-700">Region:</span>{' '}
          <span className="text-xl font-semibold">{area.region}</span>
        </div>
        <div className="mb-2">
          <span className="text-gray-700">Population:</span>{' '}
          <span className="text-xl font-semibold">{area.population}</span>
        </div>
      </div>
    </div>
  );
};

export default Second;
