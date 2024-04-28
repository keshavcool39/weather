
import React from 'react';

function ResetButton({ onClick }) {
  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      Reset
    </button>
  );
}

export default ResetButton;
