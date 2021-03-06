import React, {useState} from "react";
import { useEffect } from "react";
const Navbar = () => {

  const [view, setView] = useState(false)
   useEffect(()=>{
   /*  console.log(view); */
  },[view]) 

  const handleCloseMenu =()=>{
    setView(true)
    document.getElementById("menu").classList.add("hidden")
  
}
    const handleOpenMenu=()=>{
      setView(false)
      document.getElementById("menu").classList.remove("hidden")

    }

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
                    onClick={()=>handleOpenMenu()}
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

                  <div id="menu" className="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-black-pearl-900 border-r shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
                    <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                      <ul className="px-6 pt-32 text-gray-700 space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
                        
                        <li>
                          <a
                            href="#Home"
                            className="group relative behtmlFore:absolute behtmlFore:inset-x-0 behtmlFore:bottom-0 behtmlFore:h-2 behtmlFore:bg-cyan-100"
                          >
                            <span className="relative text-white">
                              Home
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#about-me"
                            className="group relative behtmlFore:absolute behtmlFore:inset-x-0 behtmlFore:bottom-0 behtmlFore:h-2 behtmlFore:origin-right behtmlFore:scale-x-0 behtmlFore:bg-cyan-100 behtmlFore:transition behtmlFore:duration-200 hover:behtmlFore:origin-left hover:behtmlFore:scale-x-100"
                          >
                            <span className="relative text-white">
                              About me
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#Skills"
                            className="group relative behtmlFore:absolute behtmlFore:inset-x-0 behtmlFore:bottom-0 behtmlFore:h-2 behtmlFore:origin-right behtmlFore:scale-x-0 behtmlFore:bg-cyan-100 behtmlFore:transition behtmlFore:duration-200 hover:behtmlFore:origin-left hover:behtmlFore:scale-x-100"
                          >
                            <span className="relative text-white">
                              Skills
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#Projects"
                            className="group relative behtmlFore:absolute behtmlFore:inset-x-0 behtmlFore:bottom-0 behtmlFore:h-2 behtmlFore:origin-right behtmlFore:scale-x-0 behtmlFore:bg-cyan-100 behtmlFore:transition behtmlFore:duration-200 hover:behtmlFore:origin-left hover:behtmlFore:scale-x-100"
                          >
                            <span className="relative text-white">
                              Projects
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#contact"
                            className="group relative behtmlFore:absolute behtmlFore:inset-x-0 behtmlFore:bottom-0 behtmlFore:h-2 behtmlFore:origin-right behtmlFore:scale-x-0 behtmlFore:bg-cyan-100 behtmlFore:transition behtmlFore:duration-200 hover:behtmlFore:origin-left hover:behtmlFore:scale-x-100"
                          >
                            <span className="relative text-white">
                              Contact
                            </span>
                          </a>
                        </li>
                      </ul>

                      <div className="flex justify-center flex-col border-t py-8 px-6 md:px-12 md:py-16 lg:border-t-0  lg:py-0 lg:pr-0 lg:pl-6">
                        <a
                          href="https://github.com/Jhonier16s"
                          target="_blank"
                          rel="noreferrer"
                          className="block px-6 hover:brightness-125 py-3 rounded-full bg-gradient-to-r from-GithubGradient1 to-GithubGradient2 text-center text-white"
                        >
                          Github
                        </a>
                        <button className="md:hidden lg:hidden bg-white text-dark mt-4 px-2 ml-auto mr-auto w-20 py-2 rounded-md hover:bg-GithubGradient1 hover:text-white transition duration-200  " onClick={()=>{handleCloseMenu()}}>Close</button>
                      </div>
                      <div>

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
