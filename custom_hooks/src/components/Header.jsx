import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate=useNavigate()
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold">My Website</div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-300" onClick={()=>{
              navigate("/")
            }}>Home</a></li>
            <li><a href="#" className="hover:text-gray-300">About</a></li>
            <li><a href="#" className="hover:text-gray-300">Services</a></li>
            <li><a href="#" className="hover:text-gray-300" onClick={()=>{
              navigate("/contact")
            }}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
