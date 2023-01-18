import React, { useState } from "react";
import { FaAsterisk } from "react-icons/fa";

export const Form = () => {
  return (
    <section id="form" className="padding">
      <div className="py-10">
        <h1 className="text-center capitalize font-[900] text-[22px]">
          your property with us and be confident your room will be filled out!
        </h1>
        <form action="submit" className="py-5">
          <h1 className="font-[800] text-center text-[23px] text-orange-500 capitalize">
            add a new property
          </h1>
          <div>
            <div>
              <label htmlFor="name" className="flex items-center">
                Name
                <span>
                  <FaAsterisk className="text-orange-500 text-[13px]" />
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor="name" className="flex items-center">
                Addres
                <span>
                  <FaAsterisk className="text-orange-500 text-[13px]" />
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor="name" className="flex items-center">
                Unit Number
                <span>
                  <FaAsterisk className="text-orange-500 text-[13px]" />
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="form-input"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
