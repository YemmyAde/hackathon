import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false)
  const openMenu = () => {
      setMobileMenu(!mobileMenu)
  }
  return (
    <div className="pt-[3.9375rem] pb-[1.5625rem] px-[8rem] lg:px-[4rem] xl:px-[8rem] border-b-[1px] border-[#fff] border-opacity-[0.18]">
      <div className="max-w-[79.0625rem] flex items-center justify-between">
        <img
          src="/images/getlinked-logo.svg"
          alt=""
          className=" md:w-auto mr-[1rem]"
        />
        {!mobileMenu && (
          <button onClick={openMenu} className="">
            <img src="/images/mobileMenu.svg" alt="" className={` md:hidden`} />
          </button>
        )}

        <div
          className={`${
            mobileMenu
              ? "top-0 block fixed left-0 px-[49px] w-full bg-[#150E28] py-[100px] z-[10] "
              : "hidden md:flex"
          } justify-end items-center color1`}
        >
          {mobileMenu && (
            <button onClick={openMenu} className="">
              <img
                src="/images/close-menu.svg"
                alt=""
                className={` md:hidden fixed z-[11] right-[47px] top-[48px] w-[15px]`}
              />
              <img
                src="/images/circle.svg"
                alt=""
                className={` md:hidden fixed z-[12] right-[40px] top-[40px] w-[30px]`}
              />
            </button>
          )}

          <ul
            className="flex gap-[1.5rem] md:gap-[1rem] lg:gap-[3.5rem] text-[#fff] text-lg md:text-[1rem] leading-normal justify-between inter md:font-mont font-medium md:font-normal
          flex-col md:flex-row"
          >
            <li>
              <a href="#timeline"> Timeline</a>
            </li>
            <li>
              {" "}
              <a href="#overview"> Overview</a>
            </li>
            <li>
              <a href="#faq"> FAQS</a>
            </li>
            <li className="mb-[50px] md:mb-0">
              <Link to="/contact"> Contact</Link>
            </li>
          </ul>
          <Link
            to="/register"
            className="register py-[1rem] px-[3.25rem] md:ml-[3rem] lg:ml-[7.5625rem] text-[#fff] text-[1rem] "
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
