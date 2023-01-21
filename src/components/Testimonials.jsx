import image2 from "../assets/hero.png";
import image from "../assets/Ellipse4.png";
import playbtn from "../assets/play-btn.png";
import { useState, useEffect } from "react";
import { ImQuotesLeft } from "react-icons/im";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-y-0 items-center relative">
        <ImQuotesLeft className="absolute top-20 left-20 z-[-10] text-orange-600 opacity-25 text-8xl " />
        {/* REVIEWS CAROUSEL  */}
        <div className="flex flex-col w-full bg-orange-600 bg-opacity-25 gap-y-10 opacity-100 px-[100px] py-[150px]">
          <p>
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
          <div className="flex flex-row gap-x-3">
            <p className="h-2 w-2 bg-orange-600 rounded-full"></p>
            <p className="h-2 w-2 bg-gray-400 rounded-full"></p>
            <p className="h-2 w-2 bg-gray-400 rounded-full"></p>
          </div>
        </div>
        {/* YOUTUBE VIDEO  */}
        <div className="w-full mt-[-235px] md:mt-0 border relative ">
          <img
            src={image2}
            alt="place holder image for the youtube thumbnail"
            className="lg:h-[593px] w-full bg-linear-gradient(180deg, rgba(0, 0, 0, 0) 14.58%, rgba(56, 56, 56, 0.84) 100%)"
          />
          {/* PLAY BUTTON */}
          <a href="#">
            <img
              src={playbtn}
              alt="play button icon"
              className="absolute top-[240px] left-[140px] lg:top-[240px] lg:left-[330px]"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
