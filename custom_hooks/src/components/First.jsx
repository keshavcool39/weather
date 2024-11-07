// import React from "react";

// const First = ({ temperature}) => {
//   return (
//     <div className="max-w-xs rounded overflow-hidden shadow-lg">
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">Weather Details</div>
//         <div className="mb-2">
//           <span className="text-gray-700">Temperature:</span>{" "}
//           <span className="text-xl font-semibold">{temperature.temperature}°C</span>
//         </div>
//         <div className="mb-2">
//           <span className="text-gray-700">Pressure:</span>{" "}
//           <span className="text-xl font-semibold">{temperature.pressure}</span>
//         </div>
//         <div className="mb-2">
//           <span className="text-gray-700">Humidity:</span>{" "}
//           <span className="text-xl font-semibold">{temperature.humidity}%</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default First;




// import React from 'react';

// const First = ({ temperature }) => {
//   return (
//     <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-6 space-y-4">
//       <h2 className="text-xl font-semibold text-gray-700">Weather Stats</h2>
//       <div className="space-y-2">
//         <div className="flex justify-between items-center border-b pb-2">
//           <span className="text-gray-600">Temperature</span>
//           <span className="text-gray-800 font-bold">{temperature.temperature} °C</span>
//         </div>
//         <div className="flex justify-between items-center border-b pb-2">
//           <span className="text-gray-600">Pressure</span>
//           <span className="text-gray-800 font-bold">{temperature.pressure} hPa</span>
//         </div>
//         <div className="flex justify-between items-center">
//           <span className="text-gray-600">Humidity</span>
//           <span className="text-gray-800 font-bold">{temperature.humidity} %</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default First;



// import React from 'react';

// const First = ({ temperature }) => {
//   return (
//     <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-6 space-y-4 transition-transform duration-500 hover:scale-105">
//       <h2 className="text-xl font-semibold text-gray-700">Weather Stats</h2>
//       <div className="space-y-2">
//         {/* Temperature with conditional animation for values above 35°C */}
//         <div className={`flex justify-between items-center border-b pb-2 ${
//             temperature > 35 ? "animate-pulse text-red-600 font-bold" : ""
//           }`}>
//           <span className="text-gray-600">Temperature</span>
//           <span>{temperature.temperature} °C</span>
//         </div>

//         {/* Pressure */}
//         <div className="flex justify-between items-center border-b pb-2">
//           <span className="text-gray-600">Pressure</span>
//           <span className="text-gray-800 font-bold">{temperature.pressure} hPa</span>
//         </div>

//         {/* Humidity */}
//         <div className="flex justify-between items-center">
//           <span className="text-gray-600">Humidity</span>
//           <span className="text-gray-800 font-bold">{temperature.humidity} %</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default First;


import React from 'react';

const First = ({ temperature }) => {
  return (
    <div className="max-w-sm mx-auto bg-gradient-to-br from-blue-400 to-purple-500 text-white rounded-lg shadow-lg p-6 space-y-4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <h2 className="text-2xl font-semibold tracking-wide">Weather Report</h2>

      <div className="space-y-3">
        {/* Temperature with conditional pulsing animation if temperature is high */}
        <div className={`flex justify-between items-center border-b border-purple-300 pb-2 ${
          temperature > 35 ? "text-red-300 animate-pulse" : "text-white"
        }`}>
          <span className="text-purple-200">Temperature</span>
          <span className="font-bold text-lg">{temperature.temperature} °C</span>
        </div>

        {/* Pressure */}
        <div className="flex justify-between items-center border-b border-purple-300 pb-2">
          <span className="text-purple-200">Pressure</span>
          <span className="font-medium text-lg">{temperature.pressure} hPa</span>
        </div>

        {/* Humidity */}
        <div className="flex justify-between items-center">
          <span className="text-purple-200">Humidity</span>
          <span className="font-medium text-lg">{temperature.humidity} %</span>
        </div>
      </div>
    </div>
  );
};

export default First;
