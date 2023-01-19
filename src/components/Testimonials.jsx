import { useState, useEffect } from "react";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="padding bg-pink-100 h-[500px] py-10">
      <div className="flex flex-col items-center justify-a md:flex-row">
        {/* REVIEWS CAROUSEL  */}
        <div className="w-[50%] flex flex-col gap-y-4 px-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cum
            nam esse quisquam, blanditiis sapiente iure at ducimus? Atque, non.
            Culpa provident architecto veritatis velit aliquid similique illum
            accusantium debitis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Est in quaerat, recusandae libero ipsum eum
            necessitatibus aspernatur error sequi accusantium!
          </p>
          <div>
            <div className="flex items-center">
              <img src="" alt="user icon" className="rounded-full" />
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
