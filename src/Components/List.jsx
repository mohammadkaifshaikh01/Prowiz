import React from "react";

const List = () => {
  const data = [
    { application: "App A", list: "List 1", product: "Product X", reason: "Wrong Coding", quantity: "10", time: "01/02/2025" },
    { application: "App B", list: "List 2", product: "Product Y", reason: "Wrong Price", quantity: "12", time: "01/02/2025" },
    { application: "App C", list: "List 3", product: "Product Z", reason: "Wrong Factory Code", quantity: "2", time: "01/02/2025" },
  ];

  return (
    <div className="p-4 bg-white shadow-md rounded-lg overflow-x-auto">
      <table className="w-full min-w-max border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-sm md:text-base">
            <th className="px-6 py-5 text-center">Application</th>
            <th className="px-6 py-5 text-center">List</th>
            <th className="px-6 py-5 text-center">Product</th>
            <th className="px-6 py-5 text-center">Reason for Rejection</th>
            <th className="px-6 py-5 text-center">Quantity</th>
            <th className="px-6 py-5 text-center">Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className={`${
                i % 2 !== 0 ? "bg-gray-100" : "bg-white"
              } text-gray-600 text-sm md:text-base`}
            >
              <td className="px-6 py-6 text-center">{row.application}</td>
              <td className="px-6 py-6 text-center">{row.list}</td>
              <td className="px-6 py-6 text-center">{row.product}</td>
              <td className="px-6 py-6 text-center">{row.reason}</td>
              <td className="px-6 py-6 text-center">{row.quantity}</td>
              <td className="px-6 py-6 text-center">{row.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
