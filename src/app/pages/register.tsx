import React, { useEffect, useState } from "react";
import { Loader } from "../components/loader";
import { IContactData } from "../interface/contact";
import { IRegister } from "../interface/register";
import { ICategory } from "../interface/category";
import { getCategory, postRegister } from "../../services/getLinked";

const size = [2, 5, 10];
const Register = () => {
  const [registerData, setRegisterData] = useState<IRegister>({
    email: "",
    phone_number: "",
    team_name: "",
    group_size: 0,
    project_topic: "",
    category: "",
    privacy_poclicy_accepted: false,
  });
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [category, setCategory] = useState<ICategory[]>();
  const [error, setError] = useState<string>("");
  const getData = async () => {
    try {
      const data = await getCategory();
      console.log(data.data);
      setCategory(data?.data);
    } catch (e) {
      return e;
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const formHandler = (
    e: React.FormEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.currentTarget;
    if (name === "privacy_poclicy_accepted") {
      setRegisterData({
        ...registerData,
        [name]: !registerData.privacy_poclicy_accepted,
      });
    } else {
      setRegisterData({
        ...registerData,
        [name]: value,
      });
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await postRegister(registerData);
      if (data) {
        setSuccess(true);
        setRegisterData({
          email: "",
          phone_number: "",
          team_name: "",
          group_size: 0,
          project_topic: "",
          category: "",
          privacy_poclicy_accepted: false,
        });
      }
      setLoading(false);
    } catch (e: any) {
      console.log(e);
      setLoading(false);
      return e;
    }
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }, [error]);
  return (
    <>
      {success && (
        <div className=" bg-[rgba(14,21,40,0.93)] h-[100vh] w-full fixed top-0 left-0 flex justify-center z-[3] text-[#fff] mx-auto text-center font-mont items-center">
         
          <div className="xl:mt-[14.375rem] w-[90%] md:w-[699px] h-auto text-center mx-auto ">
            <div className="radius-[5px] border-[1px] border-[#D434FE] ">
              <div className="relative flex justify-center w-full">
                <img
                  src="/images/star-c.svg"
                  alt=""
                  className="blink absolute -top-[30px] right-0  w-[10px] md:w-auto"
                />

                <div className="md:w-[300px] absolute left-[20px] md:left-[135px] top-[20px] z-[1]">
                  <img
                    src="/images/successfully-done-mob.svg"
                    alt=""
                    className=" w-full"
                  />
                </div>
                <div className="md:w-[330px] relative left-[20px] md:left-[65px] top-[30px] z-[2] mx-auto ">
                  <img
                    src="/images/successful-man-mob.svg"
                    alt=""
                    className="w-full "
                  />
                </div>
              </div>

              <div className="mt-[29px] relative">
                <img
                  src="/images/star-c2.svg"
                  alt=""
                  className="blink absolute -top-[10%] left-[30px]  w-[10px] md:w-auto"
                />
                <p className=" text-[16px] md:text-[32px] leading-[] font-semibold">
                  Congratulations
                </p>
                <p className="text-[1rem] md:text-[32px] font-semibold">
                  you have successfully Registered!
                </p>
                <p className=" mt-[12px] md:mt-[8px] text-[12px] md:text-[14.5px] leading-[]">
                  Yes, it was easy and you did it <br />
                  check your mail box for next step{" "}
                  <span className="inline-block relative top-[3px]">
                    <img
                      src="/images/wink-emoji-woman.svg"
                      alt=""
                      className=""
                    />
                  </span>
                </p>

                <div className=" w-[90%] md:w-full mx-auto text-center relative">
                  <img
                    src="/images/star-c3.svg"
                    alt=""
                    className="blink absolute bottom-[30px] right-0 w-[10px] md:w-auto"
                  />
                  <button
                    onClick={() => setSuccess(false)}
                    type="button"
                    className="register py-[1.0625rem] px-[2rem] md:px-[3.57rem] text-[#fff] mt-[1.375rem] w-full md:w-[36rem] text-[1rem] leading-[1.21875rem] mb-[70px]"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <h6 className="font-clash font-semibold text-[1.5rem] leading-[1.46rem] text-[#D434FE] px-[2rem] md:hidden mt-[40px]">
        Register
      </h6>
      <div className="mx-auto text-left  min-h-[100vh] color1 flex justify-center font-mont font-normal overflow-hidden">

        
        <div className="flex flex-col md:flex-row color1 text-[#fff]  max-w-[1512px]  pb-[7.1875rem] mt-[8rem] md:mt-[16rem] ">
          <div className="flex justify-center w-full md:w-[40%] relative">
            <img
              src="/images/graphics-designer.svg"
              alt=""
              className="w-[90%] hidden md:block"
            />
            <img
              src="/images/star-c3.svg"
              alt=""
              className="blink absolute -top-[30px] left-[10%]  w-[10px] md:w-auto"
            />
            <img
              src="/images/star-c2.svg"
              alt=""
              className="blink absolute bottom-[30px] left-[10%]  w-[10px] md:w-auto"
            />
            <img
              src="/images/star-c3.svg"
              alt=""
              className="blink absolute bottom-[10%] right-[10%]  w-[10px] md:w-auto"
            />
            <img
              src="/images/graphics-designer2.svg"
              alt=""
              className="w-[90%] md:hidden"
            />
          </div>
          <div className="">
            <div className="rounded-[12px] px-[2rem] xl:px-[5.6875rem] py-[4.0625rem] md:bg-[#241d37] md:shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] relative">
              <img
                src="/images/star-c2.svg"
                alt=""
                className="blink absolute top-[30px] left-[10%] md:right-[10%]  w-[10px] md:w-auto "
              />

              <img
                src="/images/star-c4.svg"
                alt=""
                className="blink absolute bottom-[50px] right-[10%]  w-[5px] "
              />
              <h6 className="hidden md:block mb-[2.875rem] font-clash font-semibold text-[2rem] leading-[2.46rem] text-[#D434FE] px-[0.0625rem] ">
                Register
              </h6>
              <div className="flex items-end mb-[1.1875rem]">
                <p className="text-[0.875rem] leading-[1.0668rem] mr-[0.4375rem]">
                  Be part of this movement!
                </p>

                <div className="relative">
                  <img
                    src="/images/girl.svg"
                    alt=""
                    className="absolute bottom-[2px]  left-[24px]"
                  />

                  <img
                    src="/images/boy.svg"
                    alt=""
                    className="absolute bottom-[2px]  left-[41px]"
                  />

                  <img
                    src="/images/line.svg"
                    alt=""
                    className="mb-[0.0625rem] relative"
                  />
                </div>
              </div>
              <h6 className="mb-[2.0625rem] font-mont  text-[1.5rem] leading-[1.82875rem] text-[#fff] px-[0.0625rem] uppercase">
                CREATE YOUR ACCOUNT
              </h6>
              <form className="text-[#fff]">
                <div className="flex gap-[2rem] mb-[1.8125rem] flex-col lg:flex-row">
                  <div className="flex flex-col ">
                    <label
                      htmlFor=""
                      className="text-[0.875rem] leading-[1.0669rem] mb-[0.6875rem]"
                    >
                      Team's Name
                    </label>
                    <input
                      type="text"
                      className="border-[1px] border-[#fff] rounded-[4px]
               py-[0.9375rem] pl-[1.6875rem] pr-[1.625rem] bg-[#241d37] text-[#fff] w-full lg:w-[16.4375rem] 
               text-[0.875rem] leading-[1.0669rem]"
                      placeholder="Enter the name of your group"
                      name="team_name"
                      onChange={formHandler}
                      value={registerData?.team_name}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor=""
                      className="text-[0.875rem] leading-[1.0669rem] mb-[0.6875rem]"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      className="border-[1px] border-[#fff] rounded-[4px]
               py-[0.9375rem] pl-[1.6875rem] pr-[1.625rem] bg-[#241d37] text-[#fff] w-full lg:w-[16.4375rem] 
               text-[0.875rem] leading-[1.0669rem] "
                      placeholder="Enter your phone number"
                      name="phone_number"
                      onChange={formHandler}
                      value={registerData?.phone_number}
                    />
                  </div>
                </div>
                <div className="flex gap-[2rem] mb-[1.8125rem] flex-col lg:flex-row">
                  <div className="flex flex-col">
                    <label
                      htmlFor=""
                      className="text-[0.875rem] leading-[1.0669rem] mb-[0.6875rem]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-[1px] border-[#fff] rounded-[4px]
               py-[0.9375rem] pl-[1.6875rem] pr-[1.625rem] bg-[#241d37] text-[#fff] w-full lg:w-[16.4375rem] 
               text-[0.875rem] leading-[1.0669rem] "
                      placeholder="Enter your email address"
                      name="email"
                      onChange={formHandler}
                      value={registerData?.email}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor=""
                      className="text-[0.875rem] leading-[1.0669rem] mb-[0.6875rem]"
                    >
                      Project Topic
                    </label>
                    <input
                      type="text"
                      className="border-[1px] border-[#fff] rounded-[4px]
               py-[0.9375rem] px-[1.0625rem] bg-[#241d37] text-[#fff] w-full lg:w-[16.4375rem] 
               text-[0.875rem] leading-[1.0669rem]"
                      placeholder="What is your group project topic"
                      name="project_topic"
                      onChange={formHandler}
                      value={registerData?.project_topic}
                    />
                  </div>
                </div>
                <div className="flex gap-[2rem] mb-[1.4375rem]">
                  <div className="flex flex-col">
                    <label
                      htmlFor=""
                      className="text-[0.875rem] leading-[1.0669rem] mb-[0.6875rem]"
                    >
                      Category
                    </label>
                    <select
                      name="category"
                      id=""
                      onChange={formHandler}
                      className="border-[1px] border-[#fff] rounded-[4px]
               py-[0.9375rem] px-[10px] lg:pl-[1.6875rem] lg:pr-[1.625rem] bg-[#241d37] text-[#fff]  w-full lg:w-[16.4375rem] 
               text-[0.875rem] leading-[1.0669rem] "
                    >
                      <option value={registerData?.category} className="">
                        Select your category
                      </option>
                      {category?.map((item: ICategory) => {
                        return (
                          <option value={item?.id} className="" key={item.id}>
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor=""
                      className="text-[0.875rem] leading-[1.0669rem] mb-[0.6875rem]"
                    >
                      Group Size
                    </label>
                    <select
                      onChange={formHandler}
                      name="group_size"
                      id=""
                      className="border-[1px] border-[#fff] rounded-[4px]
               py-[0.9375rem] pl-[1.6875rem] pr-[1.625rem] bg-[#241d37] text-[#fff] w-full lg:w-[16.4375rem] 
               text-[0.875rem] leading-[1.0669rem] "
                    >
                      <option value={registerData?.group_size} className="">
                        Select
                      </option>
                      {size?.map((item) => {
                        return (
                          <option value={item} className="" key={item}>
                            {item}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <p className="text-[0.75rem] leading-[0.9143rem] text-[#FF26B9] italic">
                  {error
                    ? error
                    : "Please review your registration details before submitting"}
                </p>
                <div className="mt-[1rem] flex ml-[0.1875rem]">
                  <input
                    type="checkbox"
                    name="privacy_poclicy_accepted"
                    id=""
                    // checked={registerData.privacy_poclicy_accepted}
                    onChange={formHandler}
                    className="cursor-pointer"
                  />
                  <label
                    htmlFor="checkbox"
                    className="ml-[0.625rem] text-[#fff] text-[0.75rem] leading-[0.9143rem]"
                  >
                    {" "}
                    I agreed with the event terms and conditions and privacy
                    policy
                  </label>
                </div>
                <div className="w-full mx-auto text-center">
                  <button
                    type="submit"
                    onClick={onSubmit}
                    disabled={loading || !registerData.privacy_poclicy_accepted}
                    className="register py-[1.0625rem] pl-[3.5625rem] pr-[3.5rem] text-[#fff] mt-[1.375rem] lg:w-[34.875rem] text-[1rem] leading-[1.21875rem] text hidden md:block"
                  >
                    {loading ? <Loader /> : "Register Now"}
                  </button>
                  <button
                    type="submit"
                    onClick={onSubmit}
                    disabled={loading || !registerData.privacy_poclicy_accepted}
                    className="register py-[1.0625rem] pl-[3.5625rem] pr-[3.5rem] text-[#fff] mt-[1.375rem] lg:w-[34.875rem] text-[1rem] leading-[1.21875rem] text md:hidden"
                  >
                    {loading ? <Loader /> : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
