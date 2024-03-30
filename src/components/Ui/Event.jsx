import Image from "next/image";
import img from "../../assets/World comedy day.jpg";
import Link from "next/link";
import { BsPeopleFill } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
import { FaLocationPin } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
function Event({
  date,
  name,
  description,
  attendes,
  location,
  organizers,
  startprice,
}) {
  const formattedDate = new Date(date).toLocaleDateString();
  return (
    <div className="h-[50vh] relative shadow-lg justify-between rounded-md flex flex-col gap-2 bg-purple-secondary p-4">
      <div className={`w-full mx-auto h-1/2 flex `}>
        <Image
          className=" object-cover"
          width={0}
          height={0}
          src={img}
          alt={name}
        />
      </div>
      <div className="w-full flex h-1/2 flex-col">
        <span>
          <h3 className="text-xl font-medium">{name}</h3>
          <p className="absolute flex  gap-1 top-6 right-6 p-1 rounded bg-verdant/30">
            <BiCalendar size={20} />
            {formattedDate}
          </p>
        </span>
        <p className="font-medium opacity-60">
          Organized by <span className="font-bold">{organizers}</span>
        </p>
        <span className="w-full justify-between flex text-sm ">
          <p className="font-medium gap-1 opacity-70 flex">
            <GrLocation size={20} /> {location}
          </p>

          <span className="flex gap-1 text-verdant items-center font-bold">
            <BsPeopleFill /> {attendes}+
          </span>
        </span>
        <span className="flex w-full mt-5 justify-between">
          <span>
            <p className="text-xs">Tickets from</p>
            <p className="font-semibold ">
              {startprice ? `N${startprice}` : "Free"}
            </p>
          </span>
          <Link className="" href={"/"}>
            <button className="py-2 px-3 hover:bg-verdant bg-transparent w-full border-verdant border font-medium hover:text-white  text-verdant duration-500 rounded">
              View Event
            </button>
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Event;
