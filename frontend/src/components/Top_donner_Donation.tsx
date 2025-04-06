import { useReadContract } from "wagmi";
import { abi } from "../../DonationContractAbi";
import { useState } from "react";

export default function TopDonnerDonation() {
  const [showDetails, setShowDetails] = useState(false);
  
  const { data, isLoading, error } = useReadContract({
    abi,
    address: "0x320f75cf83e3e609788f117c5207d07c3f23573d",
    functionName: "top_Donner_Donation"
  }) as { data: any[], isLoading: boolean, error: any };

  const topDonorAddress = data ? data[0] : "N/A";
  const topDonation = data ? data[1] : "N/A";

  function toggleDetails() {
    setShowDetails(prev => !prev);
  }

  // Function to truncate Ethereum address
  const truncateAddress = (address: string | any[]) => {
    if (address === "N/A") return "N/A";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="flex flex-col items-center">
      {/* Header Button */}
      <button 
        onClick={toggleDetails}
        className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg border border-pink-500 transition-colors flex items-center justify-center gap-2"
      >
        {/* Trophy Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
        Top Donner and Donation
        {/* Chevron Icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-4 w-4 transition-transform ${showDetails ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
            <div className="text-red-400 text-center py-3">Error fetching donor data</div>
          ) : (
            <div className="space-y-3">
              {/* Top Donner */}
              <div>
                <div className="text-gray-400 text-sm mb-1">Top Donner:</div>
                <div className="flex flex-col">
                  <span className="font-medium text-lg">{truncateAddress(topDonorAddress)}</span>
                  <div className="mt-1">
                    <div className="text-xs text-pink-400 hover:text-pink-300 cursor-pointer" 
                      onClick={() => {
                        if (topDonorAddress !== "N/A") {
                          navigator.clipboard.writeText(topDonorAddress);
                          alert("Address copied to clipboard!");
                        }
                      }}
                    >
                      <div className="break-all text-xs text-gray-300">{topDonorAddress}</div>
                      <div className="flex items-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Copy full address
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Donation Amount */}
              <div>
                <div className="text-gray-400 text-sm mb-1">Top Donation Amount:</div>
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
                  {topDonation.toString()} USDT
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}