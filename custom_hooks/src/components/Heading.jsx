import React from 'react';
import { useNavigate } from 'react-router-dom';

const Heading = () => {
    const navigate=useNavigate()
  return ( 
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4 item-center">Weather App</h1>
        <p className="text-gray-700">This is a simple page styled with Tailwind CSS.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={()=>{
            navigate("/dashboard")
        }}>
          Click Me
        </button>
      </div>
    </div>
  );
};

export default Heading;
