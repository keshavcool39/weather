// import React from 'react';

// const Third = ({ rise }) => {
//   return (
//     <div className="max-w-xs rounded overflow-hidden shadow-lg">
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">Sunrise & Sunset</div>
//         <div className="mb-2">
//           <span className="text-gray-700">Sunrise:</span>{' '}
//           <span className="text-xl font-semibold">{rise.sunrise}</span>
//         </div>
//         <div className="mb-2">
//           <span className="text-gray-700">Sunset:</span>{' '}
//           <span className="text-xl font-semibold">{rise.sunset}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Third;


import React from 'react';

const Third= ({ rise }) => {
  return (
    <div className="max-w-sm mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-lg shadow-lg p-6 space-y-4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <h2 className="text-2xl font-semibold tracking-wide">Sunrise & Sunset</h2>

      <div className="space-y-3">
        {/* Sunrise Time */}
        <div className="flex justify-between items-center border-b border-orange-300 pb-2">
          <span className="text-orange-100">Sunrise</span>
          <span className="font-bold text-lg text-yellow-200">{rise.sunrise}</span>
        </div>

        {/* Sunset Time */}
        <div className="flex justify-between items-center">
          <span className="text-orange-100">Sunset</span>
          <span className="font-bold text-lg text-yellow-200">{rise.sunset}</span>
        </div>
      </div>
    </div>
  );
};

export default Third;

