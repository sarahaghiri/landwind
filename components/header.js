/* eslint-disable @next/next/no-img-element */
const header = () => {
  return (
    <header className=" fixed w-full">
      <nav className="bg-gray-900 py-2.5">
        <div className="flex items-center justify-between max-w-screen-xl px-4 mx-auto">
          {/* ////////////////////////////////////////////////////////////////////////// */}
          <a href="#" className="flex items-center">
            <img
              src="/logo.svg"
              className="h-6 mr-3 sm:h-9"
              alt="Landwind Logo"
            />
            <span className=" text-xl font-semibold  text-white">Landwind</span>
          </a>
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className=" text-white   font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 hover:bg-gray-700  "
            >
              Log in
            </a>
            <a className="text-white     font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 bg-purple-600 hover:bg-purple-700  ">
              Download
            </a>
            {/* ///////////////////////res */}
            <button
              type="button"
              className=" items-center p-2 ml-1 text-sm  rounded-lg lg:hidden    text-gray-400 hover:bg-gray-700 "
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            {/* //////////////////////////// */}
          </div>
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1 ">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  className="py-2 pl-3 pr-4  bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a className="py-2 pl-3 pr-4  border-b    lg:border-0 lg:p-0 text-gray-400 lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700">
                  Company
                </a>
              </li>
              <li>
                <a className="py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                  Marketplace
                </a>
              </li>
              <li>
                <a className="py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                  Features
                </a>
              </li>
              <li>
                <a
                  h
                  className="py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Team
                </a>
              </li>
              <li>
                <a className="py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default header;
