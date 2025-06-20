import React from "react";
import "../styles/global.css";
import { AiOutlineLogin } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 h-40 items-center">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-10 px-4">
          <div>
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://static.wixstatic.com/media/ee7859_c05d5de85bb04ff1bf63a598e9fcdbb8~mv2.png/v1/fill/w_180,h_43,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/KimboticLogo.png"
                className="h-8"
                alt="Logo"
              />
            </a>
          </div>
          <div>
            <ul className="flex flex-row p-4 md:p-0 mt-4 font-medium rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/products"
                  className="block py-2 px-3 text-black bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              
            </ul>
          </div>
          <div className="flex md:order-2">
          <a
                  href="/signin"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                ><AiOutlineLogin /></a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
