import React from "react";
import Event from "./Event";

const Events = () => {
  const event = {
    name: "World Comedy Day",
    organizers: "Mc conex",
    description:
      "Join Mc Conex and create moments of laghther never to be forgotten......",
    location: "23 Nwaniba Road, Uyo",
    attendes: 1000,
    startprice: null,
    date: new Date(),
  };
  return (
    <div className="md:p-10 flex w-full justify-center items-center flex-col">
      <div className="flex flex-col items-center">
        <h3 className="text-4xl font-semibold"> Around You</h3>
        <p>This are the least of the events happening around You</p>
      </div>
      <div className="grid w-full grid-cols-1 gap-5  md:grid-cols-3 lg:grid-cols-4 ">
        <Event {...event} />
        <Event {...event} />
        <Event {...event} />
        <Event {...event} />
      </div>
      <div>
        <div>
          <h3>Explore more events</h3>
        </div>
        <div className="grid w-full grid-cols-1 gap-5  md:grid-cols-3 lg:grid-cols-4 ">
          <Event {...event} />
          <Event {...event} />
          <Event {...event} />
          <Event {...event} />
        </div>
      </div>
    </div>
  );
};

export default Events;
