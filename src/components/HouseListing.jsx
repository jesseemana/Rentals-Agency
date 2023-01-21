import React from "react";
import { BiBath, BiBed } from "react-icons/bi";
import { MdOutlineWindow } from "react-icons/md";

export const HouseListing = ({ houseData }) => {
  return (
    <div className="grid grid-row md:grid-cols-3 gap-x-[170px]">
      {/* IMPORT THE ARRAY CONTAINING ALL THE HOUSE DATA AT THE TOP AND MAP INTO A NEW CONTAINER ELEMENT */}
      {houseData?.map((house, index) => {
        return (
          <div
            key={index}
            className="shadow-lg basis-[33.3333333%] bg-[#ffffff] my-5 rounded-[27px] border"
          >
            <img src={house.Image} alt="house interior" />
            <div className="">
              <div className="px-3">
                <h2 className="font-bold text-[23px] py-3">{house.location}</h2>
                <div className="py-3">
                  <p className="text-[#818181] font-semibold text-[18px] capitalize">
                    {house.type}
                  </p>
                  <h1 className="text-[25px] text-[#F4511E] font-bold">
                    {house.price}
                  </h1>
                </div>
              </div>
              <div className="flex justify-around rounded-b-[27px] border border-b-0 border-l-0 border-r-0">
                <div className="flex items-center text-[18px] font-bold py-3 px-8">
                  <BiBath />
                  {house.bed}
                </div>
                <div className="flex items-center text-[18px] font-bold py-3 px-9 border border-t-0 border-b-0">
                  <BiBed />
                  {house.bath}
                </div>
                <div className="flex items-center text-[18px] font-bold py-3 px-8">
                  <MdOutlineWindow />
                  {house.star}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
