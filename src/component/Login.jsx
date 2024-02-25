/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Validate from "../utils/Validate";
import { auth } from "../utils/Firebase";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import lang from "../utils/LanguageConstants";
const Login = () => {
  const [errormessage, setErrorMessage] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.language.lang);
  const handleButton = () => {
    const messgae = Validate(email.current.value, password.current.value);

    setErrorMessage(messgae);

    if (messgae === null) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: "Jane Q. User",
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("Incorrect email or password");
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute brightness-50">
        <img
          className="h-screen w-screen "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <div className=" xl:pt-12 xsm:pt-6 sm:pt-8  sm:pl-16 xl:pl-20 xsm:pl-10 absolute bg-black xl:ml-[550px] xsm:ml-14 sm:ml-36 xl:mt-28 xsm:mt-44 sm:mt-36  xl:h-[600px] xsm:h-[480px] sm:h-[550px]   xl:w-[450px] sm:w-[400px] opacity-80">
        <h1 className="text-white xl:text-3xl xsm:text-xl sm:text-3xl font-bold">
          {lang[langKey].SignIn}
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="grid mt-8 "
        >
          <input
            ref={email}
            className="xl:w-72 xsm:w-48 sm:w-64 xl:h-12 xsm:h-10 sm:h-12 xl:text-base xsm:text-xs sm:text-base bg-slate-800 pl-4  rounded-md text-white"
            type="text"
            placeholder={lang[langKey].Emailorphone}
          ></input>
          <input
            ref={password}
            className="xl:w-72 xsm:w-48 sm:w-64  xl:h-12 xsm:h-10 sm:h-12  xl:text-base xsm:text-xs sm:text-base mt-4 bg-slate-800 pl-4 rounded-md text-white"
            type="password"
            placeholder={lang[langKey].Password}
          ></input>
          <p className="mt-3 text-red-500 ml-1">{errormessage}</p>
          <button
            onClick={() => {
              handleButton();
            }}
            className="xl:w-72 xsm:w-48 sm:w-64 xl:h-12 xsm:h-10 sm:h-12 xl:text-base xsm:text-xs sm:text-base pr-4 xl:mt-8 xsm:mt-3 bg-red-600 text-white rounded-md "
          >
            {lang[langKey].SignIn}
          </button>
          <div className="flex mt-3">
            <input type="checkbox" name="radio"></input>
            <span className="text-white xl:text-sm xsm:text-xs sm:text-sm  ml-1">
              Remember me
            </span>
            <h1 className="text-white xl:ml-28 xsm:ml-14 sm:ml-20 xl:text-sm xsm:text-xs sm:text-sm  ">
              {lang[langKey].NeedHelp}
            </h1>
          </div>
          <div className="xl:mt-20 sm:mt-16 xsm:mt-14">
            <h1 className="text-gray-500 xl:text-[16px] xsm:text-[11px] sm:text-sm">
              {lang[langKey].NewTo}
              <Link to="/signin">
                <span className="text-white"> Sign up now.</span>
              </Link>
              <h1 className="text-gray-500 xl:text-sm xsm:text-xs sm:text-sm xl:mt-4 xsm:mt-2 sm:mt-3 xl:w-72 xsm:w-56">
                {lang[langKey].TextofRec}
              </h1>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
