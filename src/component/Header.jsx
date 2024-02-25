// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect } from "react";
import { auth } from "../utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { SUPPORTED_LANGUAGE } from "../utils/constants";
import { addLanguageMenu } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className=" xl:flex xsm:flex xl:px-8 py-0 absolute   bg-gradient-to-b from-black z-10">
      <div>
        <img
          className="xl:w-56 xsm:w-36 sm:w-44"
          src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
        />
      </div>
      <div className="xl:ml-[800px] xsm:ml-40 sm:ml-80 xl:pt-9 xsm:pt-5 sm:pt-7 ">
        <select
          className="text-white rounded-lg bg-gray-900 xl:h-8 xl:w-24 sm:h-8 sm:w-24 xl:text-base xsm:text-xs sm:text-base xsm:w-20  pl-2"
          onChange={(e) => {
            dispatch(addLanguageMenu(e.target.value));
          }}
        >
          {SUPPORTED_LANGUAGE.map((lang) => {
            return (
              <option
                className="text-white "
                key={lang.identifier}
                value={lang.identifier}
              >
                {lang.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Header;
