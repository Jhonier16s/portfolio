import React from "react";
const Navbar = () => {
  return (
    <>
      <div className="">
        <header>
          <div className="relative z-20 border-b bg-black-pearl-900 ">
            <div className="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-4">
              <div className="flex items-center justify-between">
                <div className="relative z-20">
                  <a href="#home">
                    <h2 className="text-white">Logo</h2>
                  </a>
                </div>

                <div className="flex items-center justify-end  lg:border-l-0">
                  <input
                    type="checkbox"
                    name="hamburger"
                    id="hamburger"
                    className="peer"
                    hidden
                  />
                  <label
                    htmlFor="hamburger"
                    className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
                  >
                    <div
                      aria-hidden="true"
                      className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                    ></div>
                    <div
                      aria-hidden="true"
                      className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                    ></div>
                  </label>

                  <div className="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-black-pearl-900 border-r shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
                    <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                      <ul className="px-6 pt-32 text-gray-700 space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
                        <li>
                          <a
                            href="#Home"
                            className="group relative behtmlFore:absolute behtmlFore:inset-x-0 behtmlFore:bottom-0 behtmlFore:h-2 behtmlFore:bg-cyan-100"
                          >
                            <span className="relative text-black-pearl-200">
                              Home
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#about-me"
                            className="group relative behtmlFore:absolute behtmlFore:inset-x-0 behtmlFore:bottom-0 behtmlFore:h-2 behtmlFore:origin-right behtmlFore:scale-x-0 behtmlFore:bg-cyan-100 behtmlFore:transition behtmlFore:duration-200 hover:behtmlFore:origin-left hover:behtmlFore:scale-x-100"
                          >
                            <span className="relative text-black-pearl-200">
                              About me
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#home"
                            className="group relative behtmlFore:absolute behtmlFore:inset-x-0 behtmlFore:bottom-0 behtmlFore:h-2 behtmlFore:origin-right behtmlFore:scale-x-0 behtmlFore:bg-cyan-100 behtmlFore:transition behtmlFore:duration-200 hover:behtmlFore:origin-left hover:behtmlFore:scale-x-100"
                          >
                            <span className="relative text-black-pearl-200">
                              Portfolio
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#home"
                            className="group relative behtmlFore:absolute behtmlFore:inset-x-0 behtmlFore:bottom-0 behtmlFore:h-2 behtmlFore:origin-right behtmlFore:scale-x-0 behtmlFore:bg-cyan-100 behtmlFore:transition behtmlFore:duration-200 hover:behtmlFore:origin-left hover:behtmlFore:scale-x-100"
                          >
                            <span className="relative text-black-pearl-200">
                             Services
                            </span>
                          </a>
                        </li>
                      </ul>

                      <div className="border-t py-8 px-6 md:px-12 md:py-16 lg:border-t-0  lg:py-0 lg:pr-0 lg:pl-6">
                        <a
                          href="#home"
                          className="block px-6 hover:brightness-125 py-3 rounded-full bg-gradient-to-r from-GithubGradient1 to-GithubGradient2 text-center text-white"
                        >
                          Github
                        </a>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
