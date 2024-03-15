import SubscriptionButton from "@/components/ui/SubscriptionButton";
import { checkSubscription } from "@/lib/subscription";
import { Subscript } from "lucide-react";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const isPro = await checkSubscription();
  return (
    <>
      {/* <div className="py-8 mx-auto max-w-7xl mt-10"
      
      style={{ backgroundImage: "url(/Stars.png)" }}
      >
        <h1 className="text-3xl font-bold">Setting</h1>
        {isPro ? (
          <p className="text-xl text-secondary-foreground/60">
            You are Pro user
          </p>
        ) : (
          <p className="text-xl text-secondary-foreground/60">
            You are NOT Pro user
          </p>
        )}
        <SubscriptionButton isPro={isPro} />
      </div> */}
      <main
        style={{ backgroundImage: "url(/Stars.png)" }}
        className="flex  justify-center gap-10   w-full  h-full bg-cover bg-center bg-black maindivfull overflow-hidden "
      >
        <div className="h-full w-screen mt-40 ">
          <div className="flex flex-wrap items-center justify-center max-w-4xl mx-auto gap-4 sm:gap-0">
            <div className="w-full p-6 bg-black border border-gray-700 rounded-lg sm:w-1/2 bg-opacity-20 sm:rounded-r-none sm:p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold jakarta text-gray-100 sm:text-4xl">
                  Free Plan
                </h3>
              </div>
              <div className="mb-4 space-x-2">
                <span className="text-4xl font-bold text-gray-100">$0/mo</span>
              </div>
              <ul className="mb-6 space-y-2 text-gray-300">
                <li className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="">Ten Course Geneartion</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="">Limited Course Options</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="">Basic Settings </span>
                </li>
              </ul>

              {/* <SubscriptionButton isPro={isPro} /> */}
            </div>

            <div className="w-full p-6 rounded-lg shadow-xl sm:w-1/2 bg-gradient-to-br from-blue-600 to-purple-600 sm:p-8">
              <div className="flex flex-col items-start justify-between gap-4 mb-6 lg:flex-row">
                <div>
                  <h3 className="text-2xl font-semibold text-white jakarta sm:text-4xl">
                    Pro Plan
                  </h3>
                </div>
                <span className="order-first inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white uppercase bg-black rounded-full lg:order-none bg-opacity-20">
                  Go Pro
                </span>
              </div>
              <div className="mb-4 space-x-2">
                <span className="text-4xl font-bold text-white">$15/mo</span>
                <span className="text-2xl text-indigo-100 line-through">
                  $39/mo
                </span>
              </div>
              <ul className="mb-6 space-y-2 text-indigo-100">
                <li className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="">Unlimited Course Generation</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="">Unlimited API calls</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                      className=""
                    ></path>
                  </svg>
                  <span className="">Advanced Course Settings</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="">Priority Support</span>
                </li>
              </ul>
              <SubscriptionButton isPro={isPro} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
