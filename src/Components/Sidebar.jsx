import { IoHome } from "react-icons/io5";
import { GrPersonalComputer } from "react-icons/gr";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdOutlineInvertColors } from "react-icons/md";
import { HiCircleStack } from "react-icons/hi2";
import { DiGoogleAnalytics } from "react-icons/di";
import { RiAdminFill } from "react-icons/ri";
import Lady from "../assets/lady.avif";

const Sidebar = () => {
  return (
    <section className="bg-blue-500 text-white w-[17rem] h-[37.9rem] flex flex-col gap-16">
      <div className="flex items-center flex-col gap-2 mt-5">
        <img
          src={Lady}
          alt="Lady pink"
          className="border-4 border-orange-400 rounded-[50%] w-[100px] h-[100px] object-cover"
        />
        <h1 className="font-extrabold">Anamika Roy</h1>
        <p className="text-black font-medium">Designer</p>
      </div>
      <div className="border-b-4"></div>

      <div className="flex items-center flex-col">
        <ul className="text-xl font-medium">
          <li className="flex gap-5 p-1">
            <IoHome className="mt-1" />
            Home
          </li>
          <li className="flex gap-5 p-1">
            <GrPersonalComputer className="mt-1" />
            My Dashboard
          </li>
          <li className="flex gap-5 p-1">
            <BsFillPeopleFill className="mt-1" />
            People
          </li>
          <li className="flex gap-5 p-1">
            <MdOutlineInvertColors className="mt-1" />
            Perfomance
          </li>
          <li className="flex gap-5 p-1">
            <HiCircleStack className="mt-1" />
            Development
          </li>
          <li className="flex gap-5 p-1">
            <DiGoogleAnalytics className="mt-1" />
            Reports
          </li>
          <li className="flex gap-5 p-1">
            <RiAdminFill className="mt-1" />
            Admin
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
