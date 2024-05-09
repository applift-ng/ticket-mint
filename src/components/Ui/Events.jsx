import React from "react";
import Event from "./Event";
import World from "../../assets/World comedy day.jpg";

const Events = () => {
  const event = {
    eventName: "World Comedy Day",
    createdBy: "Mc conex",
    description:
      "Join Mc Conex and create moments of laghther never to be forgotten......",
    location: "23 Nwaniba Road, Uyo",
    attendes: 1000,
    startprice: null,
    eventFlier: World,
    date: new Date(),
  };
  return (
    <div className="md:p-10 p-5 flex w-full justify-center items-center flex-col">
      <div className="flex flex-col text-center items-center">
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
