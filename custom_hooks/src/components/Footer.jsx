import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate=useNavigate()
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>&copy; 2024 My Website. All rights reserved.</p>
        </div>
        <div>
          <ul className="flex space-x-4">
           
            <li>
              <a href="#" className="hover:text-gray-400">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">Services</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400" onClick={()=>{
                navigate("/contact")
              }}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
