import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <div class="w-full min-h-[20rem] flex items-center justify-center bg-black pt-5 ">
        <div class="md:w-2/3 w-full px-4 text-white flex flex-col">
          <div class="w-full text-7xl font-bold">
            <h1 class="w-full md:w-2/3 ">
              Capturing moments, creating memories.
            </h1>
          </div>
          <div class="flex mt-8 flex-col md:flex-row md:justify-between">
            <p class="w-full md:w-2/3 text-gray-400">
              "Capture the magic of your special day with our professional
              wedding photography services. Cherish every moment forever."
            </p>
            <div class="w-44 pt-6 md:pt-0">
              <a class="bg-red-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center">
                Contact US
              </a>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="flex mt-24 mb-12 flex-row justify-between">
              <div class="">
                <h1 className="text-2xl">
                  The Nishchay Srivastava Photography<sup> © </sup>
                </h1>
              </div>
              <a class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                About
              </a>
              <a class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                Services
              </a>
              <a class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                Why us
              </a>
              <a class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                Contact
              </a>
              <a class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                PRE-WEDDING
              </a>
              <div class="flex flex-row space-x-8 items-center justify-between">
                <div className="socialmedia-links gap-4 flex text-2xl decoration-white">
                  <Link
                    to="https://instagram.com/nishchaysrivastavaphotography?igshid=MzRlODBiNWFlZA=="
                    target="_blank"
                    className="decoration-none"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                  <Link
                    to="https://www.youtube.com/@NishchaySrivastavaPhotography"
                    target="_blank"
                    className="decoration-none"
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </Link>
                  <Link
                    to="https://www.facebook.com/nishchaysrivastavaphotography?mibextid=ZbWKwL"
                    target="_blank"
                    className="decoration-none"
                  >
                    <i className="fa-brands fa-facebook decoration-none"></i>
                  </Link>
                </div>
              </div>
            </div>
            <hr class="border-gray-600" />
            <p class="w-full text-center my-12 text-gray-600">
              Copyright © 2023 INDIA, All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
