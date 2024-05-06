import Header from "@/components/layout/Header";
import Image from "next/image";
import image from "../../assets/samantha-gades-fIHozNWfcvs-unsplash.jpg";
import { FaLocationPin } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";

// this is the api to this app
// https://event-api-hkkc.onrender.com/api/v1/events

export default function Page({ params }: { params: { event: string } }) {
  const { event } = params;
  const events = {
    name: "World Comedy Day",
    organizers: "Mc conex",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, vero fuga eaque amet perspiciatis itaque magni ipsa mollitia temporibus. Temporibus nemo velit eius nesciunt nisi doloremque quis expedita maxime aspernatur excepturi quos mollitia reiciendis cupiditate totam fuga iure, obcaecati atque nulla provident dignissimos eaque. Adipisci sapiente possimus quidem! Mollitia?",
    location: "23 Nwaniba Road, Uyo",
    attendes: 1000,
    startprice: null,
    date: new Date(),
  };
  return (
    <>
      <Header />
      <div className="w-full md:px-14 py-5">
        <div className="flex gap-8">
          <Image
            src={image}
            className="w-3/5"
            width={0}
            height={0}
            alt={event}
          />

          <div>
            <h1 className="text-4xl">{events.name}</h1>
            <p className="text-justify font-medium">{events.description}</p>
            <p className="text-lg font-bold">
              Organized by {events.organizers}
            </p>
            <div>
              <span className="flex">
                <GrLocation size={24} />
                <p>{events.location}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
