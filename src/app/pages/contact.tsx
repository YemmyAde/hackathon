import React, { useEffect, useState } from "react";
import { Loader } from "../components/loader";
import { IContactData } from "../interface/contact";
import Header from "../components/header";
import { contact } from "../../services/getLinked";
import { Link } from "react-router-dom";

const Contact = () => {
  const [contactData, setContactData] = useState<IContactData>({
    first_name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [fillMessage, setFillMessage] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const formHandler = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    setContactData({
      ...contactData,
      [name]: value,
    });
  };
  useEffect(() => {
    if (
      contactData?.first_name !== "" ||
      contactData?.email !== "" ||
      contactData?.message !== ""
    ) {
      setFillMessage("");
    }
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(contactData.email)) {
      setEmailError("");
    }
  }, [contactData]);
  const onSubmit = async () => {
    if (
      contactData.first_name === "" ||
      contactData.email === "" ||
      contactData.message === ""
    ) {
      setFillMessage("Kindly fill all fields");
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(contactData.email)
    ) {
      setEmailError("Please provide a valid email address");
    } else {
      setLoading(true);
      try {
        setLoading(false);
        const data = await contact(contactData);
        setLoading(false);

        if (data) {
          setSuccess(true);
          setContactData({
            first_name: "",
            email: "",
            message: "",
          });
        }
      } catch (e) {
        setLoading(false);
        setError("Error occured, try again");
        return e;
      }
    }
  };

  return (
    <div>
      {
        <div className="hidden lg:block">
          <Header page="contact" />
        </div>
      }
      {success && (
        <div className=" bg-[rgba(14,21,40,0.93)] h-[100vh] w-full fixed top-0 left-0 flex justify-start z-[3] text-[#fff] mx-auto text-center font-mont">
          <div className="xl:mt-[14.375rem] w-[90%] lg:w-[500px] h-auto text-center mx-auto mt-[8rem]">
            <div className="radius-[5px] border-[1px] border-[#D434FE] pt-[4rem] pb-[2rem]">
              <div className="mt-[29px] relative">
                <img
                  src="/images/star-c2.svg"
                  alt=""
                  className="blink absolute -top-[10%] left-[30px]  w-[10px] lg:w-auto"
                />
                <p className="text-[1rem] lg:text-[32px] font-semibold">
                  Message sent successfully
                </p>
                <p className=" mt-[12px] lg:mt-[8px] text-[12px] md:text-[14.5px] leading-[]">
                  Our team will reach out to you as soon as possible
                  <span className="inline-block relative top-[3px]">
                    <img
                      src="/images/wink-emoji-woman.svg"
                      alt=""
                      className=""
                    />
                  </span>
                </p>

                <div className=" w-[90%] lg:w-full mx-auto text-center relative">
                  <img
                    src="/images/star-c3.svg"
                    alt=""
                    className="blink absolute bottom-[30px] right-0 w-[10px] lg:w-auto"
                  />
                  <button
                    onClick={() => setSuccess(false)}
                    type="button"
                    className="register py-[1.0625rem] px-[2rem] lg:px-[3.57rem] text-[#fff] w-full lg:w-[12rem] text-[1rem] leading-[1.21875rem] mb-[70px] mt-[4rem]"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="text-left  min-h-[100vh] font-mont flex flex-col items-center w-full overflow-hidden px-[20px] relative">
        <div className="flex justify-start items-start">
          <Link to="/">
            <img
              src="/images/back_icon.svg"
              alt=""
              className={` lg:hidden fixed z-[11] left-[47px] top-[45px] w-[13px] z-2 `}
            />
            <img
              src="/images/circle.svg"
              alt=""
              className={` lg:hidden fixed z-[12] left-[40px] top-[40px] w-[30px] z-2`}
            />
          </Link>
        </div>
        <img
          src="/images/star-c2.svg"
          alt=""
          className="blink absolute top-[5%] right-[20%]  w-[10px] lg:w-auto "
        />
        <div className=" flex items-center flex-col relative">
          <img
            src="/images/purple-light.svg"
            alt=""
            className="mix-blend-hard-light absolute -left-[200px] blur "
          />
          <img
            src="/images/purple9.svg"
            alt=""
            className="mix-blend-hard-light absolute bottom-[35px] right-0 blur hidden lg:block"
          />
          <div className="relative ">
            <div className=" text-[#fff]  pb-[7.1875rem] mt-[8.75rem] flex justify-between gap-5">
              <div className="lg:mr-[8rem] xl:mr-[14.0625rem] mt-[2.5625rem] relative hidden lg:block">
                <img
                  src="/images/star-c3.svg"
                  alt=""
                  className="blink absolute -top-[10%] left-[0]  w-[10px] lg:w-auto "
                />
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
              <div className="rounded-[12px] px-[40px] xl:px-[5.625rem] lg:pt-[4.6875rem] pb-[4.1875rem] lg:bg-[rgba(255,255,255,0.03)] lg:shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] relative z-[2]">
                <h6 className="font-clash font-semibold text-[1.25rem] leading-[1.5375rem] text-[#D434FE] px-[0.125rem] w-[195px] lg:w-auto">
                  Questions or need assistance?{" "}
                </h6>

                <h6 className="mb-[2.125rem] mt-[0.4375rem] font-clash font-semibold text-[1.25rem] leading-[1.5375rem] text-[#D434FE] px-[0.125rem]">
                  {" "}
                  Let us know about it!
                </h6>

                <p className="my-[1.375rem] font-normal text-[1rem] leading-[1.21875rem] lg:hidden">
                  Email us below to any question related to our event
                </p>
                <div className="text-[#fff] relative">
                  <img
                    src="/images/star-c.svg"
                    alt=""
                    className="blink absolute bottom-[-100px] left-[0%]  w-[10px] lg:w-auto "
                  />
                  <input
                    type="text"
                    className="border-[1px] border-[#fff] rounded-[4px] text-[1rem] leading-[1.21875rem]
               pt-[0.8125rem] pb-[0.875rem] px-[1.8125rem] bg-[rgba(255,255,255,0.03)] mb-[2.625rem] text-[#fff] w-full xl:w-[27.3125rem]"
                    placeholder="First Name"
                    name="first_name"
                    value={contactData?.first_name}
                    onChange={formHandler}
                  />{" "}
                  <br />
                  <input
                    type="email"
                    className={`${
                      !emailError && "mb-[2.4375rem]"
                    } border-[1px] border-[#fff] rounded-[4px] text-[1rem] leading-[1.21875rem]
               pt-[0.8125rem]  px-[1.8125rem] bg-[rgba(255,255,255,0.03)] pb-[0.875rem] w-full xl:w-[27.3125rem]`}
                    placeholder="Mail"
                    name="email"
                    onChange={formHandler}
                    value={contactData?.email}
                  />{" "}
                  <br />
                  {emailError && (
                    <p className="text-[#D434FE] text-xs transition-all ease-in-out pb-[0.875rem]">
                      {emailError}
                    </p>
                  )}
                  <textarea
                    id=""
                    className="border-[1px] border-[#fff] rounded-[4px] text-[1rem] leading-[1.21875rem]
               pt-[0.375rem] px-[0.9375rem] bg-[rgba(255,255,255,0.03)] resize-none h-[7.4375rem] w-full xl:w-[27.3125rem]"
                    placeholder="Message"
                    name="message"
                    onChange={formHandler}
                    value={contactData?.message}
                  ></textarea>
                  <br />
                  {fillMessage && (
                    <p className="text-[#D434FE] text-xs transition-all ease-in-out ">
                      {fillMessage}
                    </p>
                  )}
                  <div className="w-full mx-auto text-center flex justify-center">
                    {error && (
                      <p className="text-[#D434FE] text-xs transition-all ease-in-out ">
                        {error}
                      </p>
                    )}
                    <button
                      onClick={onSubmit}
                      disabled={loading}
                      className="register py-[1.0625rem] pl-[3.5625rem] pr-[3.5rem] text-[#fff] mt-[1.9375rem] flex justify-center cursor-pointer"
                    >
                      {loading ? <Loader /> : "Submit"}
                    </button>
                  </div>
                  <div className="lg:hidden flex text-center flex-col ">
                    <p className="text-[#D434FE] mt-[2.1875rem] mb-[1.125rem] font-mont text-[1rem] font-normal leading-[1.21875rem]">
                      Share on
                    </p>
                    <ul className="flex items-center justify-center">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
