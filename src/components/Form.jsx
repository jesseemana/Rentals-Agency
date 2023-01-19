import React, { useState } from "react";
import { FaAsterisk } from "react-icons/fa";

export const Form = () => {
  return (
    <section id="form" className="padding">
      <div className="py-10">
        <h1 className="text-center capitalize font-[900] text-[22px] py-5">
          your property with us and be confident your room will be filled out!
        </h1>
        <form
          action="submit"
          className="py-5 flex flex-col itesm-center px-20 shadow-lg border rounded-md"
        >
          <h1 className="font-[800] text-center text-[23px] text-orange-500 capitalize">
            add a new property
          </h1>
          {/* START OF FIRST GRID */}
          <div className="grid grid-cols-3 ml-[50px] gap-x-[200px] py-10">
            {/* NAME  */}
            <div className="mb-5">
              <label htmlFor="name" className="form-label">
                name
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
            {/* ADDRESS NUMBER  */}
            <div className="mb-5">
              <label htmlFor="address" className="form-label">
                address
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
            {/* UNIT NUMBER  */}
            <div className="mb-5">
              <label htmlFor="unit number" className="form-label">
                unit number
                <span>
                  <FaAsterisk className="text-orange-500 text-[13px]" />
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="form-input "
              />
            </div>
            {/* SELECT CITY */}
            <div className="mb-5">
              <label htmlFor="city" className="form-label">
                city
                <span>
                  <FaAsterisk className="text-orange-500 text-[13px]" />
                </span>
              </label>
              <select
                name="cities dropdown"
                id=""
                className="form-input w-full capitalize"
              >
                <option value="select city">select city</option>
                <option value="LA">los angeles</option>
                <option value="SA">san fransisco</option>
                <option value="FL">florida</option>
                <option value="OR">oregon</option>
                <option value="ATL">atalanta</option>
              </select>
            </div>
            {/* SELECT STATE  */}
            <div className="mb-5">
              <label htmlFor="city" className="form-label">
                state
                <span>
                  <FaAsterisk className="text-orange-500 text-[13px]" />
                </span>
              </label>
              <select
                name="cities dropdown"
                id=""
                className="form-input w-full capitalize"
              >
                <option value="select city">select state</option>
                <option value="CL">california</option>
                <option value="NY">new york</option>
                <option value="GR">georgia</option>
                <option value="OH">ohio</option>
                <option value="">illinois</option>
              </select>
            </div>
            {/* ROOM TYPE  */}
            <div className="mb-5">
              <label htmlFor="city" className="form-label ">
                room type
                <span>
                  <FaAsterisk className="text-orange-500 text-[13px]" />
                </span>
              </label>
              <select
                name="cities dropdown"
                id=""
                className="form-input w-full capitalize"
              >
                <option value="select city">select room type</option>
                <option value="">single bed</option>
                <option value="">double bed</option>
                <option value="">single bathroom</option>
                <option value="">double bathrooms</option>
              </select>
            </div>
            {/* PRICE */}
            <div className="">
              <label htmlFor="unit number" className="form-label">
                enter price
                <span>
                  <FaAsterisk className="text-orange-500 text-[13px]" />
                </span>
              </label>
              <input
                type="number"
                placeholder="Enter Price"
                className="form-input"
              />
            </div>
          </div>
          {/* DESCRIPTION */}
          <div className="ml-[50px] mb-5">
            <label htmlFor="description" className="form-label">
              description
              <span>
                <FaAsterisk className="text-orange-500 text-[13px]" />
              </span>
            </label>
            <textarea
              name="description"
              id=""
              // cols="30"
              rows="7"
              className="form-input resize-none rounded-md w-full"
            />
          </div>
          {/* UPLOAD SECTION */}
          <div className="ml-[50px]">
            <label htmlFor="upload photos" className="form-label">
              upload photos
            </label>
            <div className="border border-dotted border-orange-400 py-10 rounded-md">
              <h1 className="text-center font-bold">
                Drag your images here, or{" "}
                <span className="text-orange-500 font-bold">browse</span>
              </h1>
              <p className="font-[500] text-[12px] text-center text-gray-500">
                Supported: JPG, JPEG, PNG
              </p>
            </div>
          </div>
          <button className="button mx-auto my-10 p-3">
            add a new property
          </button>
        </form>
      </div>
    </section>
  );
};
