const data = [
  {
    icons: "https://i.ibb.co/Z6SLz1dN/Frame-9.png",
    name: "Items Processed",
    number: 3200,
  },
  {
    icons: "https://i.ibb.co/7xxSQBz1/Frame-9-1.png",
    name: "Items Passed",
    number: 1050,
  },
  {
    icons: "https://i.ibb.co/7xxSQBz1/Frame-9-1.png",
    name: "Items Rejected",
    number: 18,
  },
  {
    icons: "https://i.ibb.co/7xxSQBz1/Frame-9-1.png",
    name: "Efficiency (Units/Minute)",
    number: 125.75,
  },
];

const States = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {data.map((e, id) => (
        <div
          key={id}
          className="border border-gray-300 rounded-xl p-5 flex flex-col items-left text-left bg-white shadow-md"
        >
          <img src={e.icons} alt={e.name} className="w-11 h-11 object-contain mb-3" />
          <p className="text-lg font-semibold">{e.name}</p>
          <p className="text-gray-500 text-xl font-bold">{e.number}</p>
        </div>
      ))}
    </div>
  );
};

export default States;
