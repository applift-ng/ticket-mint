import Event from "./Event";
function Trending() {
  const trendData = {
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
    <div className="md:flex w-1/3 hidden  flex-col gap-2 justify-center">
      <h3 className="text-white text-4xl font-semibold">Trending</h3>
      <Event {...trendData} />
    </div>
  );
}

export default Trending;
