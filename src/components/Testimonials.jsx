import image from "../assets/Ellipse4.png"
import { useState, useEffect } from "react";
import { ImQuotesLeft } from "react-icons/im";

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="padding bg-orange-600 bg-opacity-25 h-[596px] mt-[100px]"
    >
      <div className="flex flex-col items-center justify-a md:flex-row">
        {/* REVIEWS CAROUSEL  */}
        <div className="w-[50%] flex flex-col gap-y-4 opacity-100 px-5  bg-opacity-25 bg-no-repeat relative">
          <ImQuotesLeft className="absolute top-0 z-[-10] text-orange-600 opacity-25 text-8xl"/>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cum
            nam esse quisquam, blanditiis sapiente iure at ducimus? Atque, non.
            Culpa provident architecto veritatis velit aliquid similique illum
            accusantium debitis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Est in quaerat, recusandae libero ipsum eum
            necessitatibus aspernatur error sequi accusantium!
          </p>
          <div>
            <div className="flex items-center gap-x-3">
              <img src={image} alt="user icon" className="rounded-full" />
              <div>
                <h1 className="capitalize font-bold text-orange-500">
                  harry wilson
                </h1>
                <p className="font-[400] capitalize">property owner</p>
              </div>
            </div>
          </div>
        </div>
        {/* YOUTUBE VIDEO  */}
        <div className="w-[50%]"></div>
      </div>
    </section>
  );
};
