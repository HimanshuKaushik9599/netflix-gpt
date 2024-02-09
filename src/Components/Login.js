import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidationdata } from "../Utils/Validation.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/Firebase.js";
import { Background_img } from "../Utils/Constants.js";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const handleButtonCLick = () => {
    const message = checkValidationdata(
      email.current.value,
      password.current.value
    );
    seterrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
            })
            .catch((error) => {
              seterrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />

      <div className="absolute">
        <img src={Background_img} alt="background" className=" h-screen object-cover w-screen"></img>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute w-[75%] md:w-3/12 p-7 md:p-11 bg-black  my-36 md:my-36 mx-auto right-0 left-0 text-white bg-opacity-80 "
      >
        <h1 className="font-bold text-2xl md:text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}{" "}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 my-4 w-full bg-gray-700"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 "
        ></input>
        <p className="text-red-700 font-bold text-lg p-1">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonCLick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}{" "}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up now"
            : "Already registered? Sign In Now"}{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
