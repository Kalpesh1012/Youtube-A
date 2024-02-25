/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Validate from "../utils/Validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/Firebase";

const Password = () => {
  const { email } = useParams();
  const navigate = useNavigate();
  const [emails, setEmails] = useState(email);
  const [errormessage, setErrorMessage] = useState(null);
  const password = useRef(null);
  const handleButton = () => {
    const messgae = Validate(emails, password.current.value);

    setErrorMessage(messgae);

    if (messgae === null) {
      createUserWithEmailAndPassword(auth, emails, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "" + errorMessage);
          // ..
        });
    }
  };
  return (
    <div>
      <div className="flex border-b-2">
        <div className="  ">
          <img
            className="xl:w-60 xsm:w-28"
            src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
          />
        </div>
        <div className="xl:ml-[1100px] xsm:ml-48  xl:mt-10 xsm:mt-4">
          <Link to="/">
            <h1 className="font-semibold text-xl">Sign In</h1>
          </Link>
        </div>
      </div>
      <div className="xl:ml-[550px] xsm:ml-4 xl:mt-12 xsm:mt-10">
        <h1 className="xl:text-4xl xsm:text-3xl font-serif ">
          Create a password to start{" "}
        </h1>
        <h1 className="mt-1 xl:text-4xl xsm:text-3xl xl:ml-0 xsm:ml-10 font-serif ">
          your membership
        </h1>
        <h1 className="mt-3 xl:ml-0 xsm:ml-2 xl:text-xl xsm:text-lg">
          Just a few more steps and you are done!<br></br>
          <span className="xl:ml-0 xsm:ml-16">We hate paperwork, too.</span>
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="grid mt-2 xl:ml-0 xsm:ml-4"
        >
          <input
            value={emails}
            onChange={(e) => {
              setEmails(e.target.value);
            }}
            className="xl:w-[400px] xsm:w-80 h-12  pl-4 rounded-md border-2 border-black"
            type="text"
            placeholder="Email or phone number"
          ></input>
          <input
            ref={password}
            className="xl:w-[400px] xsm:w-80 h-12 mt-4  pl-4 rounded-md border-2 border-black"
            type="password"
            placeholder="Add a password"
          ></input>
          <p className="mt-3 text-red-500 ml-1">{errormessage}</p>
          <button
            onClick={() => {
              handleButton();
            }}
            className="xl:w-[400px] xsm:w-80 h-12 mt-4 bg-red-600 text-white rounded-md "
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Password;
