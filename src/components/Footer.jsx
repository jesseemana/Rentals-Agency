import React from "react";
import shape from "../assets/Shape.png";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import {
  BsTwitter,
  BsFacebook,
  BsLinkedin,
  BsInstagram,
  BsYoutube,
  BsPinterest,
} from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="padding py-[150px]">
      <div className="flex justify-around border-[3px] border-t-orange-500 border-l-0 border-r-0 border-b-0 py-20">
        <h1 className="font-bold text-[52px] capitalize">logo</h1>
        <div>
          <p className="flex items-center mb-10 gap-x-2">
            <CiLocationOn className="icons" />
            345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
          </p>
          <div className="flex items-center justify-between">
            <p className="flex items-center gap-x-2">
              <FiPhone className="icons" />
              (123) 456-7890
            </p>
            <p className="flex items-center gap-x-2">
              <img src={shape} alt="" />
              <p>(123) 456-7890</p>
            </p>
          </div>
          <div className="flex gap-x-10 mt-10">
            <p className="text-[#0A142F] text-md">social media</p>
            <BsFacebook className="icons" />
            <BsInstagram className="icons" />
            <BsLinkedin className="icons" />
            <BsTwitter className="icons" />
            <BsYoutube className="icons" />
            <BsPinterest className="icons" />
          </div>
        </div>
      </div>
      <div className="flex justify-around py-10">
        <ul className="flex gap-x-5">
          <li>ABOUT US</li>
          <li>CONTACT</li>
          <li>HELP</li>
          <li>PRIVACY POLICY</li>
          <li>DISCLAIMER</li>
        </ul>
        <p className="text-[#0A142F] text-[14px]">
          Copyright © 2020 Minimumlivingcost. All rights reserved
        </p>
      </div>
    </div>
  );
};
