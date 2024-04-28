import React from "react";

const First = ({ temperature}) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Weather Details</div>
        <div className="mb-2">
          <span className="text-gray-700">Temperature:</span>{" "}
          <span className="text-xl font-semibold">{temperature.temperature}°C</span>
        </div>
        <div className="mb-2">
          <span className="text-gray-700">Pressure:</span>{" "}
          <span className="text-xl font-semibold">{temperature.pressure}</span>
        </div>
        <div className="mb-2">
          <span className="text-gray-700">Humidity:</span>{" "}
          <span className="text-xl font-semibold">{temperature.humidity}%</span>
        </div>
      </div>
    </div>
  );
};

export default First;
