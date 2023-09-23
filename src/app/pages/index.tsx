import React, { useState } from "react";
import Header from "../components/header";
import { Link } from "react-router-dom";

interface IFaq {
  id: number;
  heading: string;
  text: string;
  show?: boolean;
}

const judgingCriteria: IFaq[] = [
  {
    id: 1,
    heading: "Innovation and Creativity",
    text: "Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.",
  },
  {
    id: 2,
    heading: "Functionality",
    text: "Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.",
  },
  {
    id: 3,
    heading: "IImpact and Relevance",
    text: "Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.",
  },
  {
    id: 4,
    heading: "Technical Complexity",
    text: "Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.",
  },
  {
    id: 5,
    heading: "Adherence to Hackathon Rules",
    text: "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.",
  },
];
const faq: IFaq[] = [
  {
    id: 1,
    heading: "Can I work on a project I started before the hackathon?",
    text: "We got answers to the questions that you might want to ask about getlinked Hackathon 1.0",
    show: false,
  },
  {
    id: 2,
    heading: "What happens if I need help during the hackathon?",
    text: "We got answers to the questions that you might want to ask about getlinked Hackathon 1.0",
    show: false,
  },
  {
    id: 3,
    heading: "What happens if I don't have an idea for a project?",
    text: "We got answers to the questions that you might want to ask about getlinked Hackathon 1.0",
    show: false,
  },
  {
    id: 4,
    heading: "Can I join a team or do I have to come with one?",
    text: "We got answers to the questions that you might want to ask about getlinked Hackathon 1.0",
    show: false,
  },
  {
    id: 5,
    heading: "What happens after the hackathon ends",
    text: "We got answers to the questions that you might want to ask about getlinked Hackathon 1.0",
    show: false,
  },
  {
    id: 6,
    heading: "Can I work on a project I started before the hackathon?",
    text: "We got answers to the questions that you might want to ask about getlinked Hackathon 1.0",
    show: false,
  },
];
const Landing = () => {
  const [questions, setQuestions] = useState<IFaq[]>(faq);

  const showText = (id: number) => {
    const copy = [...questions];
    const showTitle = copy.map((item: IFaq) => {
      if (item?.id === id) {
        return {
          ...item,
          show: !item.show,
        };
      } else {
        return {
          ...item,
          show: false,
        };
      }
    });
    setQuestions(showTitle);
  };

  return (
    <div className="flex w-full justify-center font-mont max-w-[100%] overflow-hidden ">
      <div className="max-w-[1521px] w-[1521px] ">
        <Header />
        <div className="color1 relative z-[2]  h-[52.625rem]">
          <img
            src="/images/purple-lens.svg"
            alt=""
            className="blur-xl mix-blend-hard-light absolute -top-[3%] left-[8%] w-[50%]"
          />
          <img
            src="/images/star2.svg"
            alt=""
            className="blink absolute left-[11.5625rem] top-[6.125rem]"
          />
          <div className="flex justify-end relative z-[5] ">
            <div className="relative"></div>
            <p className="text-[#fff]  text-[2.25rem] leading-normal font-bold mr-[5rem] italic font-mont mt-[1.5rem] relative">
              Igniting a Revolution in HR Innovation
              <img
                src="/images/Vector4.svg"
                alt=""
                className="absolute right-0 -bottom-[8px]"
              />
            </p>
          </div>
          <div className="pt-[8rem] relative w-full">
            <div className="w-full mx-auto text-center md:text-left">
              <img
                src="/images/purple-light-2.svg"
                alt=""
                className="mix-blend-hard-light absolute  z-[1] right-0"
              />

              <h4 className=" text-[2rem] xl:text-[5rem] leading-none text-[#fff] font-clash  font-bold ml-[8rem] relative">
                getlinked Tech{" "}
                <img
                  src="/images/creative.svg"
                  alt=""
                  className="absolute left-[37%] -top-[55px]"
                />
                <img
                  src="/images/chain.svg"
                  alt=""
                  className="absolute left-[42%]"
                />
                <img
                  src="/images/light.svg"
                  alt=""
                  className="absolute left-[48%] w-[70px]"
                />
              </h4>

              <h4 className="mt-[0.5rem] text-[2rem] xl:text-[5rem] leading-none text-[#fff] font-clash font-bold ml-[8.1875rem]">
                {" "}
                Hackathon <span className="text-[#D434FE]"> 1.0 </span>
              </h4>
              <p className="font-mont text-[1rem] xl:text-[1.25rem] leading-[2.075rem] text-[#fff] w-[30%] xl:w-[522px] ml-[8.1875rem] mt-[1rem] text-center md:text-left">
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </p>

              <button className="register py-[1rem] px-[3.25rem] ml-[8.25rem] text-[#fff] mt-[2.5625rem]">
                Register
              </button>
              <div className="ml-[8.25rem] text-[#fff] text-[2rem] xl:text-[4rem] mt-[4.8125rem] leading-none w-[17.8125rem] flex justify-start xl:justify-between gap-2 ">
                <p className="unica leading-none">
                  OO
                  <small className="text-[14px] mb-[1.375rem] font-mont leading-[1.1637rem]">
                    H
                  </small>
                </p>
                <p className="unica">
                  00
                  <small className="text-[14px] font-mont leading-[1.1637rem]">
                    M
                  </small>
                </p>
                <p className="unica">
                  OO
                  <small className="text-[14px] font-mont leading-[1.1637rem]">
                    S
                  </small>
                </p>
              </div>
            </div>
            <div className="relative md:absolute right-0 top-0  z-[2] mt-[2.5rem]">
              <div className="relative">
                <img
                  src="/images/metrix.svg"
                  alt=""
                  className="absolute z-[1] xl:w-[1164px] xl:h-[801px]"
                />

                <div className="w-[667px] h-[641px] absolute">
                  <img
                    src="/images/globe.svg"
                    alt=""
                    className="absolute z-[3] w-[667px] h-[641px]  left-[70px] -top-[10px]"
                  />
                  <img
                    src="/images/star3.svg"
                    alt=""
                    className="blink top-[1.875rem] left-[2.5rem]"
                  />
                </div>

                <img
                  src="/images/virtual-screen.svg"
                  alt=""
                  className="relative z-[2]  xl:h-[715px] xl:w-[828px] right-[0px] top-[30px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* introduction */}
        <div className="flex md:pl-[230px] md:pr-[101px] gap-[109px] text-[#fff] items-center bg-[#150E28] relative z-[3] pt-[3.875rem] pb-[4.875rem] border-b-[1px] border-[#fff] border-opacity-[0.18] flex-col md:flex-row w-full mx-auto text-center md:text-left px-[10%] md:px-0">
          <div className="">
            <img src="/images/idea.svg" alt="" className="md:max-w-[741px]" />
          </div>
          <div className=" mx-auto w-full">
            <h5 className="font-clash text-[2rem] leading-0 font-bold md:w-[398px] px-[5%] md;px-0">
              Introduction to getlinked <br />
              <span className="text-[#D434FE]">tech Hackathon 1.0 </span>
            </h5>
            <p className="mt-[1rem] font-mont text-sm leading-[1.71875rem] text-[#fff] font-normal xl:w-[33.4375rem]">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </div>
        </div>
        {/* rules */}
        <div className="purple-flare2  flex xl:pl-[11.3125rem] xl:pr-[3.75rem] xl:gap-6 text-[#fff] items-center border-b-[1px] border-[#fff] border-opacity-[0.18] flex-col lg:flex-row mx-auto w-full px-[43px]">
          <div className="relative -top-[65px] flex-1 text-center md:text-left">
            <h5 className="font-clash text-[2rem] leading-normal font-bold xl:w-[18.75rem] ">
              Rules and <span className="text-[#D434FE]">Guidelines </span>
            </h5>
            <p className="mt-[1rem] font-mont text-sm leading-[1.7188rem] text-[#fff] font-normal xl:w-[33.4375rem] pl-[3px] box-border ">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </div>

          <div className="relative flex-1">
            <img
              src="/images/rules.svg"
              alt=""
              className=" xl:max-w-[741px] relative -top-[2.8125rem] left-[30px]"
            />
            <img
              src="/images/purple3.svg"
              alt=""
              className="blur-md mix-blend-hard-light absolute top-0 -right-[140px]"
            />
          </div>
        </div>
        {/* judging */}
        <div className="flex  items-center pl-[56px] gap-[53px] text-[#fff] font-mont pt-[78px] pb-[150px] border-b-[1px] border-[#fff] border-opacity-[0.18]">
          <div className="relative">
            <img src="/images/judging.svg" alt="" className="max-w-[710px]" />
            <img
              src="/images/purple4.svg"
              alt=""
              className="absolute blur-lg w-[80%] -bottom-[30%] mix-blend-hard-light"
            />
          </div>

          <div className="relative">
            <h5 className="font-clash text-[2rem] leading-normal font-bold w-[300px]">
              Judging Criteria
              <span className="text-[#D434FE]"> Key attributes </span>
            </h5>

            <div className="mt-[21px]">
              {judgingCriteria.map((item: IFaq) => {
                return (
                  <div className="max-w-[564px] mb-[22px]" key={item?.id}>
                    <p className="text-[14px] leading-[173.5%]">
                      <span className="text-[16px] leading-[27.76px] font-bold text-[#FF26B9]">
                        {item?.heading}
                      </span>{" "}
                      {`: ${item?.text}`}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="w-full">
              <button
                type="button"
                className="register py-[0.9rem] pl-[3rem] pr-[3rem] text-[#fff] mt-[1rem]"
              >
                Read More
              </button>
            </div>
            <img
              src="/images/purple5.svg"
              alt=""
              className="absolute blur-lg w-[80%] -bottom-[65%] -right-[20%] mix-blend-hard-light"
            />
          </div>
        </div>
        {/* faq */}
        <div
          className="flex pl-[219px] pr-[101px] gap-6 text-[#fff] pt-[160px] pb-[30px] border-b-[1px] border-[#fff] border-opacity-[0.18]"
          id="faq"
        >
          <div className="">
            <h5 className="font-clash text-[2rem] leading-normal font-bold w-[300px]">
              Frequently Ask <span className="text-[#D434FE]">Question </span>
            </h5>
            <p className="mt-[1.rem] font-mont text-sm leading-[1.6485rem] text-[#fff] font-normal w-[342px]">
              We got answers to the questions that you might want to ask about
              getlinked Hackathon 1.0
            </p>
            <div className="mt-[43px]">
              {questions.map((item: IFaq) => {
                return (
                  <div className="w-[427px]" key={item?.id}>
                    <div className="w-full border-b-[1px] border-b-[#D434FE] pb-[13px] pt-[25px]">
                      <button
                        onClick={() => showText(item?.id)}
                        className="w-full text-left flex justify-between items-center"
                      >
                        <h6 className="text-[14px] font-normal leading-[27.5px] font-mont ">
                          {item.heading}
                        </h6>
                        <img
                          src="/images/plus_icon.svg"
                          alt=""
                          className="float-right"
                        />
                      </button>

                      {item?.show && (
                        <p className="text-[#903AFF] transition-all ease-in-out mt-[20px] text-[14px] font-normal leading-[27.5px] ">
                          {item?.text}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/question1.svg"
              alt=""
              className="absolute left-[10%]"
            />
            <img
              src="/images/question2.png"
              alt=""
              className="absolute left-[35%] -top-[60px]"
            />
            <img
              src="/images/question3.png"
              alt=""
              className="absolute left-[60%] -top-[20px]"
            />
            <img src="/images/casual.svg" alt="" className="max-w-[741px]" />
          </div>
        </div>
        {/* timeline */}
        <div
          className="flex items-center justify-center flex-col text-[rgb(255,255,255)] mb-[600px] pt-[72px] pb-[30px] border-b-[1px] border-[#fff] border-opacity-[0.18]"
          id="timeline"
        >
          <h6 className="text-[2rem] font-clash font-bold leading-[1.71875rem]">
            Timeline
          </h6>
          <p className=" mx-auto mt-[1.375rem] mb-[91px] font-mont text-sm leading-[24.13px] text-[#fff] font-normal w-[346px] text-center ">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>

          <div className="h-[137px] w-[4px] bg-[#D434FE]"></div>
          <div className="flex items-center gap-[86px]">
            <div className="w-[436px] text-right">
              <h6 className="text-[#D434FE] text-[24px] font-bold leading-normal">
                Hackathon Announcement
              </h6>
              <p className="text-[14px] leading-[23.92px] font-normal mt-[12px]">
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>
            <div className="rounded-full w-[60px] h-[60px] timeline-gradient flex items-center justify-center">
              <p className="text-[24px] font-bold leading-normal ">1</p>
            </div>
            <div className="w-[436px] text-left ">
              <p className="text-[#D434FE] text-[24px] font-bold leading-normal">
                November 18, 2023
              </p>
            </div>
          </div>
          <div className="h-[86px] w-[4px] bg-[#D434FE]"></div>
          <div className="flex items-center gap-[86px]">
            <div className="w-[436px] text-right ">
              <p className="text-[#D434FE] text-[24px] font-bold leading-normal">
                November 18, 2023
              </p>
            </div>
            <div className="rounded-full w-[60px] h-[60px] timeline-gradient flex items-center justify-center">
              <p className="text-[24px] font-bold leading-normal ">2</p>
            </div>

            <div className="w-[436px] text-left">
              <h6 className="text-[#D434FE] text-[24px] font-bold leading-normal">
                Teams Registration begins
              </h6>
              <p className="text-[14px] leading-[23.92px] font-normal mt-[12px]">
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </p>
            </div>
          </div>
          <div className="h-[86px] w-[4px] bg-[#D434FE]"></div>
          <div className="flex items-center gap-[86px]">
            <div className="w-[436px] text-right">
              <h6 className="text-[#D434FE] text-[24px] font-bold leading-normal">
                Teams Registration ends
              </h6>
              <p className="text-[14px] leading-[23.92px] font-normal mt-[12px] w-[388px]">
                Interested Participants are no longer Allowed to register
              </p>
            </div>
            <div className="rounded-full w-[60px] h-[60px] timeline-gradient flex items-center justify-center">
              <p className="text-[24px] font-bold leading-normal ">3</p>
            </div>
            <div className="w-[436px] text-left ">
              <p className="text-[#D434FE] text-[24px] font-bold leading-normal">
                November 18, 2023
              </p>
            </div>
          </div>
          <div className="h-[86px] w-[4px] bg-[#D434FE] "></div>
          <div className="flex items-center gap-[86px] -mt-[20px]">
            <div className="w-[436px] text-right ">
              <p className="text-[#D434FE] text-[24px] font-bold leading-normal">
                November 18, 2023
              </p>
            </div>
            <div className="rounded-full w-[60px] h-[60px] timeline-gradient flex items-center justify-center">
              <p className="text-[24px] font-bold leading-normal ">4</p>
            </div>

            <div className="w-[436px] text-left">
              <h6 className="text-[#D434FE] text-[24px] font-bold leading-normal">
                Announcement of the accepted teams and ideas
              </h6>
              <p className="text-[14px] leading-[23.92px] font-normal mt-[12px]">
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>
            </div>
          </div>
          <div className="h-[86px] w-[4px] bg-[#D434FE] -mt-[20px]"></div>
          <div className="flex items-center gap-[86px] -mt-[20px]">
            <div className="w-[436px] text-right">
              <h6 className="text-[#D434FE] text-[24px] font-bold leading-normal  text-left">
                Getlinked Hackathon 1.0 Offically Begins
              </h6>
              <p className="text-[14px] leading-[23.92px] font-normal mt-[12px] w-[386px]">
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </p>
            </div>
            <div className="rounded-full w-[60px] h-[60px] timeline-gradient flex items-center justify-center ">
              <p className="text-[24px] font-bold leading-normal ">5</p>
            </div>
            <div className="w-[436px] text-left ">
              <p className="text-[#D434FE] text-[24px] font-bold leading-normal">
                November 18, 2023
              </p>
            </div>
          </div>
          <div className="h-[86px] w-[4px] bg-[#D434FE] -mt-[20px]"></div>
          <div className="flex items-center gap-[86px] -mt-[10px]">
            <div className="w-[436px] text-right ">
              <p className="text-[#D434FE] text-[24px] font-bold leading-normal">
                November 18, 2023
              </p>
            </div>
            <div className="rounded-full w-[60px] h-[60px] timeline-gradient flex items-center justify-center">
              <p className="text-[24px] font-bold leading-normal ">6</p>
            </div>

            <div className="w-[436px] text-left">
              <h6 className="text-[#D434FE] text-[24px] font-bold leading-normal">
                Demo Day
              </h6>
              <p className="text-[14px] leading-[23.92px] font-normal mt-[12px]">
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between font-mont pl-[124px] pr-[157px]">
          <div className="">
            <img src="/images/cup.svg" alt="" className="max-w-[458px]" />
          </div>
          <div className="py-[200px] flex  items-center gap-[30px]">
            <div className="w-[296px]  text-center mx-auto text-[#fff] relative">
              <img
                src="/images/gold_medal.svg"
                alt=""
                className="absolute -top-[80%] -left-[40px] w-full"
              />
              <div className="border-[1px] rounded-[8px] border-[#903AFF] w-[212px]">
                <p className="mt-[80px] text-[36px] font-bold leading-[77.904px] font-mont ">
                  1st
                </p>
                <p className="-mt-[30px] text-[24px] font-semibold leading-[51.936px]">
                  Runner
                </p>
                <p className="mb-[33px] text-[#903AFF] text-[32px] font-bold leading-[69.248pxx] px-[25px]">
                  #400,000
                </p>
              </div>
            </div>

            <div className="w-[296px]  text-center mx-auto text-[#fff] relative">
              <img
                src="/images/gold_medal.svg"
                alt=""
                className="absolute -top-[80%] -left-[40px] w-full"
              />
              <div className="border-[1px] rounded-[8px] border-[#903AFF] w-[212px]">
                <p className="mt-[80px] text-[36px] font-bold leading-[77.904px] font-mont ">
                  1st
                </p>
                <p className="-mt-[30px] text-[24px] font-semibold leading-[51.936px]">
                  Runner
                </p>
                <p className="mb-[33px] text-[#903AFF] text-[32px] font-bold leading-[69.248pxx] px-[25px]">
                  #400,000
                </p>
              </div>
            </div>
            <div className="w-[296px]  text-center mx-auto text-[#fff] relative">
              <img
                src="/images/gold_medal.svg"
                alt=""
                className="absolute -top-[80%] -left-[40px] w-full"
              />
              <div className="border-[1px] rounded-[8px] border-[#903AFF] w-[212px]">
                <p className="mt-[80px] text-[36px] font-bold leading-[77.904px] font-mont ">
                  1st
                </p>
                <p className="-mt-[30px] text-[24px] font-semibold leading-[51.936px]">
                  Runner
                </p>
                <p className="mb-[33px] text-[#903AFF] text-[32px] font-bold leading-[69.248pxx] px-[25px]">
                  #400,000
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* partner */}
        <div className="relative flex justify-center items-center md:items-start font-mont text-[#fff] mx-auto text-center pb-[120px] border-b-[1px] border-[#fff] border-opacity-[0.18]">
          <img
            src="/images/purple6.svg"
            alt=""
            className="absolute blur-lg w-[30%] -top-[5%] left-0 mix-blend-hard-light"
          />
          <div className="text-center">
            <h6 className="text-[2rem] font-clash font-bold leading-[1.71875rem]">
              Partners and Sponsors
            </h6>
            <p className=" mx-auto mt-[1.375rem] mb-[4.0625rem] font-mont text-sm leading-[1.7188rem] text-[#fff] font-normal w-[452px] text-center ">
              Getlinked Hackathon 1.0 is honored to have the following major
              companies as its partners and sponsors
            </p>

            <div className="flex justify-center w-full">
              <div className=" flex items-center justify-center w-[80%] md:w-[768px] xl:w-[1255px] rounded-[5px] border-[1px] border-[#D434FE] py-[83px] xl:py-[9rem] relative text-center">
                <div className="flex flex-col gap-x-4 ">
                  <div className="flex items gap-4 items-stretch">
                    <img
                      src="/images/partner1.svg"
                      alt=""
                      className="border-b-[4px] border-[#D434FE] pb-6 px-[2rem] xl:pr-[6.6875rem] lg:pl-[50px] w-[20%] lg:w-[60%] xl:w-auto"
                    />
                    <div className="w-[4px] bg-[#D434FE] mb-4"></div>
                    <img
                      src="/images/partner2.svg"
                      alt=""
                      className="border-b-[4px] border-[#D434FE] pb-6 px-[2rem] xl:pl-[30px] xl:pr-[40px] w-[20%] lg:w-[60%] xl:w-auto"
                    />
                    <div className="w-[4px] bg-[#D434FE] mb-4"></div>
                    <img
                      src="/images/partner3.svg"
                      alt=""
                      className="border-b-[4px] border-[#D434FE] pb-6  px-[2rem] xl:pl-[60px] xl:pr-[80px] w-[20%] lg:w-[60%] xl:w-auto"
                    />
                  </div>

                  <div className="flex items gap-4">
                    <img
                      src="/images/partner4.svg"
                      alt=""
                      className=" px-[2rem] xl:pr-[5.1463rem] xl:pl-[50px] pt-6 w-[20%] lg:w-[60%] xl:w-auto"
                    />
                    <div className="w-[4px] bg-[#D434FE] mt-4"></div>
                    <img
                      src="/images/partner5.svg"
                      alt=""
                      className="px-[2rem] xl:pl-[30px] xl:pr-[65px] pt-6 w-[20%] lg:w-[60%] xl:w-auto"
                    />
                    <div className="w-[4px] bg-[#D434FE] mt-4"></div>
                    <div className="relative">
                      <img
                        src="/images/partner6.svg"
                        alt=""
                        className="pl-[2rem] xl:pl-[49px] pt-6  w-[60%]  mt-[20px] lg:mt-[30px] xl:mt-0 lg:w-[70%] xl:w-auto"
                      />
                      <img
                        src="/images/partner.svg"
                        alt=""
                        className=" pt-6 absolute"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* privacy */}
        <div className="xl:pl-[11.6875rem] xl:pr-[9.1875rem] flex xl:gap-[3.125rem] text-[#fff] pb-[160px] pt-[150px] relative flex-col lg:flex-row mx-auto justify-center">
          <img
            src="/images/purple8.svg"
            alt=""
            className="absolute blur-lg w-[50%] -bottom-[25%] left-[5%] mix-blend-hard-light"
          />

          <div className="text-left">
            <h5 className="font-clash text-[2rem] leading-normal font-bold w-[300px]">
              Privacy Policy and <span className="text-[#D434FE]">Terms </span>
            </h5>
            <p className="mt-[1.0625rem] font-mont text-sm leading-[1.719rem] opacity-75 text-[#fff] font-normal ">
              Last updated on September 12, 2023
            </p>
            <p className="mt-[1.0625rem] font-mont text-sm leading-[1.6485rem] text-[#fff] font-normal w-[27.375rem]">
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>
            <div className="mt-[4.3125rem]  pt-[3.6875rem]  pb-[3.65rem] rounded-[5px] border-[1px] border-[#D434FE]">
              <p className="mx-[4.5rem]  font-normal text-sm leading-[1.8934rem] w-[425px] font-mont">
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </p>
              <div className="pl-[4.5rem]">
                <h6 className="text-[#D434FE] text-base font-bold leading-[2.164rem] mt-[1.5rem] font-mont">
                  Licensing Policy
                </h6>
                <p className="text-[#fff] text-sm font-bold leading-[1.894rem] font-mont">
                  Here are terms of our Standard License:
                </p>
                <div className="mt-[1.125rem]">
                  <div className="flex gap-[0.875rem] items-start">
                    <img src="/images/done.svg" alt="" className="mt-[10px]" />
                    <p className="text-sm font-normal leading-[1.894rem] w-[401px] font-mont">
                      The Standard License grants you a non-exclusive right to
                      navigate and register for our event
                    </p>
                  </div>
                  <div className="flex gap-[0.875rem] items-start mt-[1.125rem]">
                    <img
                      src="/images/done.svg"
                      alt=""
                      className="mt-[10px] w-[17px] h-[17px]"
                    />
                    <p className="text-sm font-normal leading-[1.894rem] w-[423px] font-mont">
                      You are licensed to use the item available at any free
                      source sites, for your project developement
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full text-center mx-auto">
                <button
                  type="button"
                  className="register py-[0.9rem] pl-[3rem] pr-[3rem] text-[#fff] mt-[1rem]"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="relative ">
            <img
              src="/images/policy2.svg"
              alt=""
              className="relative max-w-[530px] max-h-[648px] bg-fill left-[3.5rem] bottom-16"
            />
            <img
              src="/images/policy.svg"
              alt=""
              className="max-w-[559px] max-h-[749px] absolute  bottom-0 left-[1.0rem]"
            />
           
          </div>
        </div>
        {/* footer */}
        {/* <footer className="bg-[#100B20] px-[87px] xl:px-[14rem] text-[#fff] text-xs leading-[1.293rem] font-mont pt-[83px] ">
          <div className="flex w-full  md:items-stretch mx-auto justify-center md:justify-between flex-col md:flex-row gap-4">
            <div className="flex flex-col justify-between">
              <div className="max-w-[430px]">
                <img
                  src="/images/getlinked-logo.svg"
                  alt=""
                  className=" w-[100px] md:w-[140px] mb-[10px]"
                />
                <p className="font-mont font-normal mb-[39px] md:mb-0">
                  Getinked Tech Hackathon is a technology innovation program
                  established by a group of organizations with the aim of
                  showcasing young and talented individuals in the field of
                  technology
                </p>
              </div>
              <div className="flex gap-3 mb-[39px] md:mb-0">
                <Link to="" className="">
                  Terms of Use{" "}
                </Link>
                <span className="w-[2px] bg-[#D434FE] md:h-[80%]"></span>
                <Link to="" className="">
                  Privacy Policy
                </Link>
              </div>
            </div>

            <div className="">
              <h6 className="text-[#D434FE] text-sm leading-[1.508rem] font-semibold  ">
                Useful Links
              </h6>
              <ul className="flex mt-[0.375rem] gap-3 flex-col">
                <li className="">
                  <Link to="#overview" className="text-xs leading-[1.293rem]">
                    {" "}
                    Overview
                  </Link>
                </li>
                <li className="">
                  <Link to="#timeline" className="text-xs leading-[1.293rem]">
                    {" "}
                    Timeline
                  </Link>
                </li>
                <li className="">
                  <Link
                    to="#faq"
                    className="text-xs leading-[1.293rem] mb-[2pc]"
                  >
                    {" "}
                    FAQ
                  </Link>
                </li>
                <li className="">
                  <Link to="/register" className="text-xs leading-[1.293rem]">
                    {" "}
                    Register
                  </Link>
                </li>
              </ul>
              <div className="flex items-center  mt-[1.125rem] gap-4">
                <h6 className="text-[#D434FE] text-xs  leading-normal  font-normal">
                  Follow us
                </h6>
                <ul className="flex items-center min-w-[131px]">
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
            <div className="mt-[64px] md:mt-0">
              <h6 className="text-[#D434FE] text-sm leading-[1.508rem] font-semibold  ">
                Contact Us
              </h6>
              <ul className="flex mt-[1.1875rem] gap-[1.375rem] flex-col">
                <li>
                  <Link to="" className=" flex gap-[1rem] items-start">
                    <img src="/images/phone_icon.svg" alt="" className="" />
                    <span className="text-xs leading-[1.1843rem]">
                      +234 6707653444
                    </span>
                  </Link>
                </li>
                <li className="">
                  <Link to="" className=" flex gap-[0.875rem] items-start">
                    <img src="/images/address_icon.svg" alt="" className="" />
                    <span className="text-xs leading-[1.1843rem] w-[5.5625rem]">
                      27,Alara Street Yaba 100012 Lagos State
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-full justify-center pb-[2.75rem] pt-[3.5rem]">
            <p className="text-xs leading-normal">
              All rights reserved. &copy; getLinked Ltd.
            </p>
          </div>
        </footer> */}
      </div>
    </div>
  );
};

export default Landing;