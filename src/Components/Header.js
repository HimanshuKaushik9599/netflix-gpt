import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice.js";
import { LOGO, Supported_Languages, User_Avtar } from "../Utils/Constants.js";
import {toogleGptSearchView} from "../Utils/gptSlice.js";
import { changeLanguage } from "../Utils/config.js";

const Header = () => {
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    // console.log("logout pressed");
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user.uid;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribed will call when  Header component will UnMount;
    return () => unsubscribe();
  }, []);

  const handleGptSearchButton = () => {
    // console.log("hi");
    dispatch(toogleGptSearchView());
  };

  const handleLanguageChange =(e)=>{
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="absolute w-full px-8 py-2  flex  justify-between z-10 flex-col md:flex-row bg-gradient-to-b from-black  ">
      <img src={LOGO} alt="Logo" className="w-44 mx-auto md:mx-0 "></img>
      {user && (
        <div className="flex p-2 justify-between">
        {showGptSearch && (  <select className="p-2 my-2 bg-gray-900 text-white  rounded-lg" onChange={handleLanguageChange} >
            {Supported_Languages.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>)
}
          <button
            className="bg-purple-600 py-2 px-2 my-2 mx-2 rounded-lg"
            onClick={handleGptSearchButton}
          >
          {showGptSearch ? "Homepage" :"GPT Search"}  
          </button>
          <img src={User_Avtar} alt="login-avtar" className=" hidden md:block w-12 h-12 "></img>
          <button className="font-bold text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
