import bed from "../assets/bed.png"
import group from "../assets/group.png"
import person from "../assets/person.png"
import bottles from "../assets/bottles.png"

export const Flexibility = () => {
  return (
    <section id="flexibilty" className="padding py-10">
      <div className="flex items-center gap-x-5 justify-around">
        {/* IMAGES GO HERE */}
        <div className="grid grid-cols-2">
          <img src={bed} alt="" />
          <img src={person} alt="" />
          <img src={bottles} alt="" />
          <img src={group} alt="" />
        </div>
        {/* TEXT GO HERE */}
        <div className="w-[50%]">
          <h1 className="font-bold text-[#000000] capitalize text-[36px] my-3">
            flexibility and options that suit your lifestyle
          </h1>
          <p className="my-3 leading-8 text-[20px]">
            You need it? We got it. We make finding your next home easy,
            comfortable, and simple. From our hapiness guarantee to our
            selective roommate finder option. We provide you the flexibility
            that you most desire.
          </p>
          <button className="button my-3">
            search rooms
          </button>
        </div>
      </div>
    </section>
  );
};
