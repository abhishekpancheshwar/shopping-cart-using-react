import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';


export default function Footer(){



    return (
        <footer className="bg-blue-900 py-8">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="text-white">
          <h3 className="font-semibold hover:text-gray-400">Shopping Cart</h3>
          <p className='hover:text-gray-400'>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex">
          <a href="#" className="text-white hover:text-gray-400 mx-2">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-400 mx-2">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-400 mx-2">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-400 mx-2">
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </footer>
    )
}