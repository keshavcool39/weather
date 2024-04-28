import React from 'react';

function ContactInfo({ email, phoneNumber }) {
  return (
    <div className=" min-h-screen bg-gray-100 p-4 rounded-md">
      <p className="text-lg font-bold mb-2">Contact Information</p>
      <div className="flex items-center mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 12a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M10 2C5.59 2 2 5.59 2 10c0 1.749.598 3.366 1.598 4.634l1.329-1.33A7.467 7.467 0 012.5 10c0-4.136 3.364-7.5 7.5-7.5 1.914 0 3.657.718 4.996 1.894l1.3-1.301C13.366 2.602 11.749 2 10 2zM2.5 12.797l-1.3 1.301C6.634 17.398 8.25 18 10 18c4.41 0 8-3.59 8-8s-3.59-8-8-8C5.59 2 2 5.59 2 10c0 .976.184 1.91.5 2.797zM12.5 10a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
            clipRule="evenodd"
          />
        </svg>
        <p>{phoneNumber}</p>
      </div>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 12a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M10 2C5.59 2 2 5.59 2 10c0 1.749.598 3.366 1.598 4.634l1.329-1.33A7.467 7.467 0 012.5 10c0-4.136 3.364-7.5 7.5-7.5 1.914 0 3.657.718 4.996 1.894l1.3-1.301C13.366 2.602 11.749 2 10 2zM2.5 12.797l-1.3 1.301C6.634 17.398 8.25 18 10 18c4.41 0 8-3.59 8-8s-3.59-8-8-8C5.59 2 2 5.59 2 10c0 .976.184 1.91.5 2.797zM13 12.25a.75.75 0 011.5 0v3.5a.75.75 0 01-1.5 0v-3.5zM8 12.25a.75.75 0 111.5 0v3.5a.75.75 0 01-1.5 0v-3.5z"
            clipRule="evenodd"
          />
        </svg>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default ContactInfo;
