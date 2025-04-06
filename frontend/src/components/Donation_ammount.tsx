import { useReadContract } from "wagmi";
import { abi } from "../../DonationContractAbi";
import { useState } from "react";

export default function Donation_ammount() {
  const [showDetails, setShowDetails] = useState(false);

  const { data, isLoading, error } = useReadContract({
    abi,
    address: "0x320f75cf83e3e609788f117c5207d07c3f23573d",
    functionName: "getTotalDonation",
  });

  function toggleDetails() {
    setShowDetails((prev) => !prev);
  }

  return (
    <div className="flex flex-col items-center">
      {/* Header Button */}
      <button
        onClick={toggleDetails}
        className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg border border-pink-500 transition-colors flex items-center justify-center gap-2"
      >
        {/* Money Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-pink-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Donation Balance
        {/* Chevron Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 transition-transform ${
            showDetails ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Details Panel */}
      {showDetails && (
        <div className="w-full mt-4 bg-gray-800/50 rounded-lg p-4 border border-gray-700/60 animate-fadeIn">
          {isLoading ? (
            <div className="flex justify-center py-6">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-pink-500"></div>
            </div>
          ) : error ? (
            <div className="text-red-400 text-center py-3">
              Error fetching donation data
            </div>
          ) : (
            <div className="space-y-3">
              {/* Total Donation Amount */}
              <div>
                <div className="text-gray-400 text-sm mb-1">
                  Total Donation Amount:
                </div>
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
                  {data as string} USDT
                </div>
              </div>

              {/* Additional stats could go here */}
              <div className="pt-2 mt-2 border-t border-gray-700/50">
                <div className="text-xs text-gray-400">
                  Last updated: {new Date().toLocaleDateString()} at{" "}
                  {new Date().toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
