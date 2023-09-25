import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC<{ page?: string }> = ({ page }) => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const openMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className="pt-[3.9375rem] pb-[1.5625rem] lg:px-[4rem] xl:px-[8rem] fixed lg:static top-0 left-0 z-[5] w-full color1">
      <div className="w-full max-w-[79.0625rem] flex items-center justify-between px-[2rem] lg:px-0">
        <Link to="/">
          {" "}
          <img
            src="/images/getlinked-logo.svg"
            alt=""
            className=" lg:w-auto mr-[1rem]"
          />
        </Link>
        {!mobileMenu && (
          <button onClick={openMenu} className="">
            <img src="/images/mobileMenu.svg" alt="" className={` lg:hidden`} />
          </button>
        )}

        <div
          className={`${
            mobileMenu
              ? "top-0 block fixed left-0 px-[49px] w-full bg-[#150E28] py-[100px] z-[10] "
              : "hidden lg:flex"
          } justify-end items-center color1`}
        >
          {mobileMenu && (
            <button onClick={openMenu} className="">
              <img
                src="/images/close-menu.svg"
                alt=""
                className={` lg:hidden fixed z-[11] right-[47px] top-[48px] w-[15px]`}
              />
              <img
                src="/images/circle.svg"
                alt=""
                className={` lg:hidden fixed z-[12] right-[40px] top-[40px] w-[30px]`}
              />
            </button>
          )}

          <ul
            className="flex gap-[1.5rem] lg:gap-[3.5rem] text-[#fff] text-lg lg:text-[1rem] leading-normal justify-between inter lg:font-mont font-medium lg:font-normal
          flex-col lg:flex-row"
          >
            <li>
              <a href="/#timeline"> Timeline</a>
            </li>
            <li>
              {" "}
              <a href="/#overview"> Overview</a>
            </li>
            <li>
              <a href="/#faq"> FAQS</a>
            </li>
            <li
              className={`${page === "contact" && "contact"} mb-[50px] lg:mb-0`}
            >
              <Link to="/contact"> Contact</Link>
            </li>
          </ul>
          {page === "register" ? (
            <Link
              to="/register"
              className="register  xl:ml-[3rem] lg:ml-[7.5625rem] text-[#fff] text-[1rem] bg-gradient from-[#903AFF] to-[#FF26B9]"
            >
              <p className="py-[1rem] px-[3.25rem] color1 m-[1px] rounded-[4px]"> Register</p>
            </Link>
          ) : (
            <Link
              to="/register"
              className="register py-[1rem] px-[3.25rem] xl:ml-[3rem] lg:ml-[7.5625rem] text-[#fff] text-[1rem] "
            >
              Register
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
