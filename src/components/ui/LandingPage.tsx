import React from "react";
import Hero from "./Hero";
import Planets from "./Plantes";
import Image from "next/image";
import {
  LucideMail,
  LucideMapPinned,
  LucidePhoneCall,
  Video,
} from "lucide-react";
const Landingpage = () => {
  return (
    <>
      <div className="maindivfull">
        <main
          style={{ backgroundImage: "url(/Stars.png)" }}
          className="relative flex flex-col justify-between w-full min-h-screen bg-cover bg-center bg-black"
        >
          <Hero />

          <Planets />
        </main>
        <main
          style={{ backgroundImage: "url(/Stars.png)" }}
          className=" flex  justify-between w-full h-2/4  bg-cover bg-center bg-black"
        ></main>
        <main
          style={{ backgroundImage: "url(/Stars.png)" }}
          className=" flex  justify-between w-full min-h-screen bg-cover bg-center bg-black"
        >
          <div className="container mx-auto flex md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
              <Image
                className="object-cover object-center rounded "
                alt="mindfenai ka logo"
                src="/secondlogoremovebg.png"
                width={600}
                height={600}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-5xl text-2xl mb-4 font-medium text-white">
                AI-Powered Courses Tailored Just for You
                {/* <br className="hidden lg:inline-block">readymade gluten</br> */}
              </h1>
              <p className="mb-8 leading-relaxed">
                Welcome to MindGen AI, where AI transforms education. Experience
                personalized courses designed to fit your learning style. Join
                us and unlock your full learning potential today.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* <main
          style={{ backgroundImage: "url(/Stars.png)" }}
          className="  w-full  pb-10 bg-cover bg-center bg-black"
        >
          <h1 className="text-5xl text-center">
            Discover the Power of MindGen AI
          </h1>
        </main> */}

        <h1
          className="text-5xl text-center  w-full  pb-10 bg-cover bg-center bg-black"
          style={{ backgroundImage: "url(/Stars.png)" }}
        >
          Discover the Power of MindGen AI
        </h1>
        <main
          style={{ backgroundImage: "url(/Stars.png)" }}
          className=" flex justify-between w-full min-h-screen bg-cover bg-center bg-black"
        >
          {/* <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
              <Image
                alt="feature"
                className="object-cover object-center h-full w-full"
                src="/featureunscreen.gif"
                width={200}
                height={200}
              />
            </div>
            <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
              
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="flex-grow">
                  <h2 className="text-white text-lg title-font font-medium mb-3">
                    AI-Powered Course Generation:
                  </h2>
                  <p className="leading-relaxed text-base">
                    
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="flex-grow">
                  <h2 className="text-white text-lg title-font font-medium mb-3">
                    
                  </h2>
                  <p className="leading-relaxed text-base">
                    
                  </p>
                </div>
              </div>
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="flex-grow">
                  <h2 className="text-white text-lg title-font font-medium mb-3">
                  </h2>
                  <p className="leading-relaxed text-base">
                    
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          <div className="container flex flex-col-reverse items-center  mx-auto lg:flex-row ">
            <div className="flex flex-col px-6 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5  dark:text-white-900 h-fit  ">
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6  text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leadi">
                    AI-Powered Course Generation:
                  </p>
                  <p className="leadi">
                    Our platform utilizes advanced artificial intelligence
                    algorithms to generate personalized course content tailored
                    to each learner's unique needs and preferences.
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6  text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leadi">
                    Dynamic Learning Paths:
                  </p>
                  <p className="leadi">
                    Experience dynamic learning paths that adapt and evolve
                    based on your progress, ensuring an engaging and customized
                    learning journey.
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-lg font-medium leadi">
                    Comprehensive Curriculum:
                  </p>
                  <p className="leadi">
                    Access a wide range of subjects and topics curated by
                    experts, covering diverse fields of study to cater to
                    various interests and learning goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 xl:w-3/5">
              <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                <img
                  className="rounded-lg shadow-lg object-cover object-center w-full h-full sm:min-h-96"
                  // className=" h-full w-full"
                  src="/featureunscreen.gif"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </main>

        <main
          style={{ backgroundImage: "url(/Stars.png)" }}
          className=" flex  justify-between w-full min-h-fit pb-20 bg-cover bg-center bg-black"
        >
          <div className="container px-5  mx-auto">
            <div className="text-center mb-20">
              <h1 className="text-6xl font-medium text-center title-font text-white mb-10       ">
                What Sets Us Apart
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                At MindGen AI, we're revolutionizing education with our advanced
                AI-powered platform. Unlike traditional learning methods, we
                tailor our courses to your individual learning style, ensuring a
                personalized and engaging experience every step of the way.
              </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">
                    Personalized Learning Paths
                  </span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">
                    Comprehensive Curriculum
                  </span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">
                    Interactive Learning Tools
                  </span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">
                    Seamless Integration
                  </span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">
                    24/7 Support
                  </span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">
                    Affordable Pricing Options
                  </span>
                </div>
              </div>
            </div>
            {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button> */}
          </div>
        </main>

        <main
          style={{ backgroundImage: "url(/Stars.png)" }}
          className=" flex justify-between w-full h-screen-fit pb-20 p-20  bg-cover bg-center bg-black"
        >
          <div className="border-2 rounded-md">
            <Image src="/leftt.png" alt="alt" width={400} height={500} />
          </div>
          <div className="border-2 rounded-md">
            <Image
              src="/secondlogoremovebg.png"
              alt="alt"
              width={400}
              height={500}
            />
            {/* <video src="/ok.mp4" autoPlay muted/> */}
          </div>
          <div className="border-2 rounded-md scale-x-[-1]">
            <Image src="/leftt.png" alt="alt" width={400} height={500} />
          </div>
        </main>
        <main
          style={{ backgroundImage: "url(/Stars.png)" }}
          className="  w-full  bg-cover bg-center bg-black"
        >
          <h1 className="text-5xl text-center">AI Generated Course</h1>

          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex w-full mb-20 flex-wrap">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4">
                Courses For You ❤️.
              </h1>
              <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                Experience the convenience and effectiveness of personalized
                learning with courses designed to match your unique interests
                and pace. With our tailored approach, you'll find yourself
                engaged and motivated every step of the way.
              </p>
            </div>
            <div className="flex flex-wrap md:-m-2 -m-1 mylandingcourse">
              <div className="flex flex-wrap w-1/2 h-4 ">
                <div className="md:p-2  w-1/2">
                  <Image alt="gallery" src="/1.png" width={500} height={300} />
                  <p className="text-center">Opearting System</p>
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <Image
                    alt="gallery"
                    src="/linux.jpg"
                    width={501}
                    height={301}
                  />
                  <p className="text-center">Linux</p>
                </div>
              </div>

              {/*  */}
              <div className="flex flex-wrap w-1/2 ">
                <div className="md:p-2 p-1 w-1/2">
                  <Image
                    alt="gallery"
                    src="/brain.png"
                    width={500}
                    height={300}
                  />
                  <p className="text-center">Brain Thinking</p>
                </div>
                <div className="md:p-2 p-1 w-1/2 ">
                  <Image
                    alt="gallery"
                    src="/cloud.png"
                    width={500}
                    height={300}
                  />
                  <p className="text-center">Cloud Computing</p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <main
          style={{ backgroundImage: "url(/Stars.png)" }}
          className="  w-full  bg-cover bg-center bg-black"
        >
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
              <div className="lg:py-6 lg:pr-16">
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                        <svg
                          className="w-4 text-white-600"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <line
                            fill="none"
                            strokeMiterlimit="10"
                            x1="12"
                            y1="2"
                            x2="12"
                            y2="22"
                          />
                          <polyline
                            fill="none"
                            strokeMiterlimit="10"
                            points="19,15 12,22 5,15"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-px h-full bg-gray-100" />
                  </div>
                  <div className="pt-1 pb-8">
                    <p className="mb-2 text-lg font-bold">Step 1</p>
                    <p className="text-white-700">
                      Get started by logging in first, then hit the 'Create
                      Course' link or button in the navbar. You'll be instantly
                      whisked away to our innovative course creation page – just
                      like that! Boom, yeah!
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                        <svg
                          className="w-4 text-white-600"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <line
                            fill="none"
                            strokeMiterlimit="10"
                            x1="12"
                            y1="2"
                            x2="12"
                            y2="22"
                          />
                          <polyline
                            fill="none"
                            strokeMiterlimit="10"
                            points="19,15 12,22 5,15"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-px h-full bg-gray-300" />
                  </div>
                  <div className="pt-1 pb-8">
                    <p className="mb-2 text-lg font-bold">Step 2</p>
                    <p className="text-white-700">
                      Once you're in the 'Create Course' section, you'll find
                      sleek input boxes waiting for your course title and units.
                      Simply input your details, hit that button, and voilà! In
                      just a second, watch as your course details and units
                      magically generate right before your eyes.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                        <svg
                          className="w-4 text-white-600"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <line
                            fill="none"
                            strokeMiterlimit="10"
                            x1="12"
                            y1="2"
                            x2="12"
                            y2="22"
                          />
                          <polyline
                            fill="none"
                            strokeMiterlimit="10"
                            points="19,15 12,22 5,15"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-px h-full bg-gray-300" />
                  </div>
                  <div className="pt-1 pb-8">
                    <p className="mb-2 text-lg font-bold">Step 3</p>
                    <p className="text-white-700">
                      After your course details are magically generated, click
                      the newly generated button again to summon YouTube videos
                      and unit summaries. With a click, dive into the learning
                      section, where your educational journey awaits!
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                        <svg
                          className="w-4 text-white-600"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <line
                            fill="none"
                            strokeMiterlimit="10"
                            x1="12"
                            y1="2"
                            x2="12"
                            y2="22"
                          />
                          <polyline
                            fill="none"
                            strokeMiterlimit="10"
                            points="19,15 12,22 5,15"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-px h-full bg-gray-300" />
                  </div>
                  <div className="pt-1 pb-8">
                    <p className="mb-2 text-lg font-bold">Step 4</p>
                    <p className="text-white-700 text-justify ">
                      Congratulations on reaching the learning section - the
                      gateway to a world of knowledge with MindGenAI! Strap on
                      your learning cap and get ready for a rollercoaster ride
                      of educational fun. But wait, there's more! By purchasing
                      a subscription, you're not just upgrading your learning
                      experience, you're also helping us sprinkle more genius
                      dust on our courses for you and your fellow knowledge
                      enthusiasts. It's like adding extra cheese to your pizza -
                      because who doesn't love a little extra goodness, right?"
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                        <svg
                          className="w-6 text-green-600"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <polyline
                            fill="none"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="10"
                            points="6,12 10,16 18,8"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="pt-1">
                    <p className="mb-2 text-lg font-bold">Success</p>
                    <p className="text-gray-700" />
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full  grayscale-[100%]"
                  src="/ladygif.gif"
                  alt="bhai"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </main>
        <main
          style={{ backgroundImage: "url(/Stars.png)" }}
          className="flex  justify-center gap-10   w-full  bg-cover bg-center bg-black pb-10  "
        >
          <figure
            className="snip1390"
          >
            <Image
              src="/lol.jpg"
              alt="profile-sample3"
              className="profile"
              width={80}
              height={80}
            />
            <figcaption>
              <h4>UX Design</h4>
              <blockquote className="text-justify">
                MindGenAI transformed my learning experience! Personalized
                courses,engaging content, and seamless navigation made learning
                a breeze. I'm hooked!
              </blockquote>
            </figcaption>
          </figure>
          <figure className="snip1390 hover">
            <Image
              src="/testinomail2.jpg"
              alt="profile-sample5"
              className="profile"
              width={80}
              height={80}
            />
            <figcaption>
              <h4>Accountant</h4>
              <blockquote className="">
                MindGenAI exceeded all my expectations! The seamless integration
                of AI technology with educational content is a game-changer for
                Everyone.
              </blockquote>
            </figcaption>
          </figure>
          <figure className="snip1390">
            <Image
              src="/profileone.jpg"
              alt="profile-sample6"
              className="profile"
              width={80}
              height={80}
            />
            <figcaption>
              <h4>Public Relations</h4>
              <blockquote>
                MindGenAI's personalized approach to learning is simply
                revolutionary. It's like having a virtual tutor that knows
                exactly what you need to succeed!
              </blockquote>
            </figcaption>
          </figure>
        </main>

        <footer
          className="footer-distributed            "
          id="Contact"
          style={{ backgroundImage: "url(/Stars.png)" }}
        >
          <div className="footer-left">
            <Image
              className=""
              src="/secondlogoremovebg.png"
              alt=""
              width={200}
              height={100}
            />
            <p className="footer-links">
              {/* <a href="#hero" className="link-1">
                Home
              </a>
              <a href="#directabout">About</a>
              <a href="#directprojects">gallery</a> */}
            </p>
            <span></span>

            <p className="footer-company-name pl-4  " >
              Made  With
              <span>  ❤️</span>
                By
              <a href="https://krishnakushwaha.netlify.app/"> Krishna</a>
            </p>
          </div>

          <div className="footer-center">
            <div className="flex items-center  gap-5 ">
              <i>
                <LucideMapPinned></LucideMapPinned>
              </i>
              <p className="pb-3">
                <span>INDIA</span>
              </p>
            </div>

            <div className="flex items-center  gap-5 ">
              <i>
                <LucidePhoneCall></LucidePhoneCall>
              </i>
              <p className="pb-3">9922379106</p>
            </div>

            <div className="flex  items-center   gap-5 ">
              <i>
                <LucideMail></LucideMail>
              </i>
              <p className="pb-3">
                <a href="mailto:krishnakushwaha2312@gmail.com">
                  krishnakushwaha2312@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="footer-right">
            <p className="footer-company-about">
              <span>About the company</span>
              Your AI-Powered Learning Companion. Personalized learning experiences for all. Join us on a journey of discovery and growth. Elevate your learning experience with cutting-edge technology. Unlock your full potential with us
            </p>

            <div className="footer-icons">
              <a href="https://wa.me/918591193727">
                <i className="fa fa-whatsapp"></i>
              </a>
              <a href="https://www.instagram.com/luxhilspace/?igsh=MWRkNmIyeTQzZDhvMw%3D%3D">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Landingpage;
