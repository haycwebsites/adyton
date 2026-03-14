import { Link, NavLink } from "react-router-dom";
import useScrollPosition from "./useScrollPosition";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useHayc } from "../../hayc/config-context";

const Navbar = () => {
  const { t, img, config } = useHayc();
  const nav = config.navConfig;
  const [isOpen, setIsOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const navbarBgColor =
    scrollPosition > 100 ? "lg:bg-lightBlack" : "lg:bg-transparent";

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={` w-full lg:fixed font-Lora z-[9999]  lg:px-5 lg:py-2  transition-all duration-300 ${navbarBgColor} `}
    >
      <div className="lg:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className=" w-40 lg:w-35 ">
            <Link to="/">
              <img
                src={img(nav.logo)}
                className="hidden lg:block w-full"
                alt={t(nav.altLogo)}
              />
            </Link>
          </div>
          <div className="px-3 w-full lg:hidden flex justify-between text-lightBlack lg:text-white dark:text-white bg-khaki h-[70px]  items-center  p-3">
            <div className=" w-24  ">
              <Link to="/">
                <img
                  src={img(nav.mobileLogo)}
                  className="block lg:hidden "
                  alt={t(nav.altMobileLogo)}
                />
              </Link>
            </div>
            <div className="flex items-center ">
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
            className={`text-left w-full lg:w-fit lg:flex space-y-2 lg:space-y-0 lg:text-center space-x-0 lg:space-x-3 xl:space-x-4 2xl:space-x-5 3xl:space-x-[24px] flex flex-col lg:flex-row text-sm text-lightBlack lg:text-white dark:text-white uppercase font-normal bg-white dark:bg-normalBlack lg:bg-transparent dark:lg:bg-transparent transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden origin-top lg:overflow-visible ${
              isOpen
                ? "max-h-[520px] opacity-100 py-3 pointer-events-auto translate-y-0 scale-y-100"
                : "max-h-0 opacity-0 py-0 pointer-events-none lg:pointer-events-auto -translate-y-2 scale-y-95"
            } lg:max-h-none lg:opacity-100 lg:py-0 lg:translate-y-0 lg:scale-y-100`}
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
                  : ""} text-lightBlack lg:whitespace-nowrap lg:text-white dark:text-white lg:border-b-0 px-3 py-2 w-full block transition-all duration-300`}
              to="/adyton-suite"
            >
              {t(nav.adytonSuite)}
            </NavLink>
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} text-lightBlack lg:text-white dark:text-white lg:border-b-0 px-3 py-2 w-full block transition-all duration-300`}
              to="/room"
            >
              {t(nav.rooms)}
            </NavLink>
            <NavLink
              className={`${({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active"
                  : ""} text-lightBlack lg:text-white dark:text-white lg:border-b-0 px-3 py-2 w-full block transition-all duration-300`}
              to="/blog"
            >
              {t(nav.blog)}
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
            <div className="flex items-center gap-3">
              <a
                href="https://buy.stripe.com/00w14n15Kdkx7WHgrjaZi01"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn-secondary ">6 months</button>
              </a>
              <a
                href="https://buy.stripe.com/bJedR99Cgdkx90L6QJaZi00"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn-secondary ">12 months</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
