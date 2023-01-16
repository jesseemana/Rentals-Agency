import logo from "../assets/logo1.png";

export const Navbar = () => {
  return (
    <div className="padding">
      <div className="py-4  flex items-center justify-between border border-[#ffffff] border-l-0 border-r-0 border-t-0">
        <img src={logo} alt="" />
        <div className="font-bold flex gap-x-10 text-[18px] text-[#ffffff] leading-4 capitalize">
          <a href="#">home</a>
          <a href="#">landlord</a>
          <a href="#">tenants</a>
          <a href="#">contact us</a>
        </div>
        <div></div>
      </div>
    </div>
  );
};
