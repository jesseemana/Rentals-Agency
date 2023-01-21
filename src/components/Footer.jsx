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
import { useState, useEffect } from "react";

export const Footer = () => {
  const [year, setYear] = useState(0);

  useEffect(() => {
    setYear(() => new Date().getFullYear());
  }, []);

  return (
    <section id="footer" className="padding mt-[200px]">
      <div className="flex justify-around border-[3px] border-t-orange-600 border-l-0 border-r-0 border-b-0 py-20">
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
            <div className="flex items-center gap-x-2">
              <img src={shape} alt="fax machine icon" />
              <p>(123) 456-7890</p>
            </div>
          </div>
          <div className="flex gap-x-10 mt-10">
            <p className="text-[#0A142F] text-md capitalize">social media</p>
            <BsFacebook className="icons" />
            <BsInstagram className="icons" />
            <BsLinkedin className="icons" />
            <BsTwitter className="icons" />
            <BsYoutube className="icons" />
            <BsPinterest className="icons" />
          </div>
        </div>
      </div>
      <div className="after:content-[''] after:bg-[#8892b0] after:bg-opacity-25 after:ml-[60px] after:h-[1px] after:w-[90%] after:relative after:inline-block"></div>
      <div className="flex items-center justify-around  py-10">
        <div className="flex gap-x-4">
          <a href="#">ABOUT US</a>
          <a href="#">CONTACT</a>
          <a href="#">HELP</a>
          <a href="#">PRIVACY POLICY</a>
          <a href="#">DISCLAIMER</a>
        </div>
        <p className="text-[#63666b] text-[14px]">
          Copyright © {year} Minimumlivingcost. All rights reserved
        </p>
      </div>
    </section>
  );
};
