import { useState } from "react";
import { useReadContract } from "wagmi";

export default function Owner_Of_contract() {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  
  const { data, isLoading, error } = useReadContract({
    abi: [{
      "type": "function",
      "name": "getOwnerAddress",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    }],
    address: "0x320f75cf83e3e609788f117c5207d07c3f23573d",
    functionName: "getOwnerAddress",
  });

  // Function to toggle details panel
  function toggleDetails() {
    setShowDetails(prev => !prev);
  }

  // Function to truncate Ethereum address
  const truncateAddress = (address: string | any) => {
    if (!address || address === "N/A") return "N/A";
    return `${address.toString().slice(0, 6)}...${address.toString().slice(-4)}`;
  };

  return (
    <div className="flex flex-col items-center">
      {/* Header Button */}
      <button 
        onClick={toggleDetails}
        className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg border border-pink-500 transition-colors flex items-center justify-center gap-2"
      >
        {/* Owner Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        Contract Owner Address
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
            <div className="text-red-400 text-center py-3">Error fetching owner address</div>
          ) : (
            <div className="space-y-3">
              {/* Owner Address */}
              <div>
                <div className="text-gray-400 text-sm mb-1">Contract Owner:</div>
                <div className="flex flex-col">
                  <span className="font-medium text-lg">{truncateAddress(data)}</span>
                  <div className="mt-1">
                    <div className="text-xs text-pink-400 hover:text-pink-300 cursor-pointer" 
                      onClick={() => {
                        if (data) {
                          navigator.clipboard.writeText(data.toString());
                          alert("Address copied to clipboard!");
                        }
                      }}
                    >
                      <div className="break-all text-xs text-gray-300">{data ? data.toString() : "N/A"}</div>
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

              {/* Additional details about the owner could go here */}
              <div>
                <div className="text-gray-400 text-sm mb-1">Role:</div>
                <div className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
                  Contract Administrator
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}