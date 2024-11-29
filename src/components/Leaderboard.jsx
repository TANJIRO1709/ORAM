import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const Leaderboard = ({ API }) => {
  const [combinedLeaderboard, setCombinedLeaderboard] = useState([]);
  const fetchCombinedLeaderboard = async () => {
    try {
      const response = await axios.get(`${API}api/combinedleaderboard`);
      const data = response.data;

      if (!Array.isArray(data)) {
        console.error("Invalid data format: expected an array.");
        return;
      }
      const uniqueEntries = {};
      data.forEach((entry) => {
        if (
          entry.name &&
          typeof entry.score === "number"
        ) {
          const normalizedName = entry.name.trim().toLowerCase();
      
          if (
            !uniqueEntries[normalizedName] || 
            entry.score > uniqueEntries[normalizedName].score
          ) {
            uniqueEntries[normalizedName] = entry;
          }
        }
      });
      const filteredData = Object.values(uniqueEntries);
      const sortedData = filteredData.sort((a, b) => b.score - a.score);
      const totalEntries = sortedData.length;

      const dataWithPercentiles = sortedData.map((entry, index) => ({
        ...entry,
        percentile: ((totalEntries - index) / totalEntries) * 100,
      }));

      setCombinedLeaderboard(dataWithPercentiles);
    } catch (error) {
      console.error("Error fetching leaderboard:", error.message || error);
    }
  };

  useEffect(() => {
    if (typeof API === "string" && API.trim() !== "") {
      fetchCombinedLeaderboard();
    } else {
      console.error("Invalid API URL.");
    }
  }, [API]);

  return (
    <div className="leaderboard max-w-6xl mx-auto my-8 p-4 px-4 py-10 rounded-lg shadow-lg bg-blue-500">
      <h1 className="text-5xl font-bold text-white text-center mb-6">
        Leaderboard
      </h1>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-100 dark:text-gray-300">
          <thead className="text-md text-gray-800 uppercase bg-gray-200 dark:bg-gray-800 dark:text-gray-300">
            <tr>
              <th scope="col" className="px-6 py-3 text-xl font-bold">
                Rank
              </th>
              <th scope="col" className="px-6 py-3 text-xl font-bold">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-xl font-bold">
                Percentile
              </th>
            </tr>
          </thead>
          <tbody>
            {combinedLeaderboard.map((entry, index) => (
              <tr
                key={`${entry.name}-${index}`} 
                className={`text-md ${
                  index % 2 === 0
                    ? "bg-gray-50 dark:bg-gray-800"
                    : "bg-white dark:bg-gray-700"
                } hover:bg-blue-200 dark:hover:bg-blue-800 transition duration-200 ease-in-out`}
              >
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-gray-100">
                  {index + 1}
                </td>
                <td className="px-6 py-4 font-medium">{entry.name}</td>
                <td className="px-6 py-4 font-semibold text-left">
                  {entry.percentile.toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
Leaderboard.propTypes = {
  API: PropTypes.string.isRequired,
};

export default Leaderboard;
