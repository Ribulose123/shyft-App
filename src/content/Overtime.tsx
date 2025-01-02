import React, { useState } from "react";
import { IoFilter, IoPeopleOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { MdPersonOff } from "react-icons/md";
import { FaCheckCircle, FaRegTimesCircle } from "react-icons/fa";

interface OvertimeRequest {
  id: number;
  name: string;
  avatar: string;
  time: string;
  duration: string;
  reason: string;
}

const requests: OvertimeRequest[] = [
  {
    id: 1,
    name: "Abishola Kayode",
    avatar: "img/ab.jpeg",
    time: "2.00pm-4.00pm",
    duration: "2 hours",
    reason: "Unexpected Project Delay",
  },
  {
    id: 2,
    name: "Aisha Deo",
    avatar: "img/aisha.jpeg",
    time: "3.00pm-5.00pm",
    duration: "2 hours",
    reason: "Client Meeting Overrun",
  },
  {
    id: 3,
    name: "Bello Davis",
    avatar: "img/bello.jpeg",
    time: "4.00pm-6.00pm",
    duration: "2 hours",
    reason: "System Maintenance",
  },
  {
    id: 4,
    name: "John Taiwo",
    avatar: "img/tawio.jpeg",
    time: "1.00pm-3.00pm",
    duration: "2 hours",
    reason: "Team Presentation",
  },
];

const Overtime = () => {
  const [currentDate] = useState<Date>(new Date());
  const [selectedSigns, setSelectedSigns] = useState<{
    [key: number]: string | null;
  }>({});

  const formatDate = (date: Date): string => date.toISOString().split("T")[0];

  const handleSignChange = (id: number, status: string) => {
    setSelectedSigns((prev) => ({ ...prev, [id]: status }));
  };

  return (
    <div className="mt-3 rounded-lg">
      <div className="bg-white dark:bg-gray-800 w-[48vw] shadow-md px-4 py-4 rounded-xl">
        {/* Header */}
        <div className="flex justify-between items-center dark:text-white">
          <h2 className="text-lg font-bold mb-4">Manage Overtime Request</h2>
          <div className="flex gap-3">
            <input
              type="date"
              className="border border-gray-300 rounded-lg p-2 dark:text-gray-500"
              value={formatDate(currentDate)}
            />
            <button className="flex items-center gap-1 border border-gray-300 rounded-lg p-2">
              Filter
              <IoFilter />
            </button>
          </div>
        </div>

        {/* Labels */}
        <div className="overflow-auto">
          <table className="table-auto w-full text-left mt-2 dark:text-white border-collapse">
            <thead>
              <tr className="  bg-gray-300 border-collapse w-full border-b border-gray-200">
                <th className="py-2 px-4 text-[14px]"> Name</th>
                <th className="py-2 px-4 text-[14px]">Time</th>
                <th className="py-2 px-4 text-[14px]">Reason</th>
                <th className="py-2 px-4 text-[14px]">Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id} className="border-b border-gray-200">
                  {/* Name and Avatar */}
                  <td className="py-2 px-4 flex items-center gap-2 ">
                    <img
                      src={request.avatar}
                      alt={request.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-[13px]">{request.name}</span>
                  </td>

                  {/* Time */}
                  <td className="py-2 ">
                    <h5 className="text-[14px] mt-1">{request.time}</h5>
                    <span className="text-gray-400 text-[10px]">
                      {request.duration}
                    </span>
                  </td>

                  {/* Reason */}
                  <td className="py-2 px-4 -mt-1 text-[13px]">
                    {request.reason}
                  </td>

                  {/* Action Buttons or Status */}
                  <td className="py-2 px-4">
                    <div className="flex gap-2 items-center">
                      {selectedSigns[request.id] === undefined ? (
                        <>
                          <button
                            onClick={() =>
                              handleSignChange(request.id, "approved")
                            }
                            className="text-green-500 text-[15px]"
                          >
                            <FaCheckCircle />
                          </button>
                          <button
                            onClick={() =>
                              handleSignChange(request.id, "rejected")
                            }
                            className="text-red-500 text-[15px]"
                          >
                            <FaRegTimesCircle />
                          </button>
                        </>
                      ) : (
                        <div
                          className={`px-2 py-1 rounded-lg text-white text-[13px] ${
                            selectedSigns[request.id] === "approved"
                              ? "bg-green-500"
                              : "bg-red-500"
                          }`}
                        >
                          {selectedSigns[request.id] === "approved"
                            ? "Approved"
                            : "Rejected"}
                        </div>
                      )}
                    </div>
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

export default Overtime;
