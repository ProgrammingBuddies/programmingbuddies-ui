import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../resources/logo_rounded.png";

const HeaderComponent = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  return (
    <>
      <figure className="logo">
        <img src={logo} />
      </figure>
      <nav>
        <div className="float-left">
          <h1 className="p-0 m-0">Programming Buddies</h1>
        </div>

        <div className="float-right">
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 text-base"
              >
                Home
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 text-base"
              >
                Explore
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-white text-base"
              >
                Add project
              </a>
              <button className="btn-main ml-5 text-base">Sign-Up</button>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-white ml-5 text-base"
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="w-full float-left m-0">
        <div className="uppercase text-white text-xs">
          Find your programming buddy
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
