import SearchSvg from "./SearchSvg.jsx";
import "./Dashboard.css";
import { data } from "./data.js";
import { useState } from "react";

const Dashboard = () => {
  const [facilityFilter, setFacilityFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const filteredData = data.filter((item) => {
    return (
      item.facility.toLowerCase().includes(facilityFilter.toLowerCase()) &&
      item.date.includes(dateFilter)
    );
  });

  return (
    <div className="w-full max-w-[1512px] px-5 md:px-[120px] py-[22px] mx-auto">
      <div className="flex gap-[10px] justify-end items-center ">
        <button className="rounded-[5px] py-3 px-[18px] text-[#00BCD4] font-semibold bg-transparent border border-[#00BCD4] text-[14px]">
          Redeem Points
        </button>
        <button className="rounded-[5px] py-3 px-[18px] text-white font-semibold bg-[#00BCD4] outline-none text-[14px]">
          Earn Points
        </button>
      </div>

      <div className="flex gap-4 mt-3">
        <div>
          <p className="text-base text-gray-500 font-normal">
            Search Facilities
          </p>
          <p className="relative ">
            <input
              type="text"
              placeholder="Search..."
              value={facilityFilter}
              onChange={(e) => setFacilityFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button className="absolute inset-y-0 right-0 px-4 rounded-md">
              <SearchSvg />
            </button>
          </p>
        </div>
        <div>
          <p className="text-base text-gray-500 font-normal">Filter By Date</p>
          <p className="relative">
            <input
              type="text"
              placeholder="-- / -- /--"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button className="absolute inset-y-0 right-0 px-4 rounded-md">
              <SearchSvg />
            </button>
          </p>
        </div>
      </div>

      {/* card options */}
      <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          className={`py-5 px-12 hover:bg-[#167EE6] text-[#167EE6] hover:text-white transition-background duration-300 rounded-[4px] border-b-4 border-b-[#167EE6] card`}
        >
          <h3 className="font-bold text-[24px] ">N2,134.902</h3>
          <p className="text-sm text-gray-700 p">Your Cash Spending</p>
        </div>

        <div
          className={`py-5 px-12 hover:bg-[#219653] text-[#219653] hover:text-white transition-background duration-300 rounded-[4px] border-b-4 border-b-[#219653] card`}
        >
          <h3 className="font-bold text-[24px]">9,023</h3>
          <p className="text-sm text-gray-700 p">Points Earned</p>
        </div>
        <div
          className={`py-5 px-12 hover:bg-[#00BCD4] text-[#00BCD4] hover:text-white transition-background duration-300 rounded-[4px] border-b-4 border-b-[#00BCD4] card`}
        >
          <h3 className="font-bold text-[24px]">320</h3>
          <p className="text-sm text-gray-700 p">Point Balance</p>
        </div>
        <div
          className={`py-5 px-12 hover:bg-[#167EE6] text-[#167EE6]  hover:text-white transition-background duration-300 rounded-[4px] border-b-4 border-b-[#167EE6] card`}
        >
          <h3 className="font-bold text-[24px]">7600</h3>
          <p className="text-sm w-full text-gray-500 p">Points Redeemed</p>
        </div>
      </div>

      <div className="mt-8">
        <div className="w-full">
          <table className="w-full">
            <thead className="w-full ">
              <tr>
                <th className="p-2 font-normal text-center border-b-2 border-b-black">
                  S/N
                </th>
                <th className="p-2 font-normal text-center border-b-2 border-b-black">
                  Facility
                </th>
                <th className="p-2 font-normal text-center border-b-2 border-b-black">
                  Amount (N)
                </th>
                <th className="p-2 font-normal text-center border-b-2 border-b-black">
                  Date
                </th>
                <th className="p-2 font-normal text-center border-b-2 border-b-black">
                  Points
                </th>
                <th className="p-2 font-normal text-center border-b-2 border-b-black">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.sn}>
                  <td className="border-b-2 border-b-gray-300  p-2 text-center">
                    {item.sn}
                  </td>
                  <td className="border-b-2 border-b-gray-300  p-2 text-center">
                    {item.facility}
                  </td>
                  <td className="border-b-2 border-b-gray-300  p-2 text-center">
                    {item.amount}
                  </td>
                  <td className="border-b-2 border-b-gray-300  p-2 text-center">
                    {item.date}
                  </td>
                  <td className="border-b-2 border-b-gray-300  p-2 text-center">
                    {item.points}
                  </td>
                  <td className="border-b-2 border-b-gray-300  p-2 text-center">
                    {item.action}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
