import React, { useState } from "react";
import { Loader } from "../components/loader";
import { IContactData } from "../interface/contact";

const Contact = () => {
  const [contactData, setContactData] = useState<IContactData>({
    first_name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const formHandler = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      setLoading(false);
    } catch (e) {
      setLoading(false);

      return e;
    }
  };
  return (
    <div>
      {/* className=" purple-flare color1" */}

      <div className="text-left  min-h-[100vh] font-mont flex flex-col items-center w-full color1 overflow-hidden">
        <div className="w-[1521px] max-w-[1512px] flex items-center flex-col relative">
          <img
            src="/images/purple-light-2.svg"
            alt=""
            className="mix-blend-hard-light absolute top-[350px]  z-[1] right-0"
          />
          <img
            src="/images/purple-light.svg"
            alt=""
            className="mix-blend-hard-light absolute -left-[200px]  z-[1]"
          />
          <div className="flex pt-[4.1875rem] items-center  w-[79.0625rem] justify-between">
            <img src="/images/getlinked-logo.svg" alt="" className="" />
            <div className="flex justify-end items-center">
              <ul className="flex  gap-[3.5rem] text-[#fff] text-[1rem] leading-[1.2188rem] justify-between font-mont font-normal">
                <li>Timeline</li>
                <li>Overview</li>
                <li>FAQS</li>
                <li className="contact">Contact</li>
              </ul>
              <button className="register pt-[1rem] pb-[1.0625rem] px-[3.25rem] ml-[7.5625rem] text-[#fff]">
                Register
              </button>
            </div>
          </div>
          <div className="relative ">
            <div className=" text-[#fff]  pb-[7.1875rem] mt-[8.75rem] justify-center flex-col ">
              <div className="mr-[14.0625rem] mt-[2.5625rem] relative hidden md:flex">
                <h4 className="text-[2rem] leading-[2.4375rem] mt-[1.0625rem] font-clash font-semibold text-[#D434FE]">
                  Get in touch
                </h4>
                <p className="mt-[1.0625rem]  font-normal text-[1rem] leading-[1.21875rem] text-[#fff]">
                  Contact
                  <br /> Information
                </p>
                <p className="mt-[1.0625rem] font-normal text-[1rem] leading-[1.21875rem]">
                  27,Alara Street <br />
                  Yaba 100012
                  <br /> Lagos State
                </p>
                <p className="mt-[1.3125rem] font-normal text-[1rem] leading-[1.21875rem]">
                  Call Us : 07067981819
                </p>
                <p className="mt-[1.375rem] font-normal text-[1rem] leading-[1.21875rem]">
                  we are open from Monday-Friday
                  <br />
                  08:00am - 05:00pm
                </p>
                <p className="text-[#D434FE] mt-[2.1875rem] mb-[1.125rem] font-mont text-[1rem] font-normal leading-[1.21875rem]">
                  Share on
                </p>
                <ul className="flex items-center">
                  <li className="">
                    <a href="#" target="_blank" className="">
                      <img
                        src="/images/insta.svg"
                        alt="instagram logo"
                        className=""
                      />
                    </a>
                  </li>
                  <li className="ml-[1.1875rem]">
                    <a href="#" target="_blank" className="">
                      <img
                        src="/images/twitter.svg"
                        alt="twitter logo"
                        className=""
                      />
                    </a>
                  </li>{" "}
                  <li className="ml-[1rem]">
                    <a href="#" target="_blank">
                      <img
                        src="/images/facebook.svg"
                        alt="facebook logo"
                        className=""
                      />
                    </a>
                  </li>{" "}
                  <li className="ml-[1.03125rem]">
                    <a href="#" target="_blank">
                      <img
                        src="/images/linkedin.svg"
                        alt="linkedin logo"
                        className=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="rounded-[12px]  px-[5.625rem] md:pt-[4.6875rem] pb-[4.1875rem] md:bg-[rgba(255,255,255,0.03)] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] relative">
                <h6 className="font-clash font-semibold text-[1.25rem] leading-[1.5375rem] text-[#D434FE] px-[0.125rem]">
                  Questions or need assistance?{" "}
                </h6>

                <h6 className="mb-[2.125rem] mt-[0.4375rem] font-clash font-semibold text-[1.25rem] leading-[1.5375rem] text-[#D434FE] px-[0.125rem]">
                  {" "}
                  Let us know about it!
                </h6>
                <form className="text-[#fff]">
                  <input
                    type="text"
                    className="border-[1px] border-[#fff] rounded-[4px] text-[1rem] leading-[1.21875rem]
               pt-[0.8125rem] pb-[0.875rem] px-[1.8125rem] bg-[rgba(255,255,255,0.03)] mb-[2.625rem] text-[#fff] md:w-[27.3125rem]"
                    placeholder="First Name"
                    name="first_name"
                    onChange={formHandler}
                  />{" "}
                  <br />
                  <input
                    type="mail"
                    className="border-[1px] border-[#fff] rounded-[4px] text-[1rem] leading-[1.21875rem]
               pt-[0.8125rem] pb-[0.875rem] px-[1.8125rem] bg-[rgba(255,255,255,0.03)] mb-[2.4375rem] w-[27.3125rem]"
                    placeholder="Mail"
                    name="mail"
                    onChange={formHandler}
                  />{" "}
                  <br />
                  <textarea
                    id=""
                    className="border-[1px] border-[#fff] rounded-[4px] text-[1rem] leading-[1.21875rem]
               pt-[0.375rem] px-[0.9375rem] bg-[rgba(255,255,255,0.03)] resize-none h-[7.4375rem] w-[27.3125rem]"
                    placeholder="Message"
                    name="message"
                    onChange={formHandler}
                  ></textarea>
                  <br />
                  <div className="w-full mx-auto text-center">
                    <button
                      type="submit"
                      onClick={onSubmit}
                      disabled={loading}
                      className="register py-[1.0625rem] pl-[3.5625rem] pr-[3.5rem] text-[#fff] mt-[1.9375rem]"
                    >
                      {loading ? <Loader /> : "Submit"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
