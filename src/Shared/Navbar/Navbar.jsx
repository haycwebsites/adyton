import { Link, NavLink } from "react-router-dom";
import useScrollPosition from "./useScrollPosition";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { BiChevronDown, BiSun } from "react-icons/bi";
import { IoMoonSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useHayc } from "../../hayc/config-context";

const Navbar = () => {
  const { t, img, config } = useHayc();
  const nav = config.navConfig;
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const scrollPosition = useScrollPosition();
  const navbarBgColor =
    scrollPosition > 100 ? "lg:bg-lightBlack" : "lg:bg-transparent";

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <nav
      className={` w-full lg:fixed font-Lora z-10  lg:px-5 lg:py-2  transition-all duration-300 ${navbarBgColor} `}
    >
      <div className="lg:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className=" w-48 lg:w-52 lg:p-4 ">
            <Link to="/">
              <img
                src={img(nav.logo)}
                className="hidden lg:block w-full"
                alt={t(nav.altLogo)}
              />
            </Link>
          </div>
          <div className="px-3 w-full lg:hidden flex justify-between text-lightBlack lg:text-white dark:text-white bg-khaki h-[70px]  items-center  p-3">
            <div className=" w-28  ">
              <Link to="/">
                <img
                  src={img(nav.mobileLogo)}
                  className="block lg:hidden "
                  alt={t(nav.altMobileLogo)}
                />
              </Link>
            </div>
            <div className="flex items-center ">
              <span onClick={handleClick} className="mr-3 cursor-pointer">
                {isDarkMode ? (
                  <BiSun
                    className="text-white"
                    title={t(nav.lightModeTitle)}
                    size={20}
                  />
                ) : (
                  <IoMoonSharp
                    size={20}
                    className="text-white"
                    title={t(nav.darkModeTitle)}
                  />
                )}
              </span>
              <button
                className="lg:hidden block focus:outline-none "
                onClick={toggleNavbar}
              >
                {isOpen ? (
                  <IoMdClose className="w-6 h-6 text-white" />
                ) : (
                  <FaBars className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } text-left w-full lg:w-fit  ease-in-out lg:flex space-y-2 lg:space-y-0 lg:text-center space-x-0 lg:space-x-3 xl:space-x-4 2xl:space-x-5 3xl:space-x-[24px] flex flex-col lg:flex-row text-sm text-lightBlack lg:text-white dark:text-white uppercase font-normal bg-white dark:bg-normalBlack lg:bg-transparent dark:lg:bg-transparent py-3 lg:py-0 `}
          >
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} text-lightBlack lg:text-white dark:text-white lg:border-b-0 px-3 py-2 w-full block transition-all duration-300`}
              to="/"
            >
              {t(nav.home)}
            </NavLink>
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-300`}
              to="/about"
            >
              {t(nav.about)}
            </NavLink>
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative `}
              to="#"
            >
              <span className="flex items-center">
                {t(nav.rooms)}
                <BiChevronDown className="ml-1" />
              </span>
              <div className="absolute pt-5 lg:pt-8 z-20">
                <ul className="shadow-2xl hidden group-hover:block rounded-sm bg-white text-black w-[200px] text-left dark:bg-normalBlack dark:text-white transition-all duration-500 text-sm py-4 ">
                  <div className=" px-5 group hover:bg-khaki hover:text-white">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/room" className="block py-2">
                        {t(nav.room)}
                      </NavLink>
                    </li>
                  </div>
                  <div className=" px-5 group hover:bg-khaki hover:text-white">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/find_room" className="block py-2">
                        {t(nav.findRoom)}
                      </NavLink>
                    </li>
                  </div>
                  <div className=" px-5 group hover:bg-khaki hover:text-white">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/room_details" className="block py-2">
                        {t(nav.roomDetails)}
                      </NavLink>
                    </li>
                  </div>
                </ul>
              </div>
            </NavLink>
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative `}
              to="#"
            >
              <span className="flex items-center">
                {t(nav.page)}
                <BiChevronDown className="ml-1" />
              </span>
              <div className="absolute pt-5 lg:pt-8 z-20">
                <ul className="shadow-2xl hidden group-hover:block rounded-sm bg-white text-black w-[200px] text-left dark:bg-normalBlack dark:text-white transition-all duration-500 text-sm py-4 ">
                  <div className=" px-5 group hover:bg-khaki hover:text-white">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/about" className="py-2 block">
                        {t(nav.aboutUs)}
                      </NavLink>
                    </li>
                  </div>
                  <div className=" px-5 group hover:bg-khaki hover:text-white">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/services" className="py-2 block">
                        {t(nav.service)}
                      </NavLink>
                    </li>
                  </div>
                  <div className=" px-5 group hover:bg-khaki hover:text-white">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/service_details" className="py-2 block">
                        {t(nav.serviceDetails)}
                      </NavLink>
                    </li>
                  </div>
                  <div className=" px-5 group hover:bg-khaki hover:text-white">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/our_team" className="py-2 block">
                        {t(nav.ourTeam)}
                      </NavLink>
                    </li>
                  </div>
                  <div className=" px-5 group hover:bg-khaki hover:text-white">
                    <li className="hover:ml-3 duration-300  ">
                      <NavLink to="/pricing" className="py-2 block">
                        {t(nav.pricing)}
                      </NavLink>
                    </li>
                  </div>
                </ul>
              </div>
            </NavLink>
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative `}
              to="#"
            >
              <span className="flex items-center">
                {t(nav.blog)}
                <BiChevronDown className="ml-1" />
              </span>
              <div className="absolute pt-4 lg:pt-8 z-20">
                <ul className="shadow-2xl hidden group-hover:block rounded-sm bg-white text-black w-60 text-left dark:bg-normalBlack dark:text-white transition-all duration-500 text-sm  py-4">
                  <div className=" px-5 group hover:bg-khaki hover:text-white">
                    <li className="hover:ml-3 duration-300 ">
                      <NavLink to="/blog" className="py-2 block">
                        {t(nav.blog)}
                      </NavLink>
                    </li>
                  </div>
                  <div className=" px-5 group hover:bg-khaki hover:text-white">
                    <li className="hover:ml-3 duration-300 ">
                      <NavLink to="/blog_details" className="py-2 block">
                        {t(nav.blogDetails)}
                      </NavLink>
                    </li>
                  </div>
                </ul>
              </div>
            </NavLink>
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} text-lightBlack lg:text-white dark:text-white lg:border-b-0 px-3 py-2 w-full block transition-all duration-300`}
              to="/contact"
            >
              {t(nav.contact)}
            </NavLink>
          </ul>
          <div className="hidden lg:flex items-center">
            <span onClick={handleClick} className="mr-3 cursor-pointer group ">
              {isDarkMode ? (
                <BiSun
                  className="text-white group-hover:rotate-90 rotate transition-all duration-300"
                  title={t(nav.lightModeTitle)}
                  size={35}
                />
              ) : (
                <IoMoonSharp
                  className="text-white group-hover:rotate-[360deg] transition-all duration-300"
                  title={t(nav.darkModeTitle)}
                  size={35}
                />
              )}
            </span>
            <Link to="/find_room">
              <button className="btn-secondary ">{t(nav.bookingBtn)}</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
