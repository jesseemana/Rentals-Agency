import image from "../assets/desc.png";
import { desc } from "../data";
import { desc2 } from "../data";

export const Desc = () => {
  return (
    <div className="padding">
      <h1 className="capitalize font-bold text-[36px]">
        {" "}
        <span
          className="border border-b-#
#F4511E border-l-0 border-r-0 border-t-0"
        >
          {" "}
          minimum living cost{" "}
        </span>
        takes care of everything
      </h1>
      <div className="flex flex-col md:flex-row">
        <img src={image} alt="" />
        <div className="flex flex-col justify-center">
          <div className="grid justify-center items-center grid-cols-3 ">
            {desc?.map((item, index) => {
              return (
                <div key={index} className="">
                  <div className="rounded-[10px] shadow-md p-4 bg-#ffffff w-[77px] h-[77px]">
                    <img src={item.icon} alt="" />
                  </div>
                  <p className="text-[#18191F] font-semibold">{item.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="grid justify-center items-center grid-cols-3 my-20">
            {desc2?.map((item, index) => {
              return (
                <div key={index} className="">
                  <div className="rounded-[10px] shadow-md p-4 bg-#ffffff w-[77px] h-[77px]">
                    <img src={item.icon} alt="" />
                  </div>
                  <p className="text-[#18191F] font-semibold">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
