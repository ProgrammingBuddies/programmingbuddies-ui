import React from "react";
import { Row, Col, Layout, Divider, Button } from "antd";
import logo from "../resources/logo.png";
import discordBtn from "../resources/join-us-on-discord-button.png";
import "../styles/App.scss";

const FooterComponent = () => {
  return (
    <div className="w-full bg-black pp-footer text-white pt-6 pb-2">
      <div className="content">
        <div class="flex">
          <div class="flex-1 md:w-1/2 lg:w-1/6 mb-4 grid col-gap-6">
            <h3 className="text-xl font-bold w-full">Programming Buddies</h3>
            <div className="text-base">
              Programming Buddies is a subreddit for people learning to program.
              It's also a place for people to group up to learn and teach
              programming to each other.
            </div>
          </div>
          <div class="flex-1 md:w-1/2 lg:w-1/6 mb-4 grid col-gap-6">
            <h3 className="text-xl font-bold">Links</h3>
            <a
              href="#responsive-header"
              className="block mt-4 lg:mt-0 text-white mr-4 text-base"
            >
              Home
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:mt-0 text-white mr-4 text-base"
            >
              Explore
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:mt-0 text-white text-base"
            >
              Add project
            </a>
          </div>
          <div class="flex-1 mb-auto mt-auto md:w-1/2 lg:w-1/6 mb-4 text-base">
            /r/programmingbuddies
            <br />
            Discord Server
          </div>
          <div className="flex-1 md:w-1/2 lg:w-3/6 mb-4 grid col-gap-6">
            <h3 className="text-xl font-bold w-full">Contributers</h3>
            <div className="grid grid-cols-3 text-base col-gap-2">
              <div>petak5</div>
              <div>Adenylatcyclase</div>
              <div>notarock</div>
              <div>Flurach</div>
              <div>1n5an1ty</div>
              <div>luko0610</div>
            </div>
          </div>
        </div>
        <p className="text-center">&#169; Programming Buddies 2020</p>
      </div>
    </div>
  );
};

export default FooterComponent;
