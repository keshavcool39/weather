// import React from 'react';

// const Second = ({ area}) => {
//   return (
//     <div className="max-w-xs rounded overflow-hidden shadow-lg">
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">Area Information</div>
//         <div className="mb-2">
//           <span className="text-gray-700">Country:</span>{' '}
//           <span className="text-xl font-semibold">{area.country}</span>
//         </div>
//         <div className="mb-2">
//           <span className="text-gray-700">Latitude:</span>{' '}
//           <span className="text-xl font-semibold">{area.latitude}</span>
//         </div>
//         <div className="mb-2">
//           <span className="text-gray-700">Longitude:</span>{' '}
//           <span className="text-xl font-semibold">{area.longitude}</span>
//         </div>
//         <div className="mb-2">
//           <span className="text-gray-700">Region:</span>{' '}
//           <span className="text-xl font-semibold">{area.region}</span>
//         </div>
//         <div className="mb-2">
//           <span className="text-gray-700">Population:</span>{' '}
//           <span className="text-xl font-semibold">{area.population}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Second;

import React from 'react';

const Second = ({ area }) => {
  return (
    <div className="max-w-md mx-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg p-6 space-y-4 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <h2 className="text-2xl font-semibold tracking-wider">{area.country}</h2>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center border-b border-purple-300 pb-2">
          <span className="text-purple-100">Latitude</span>
          <span className="font-medium">{area.latitude}°</span>
        </div>

        <div className="flex justify-between items-center border-b border-purple-300 pb-2">
          <span className="text-purple-100">Longitude</span>
          <span className="font-medium">{area.longitude}°</span>
        </div>

        <div className="flex justify-between items-center border-b border-purple-300 pb-2">
          <span className="text-purple-100">Region</span>
          <span className="font-medium">{ area.region}</span>
        </div>

        <div className={`flex justify-between items-center ${
          area.population > 1000000 ? "text-yellow-400 animate-pulse" : "text-green-200"
        }`}>
          <span className="text-purple-100">Population</span>
          <span className="font-bold">{area.population}</span>
        </div>
      </div>
    </div>
  );
};

export default Second;
