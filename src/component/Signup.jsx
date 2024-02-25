// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";

import { Link } from "react-router-dom";
import Extra from "./Extra";

const Signup = () => {
  // eslint-disable-next-line no-unused-vars
  const [email, setEmail] = useState("");

  return (
    <div>
      <div className="px-8 py-2 absolute bg-gradient-to-b from-black z-10">
        <img
          className="xl:w-56 xsm:w-36 sm:w-48"
          src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
        />
      </div>
      <div className="xl:ml-28 sm:ml-56">
        <Link to="/">
          <button className="bg-red-500 xl:text-base xsm:text-sm sm:text-base w-20  xl:h-9 xsm:h-8 sm:h-9 rounded-md text-white absolute z-10 xl:ml-[1200px] xsm:ml-72 xl:mt-8 xsm:mt-7 sm:mt-9">
            Sign In
          </button>
        </Link>
      </div>
      <div className="absolute brightness-50">
        <img
          className="xl:h-[720px] xl:w-[1800px] xsm:h-[500px] border-b-8"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <div className="relative xl:pt-80 xsm:pt-28 xl:pl-64 xsm:pl-8">
        <h1 className="text-white  xl:text-5xl xsm:text-3xl sm:text-300xl xl:font-extrabold xsm:font-bold">
          Laughter. Tears. Thrills. Find it all on NetflixGPT.
        </h1>
        <h1 className="text-white  xl:text-2xl xsm:text-lg sm:text-xl  xl:mt-6 xsm:mt-3 xl:ml-60 sm:ml-20">
          Endless entertainment starts at just ₹249.{" "}
          <br className="xl:hidden sm:hidden" />
          <span className="inline-block xl:inline  xsm:block xsm:ml-24 xl:ml-0">
            Cancel anytime.
          </span>
        </h1>
        <h1 className="text-white  xl:text-2xl xsm:text-lg sm:text-2xl xl:mt-6 xsm:mt-4 xl:ml-48 xsm:ml-4 ">
          Ready to watch? Enter your email to <br className="xl:hidden" />{" "}
          <span className="inline-block xl:inline xsm:block xsm:ml-1 xl:ml-0">
            {" "}
            create or restart your membership.
          </span>
        </h1>
        <div className="mt-4 xl:ml-52">
          <input
            className="xl:text-xl h-12 xl:w-[450px] xsm:w-72 pl-5 xl:bg-slate-600 xsm:bg-slate-800 xsm:ml-2 xl:ml-0 rounded-md text-white opacity-80"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            placeholder="Email address"
          ></input>
          {email === "" ? (
            <button className="xl:ml-2 xsm:ml-20 xl:mt-0 xsm:mt-3 h-12 xl:w-56 xsm:w-36 rounded-md bg-red-700 text-white xl:text-xl">
              Get Started
            </button>
          ) : (
            <Link to={`/signup/${email}`}>
              <button className="xl:ml-2 xsm:ml-20 xl:mt-0 xsm:mt-3 h-12 xl:w-56 xsm:w-36 rounded-md bg-red-700 text-white xl:text-xl">
                Get Started
              </button>
            </Link>
          )}
        </div>
      </div>
      <div className="">
        <Extra />
      </div>
    </div>
  );
};

export default Signup;
