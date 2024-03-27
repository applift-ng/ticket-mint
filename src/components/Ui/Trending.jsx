import Trend from "./Trend";
function Trending() {
  const trendData = {
    name: "World Comedy Day",
    description:
      "Join Mc Conex and create moments of laghther never to be forgotten......",
    location: "Uyo",
    attendes: 10,
    date: new Date(),
  };
  return (
    <div className="flex w-1/3 flex-col gap-2 justify-center">
      <h3 className="text-white text-4xl font-semibold">Trending</h3>
      <Trend {...trendData} />
    </div>
  );
}

export default Trending;
