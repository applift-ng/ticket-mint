import Image from "next/image";
import img from "../../assets/World comedy day.jpg";
import Link from "next/link";
function Trend({ date, name, description, attendes, location }) {
  const formattedDate = new Date(date).toLocaleDateString();
  return (
    <div className="w-4/5 h-[52vh] relative rounded-md flex flex-col gap-2 bg-purple-secondary p-4">
      <div className={`w-full mx-auto h-1/2 flex `}>
        <Image
          className=" object-cover"
          width={0}
          height={0}
          src={img}
          alt={name}
        />
      </div>
      <div className="w-full flex gap-2 flex-col">
        <span>
          <h3 className="text-xl font-medium">{name}</h3>
          <p className="absolute top-6 right-6 p-1 rounded bg-verdant/30">
            {formattedDate}
          </p>
        </span>
        <p className="font-medium">{description}</p>
        <span className="flex w-full justify-between">
          <p className="font-medium">{location}</p>
          <p>
            <span className="text-verdant font-bold">{attendes}</span> people
            are attending
          </p>
        </span>
        <Link className="" href={"/"}>
          <button className="py-2 bg-verdant w-full font-medium text-white rounded">
            View Event
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Trend;
