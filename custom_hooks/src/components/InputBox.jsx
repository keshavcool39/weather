import React from 'react';

const InputBox = ({ placeholder,  onChange }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <input
        className="border border-gray-300 focus:border-blue-500 rounded-md py-2 px-4 w-64"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputBox;
