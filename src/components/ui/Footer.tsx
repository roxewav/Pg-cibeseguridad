import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-10 border-t border-gray-200">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-6">
        {/* Company Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">COMPANY</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-black">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">Features</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">Works</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">Career</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">HELP</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-black">Customer Support</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">Delivery Details</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">Terms & Conditions</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">RESOURCES</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-black">Free eBooks</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">Development Tutorial</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">How to - Blog</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">Youtube Playlist</a></li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className="md:col-span-2">
          <h3 className="font-bold text-lg mb-4">SUBSCRIBE TO NEWSLETTER</h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter email address"
              className="flex-grow px-4 py-2 rounded-l-full border-2 border-gray-300 focus:outline-none"
            />
            <button className="px-6 py-2 bg-black text-white rounded-r-full hover:bg-gray-800">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
        {/* Copyright and Contact */}
        <p className="text-gray-500 text-sm">
          © Copyright 2021, All Rights Reserved
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <p className="text-gray-600">CALL US <span className="font-bold">(239) 555-0108</span></p>
          <p className="text-gray-600">EMAIL US <span className="font-bold">info@rareblocks.xyz</span></p>
        </div>
        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-600 hover:text-black"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-gray-600 hover:text-black"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-gray-600 hover:text-black"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-gray-600 hover:text-black"><i className="fab fa-github"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
