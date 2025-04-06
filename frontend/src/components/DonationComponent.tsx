import Input from "./input";
import { useWriteContract } from "wagmi";
import { abi } from "../../DonationContractAbi";
import { useState } from "react";

export default function DonnationComponent() {
  const { data, writeContract, isPending, isSuccess, isError } = useWriteContract();
  const [donationAmount, setDonationAmount] = useState<number>(0);
  const [showDetails, setShowDetails] = useState(false);
  
  function handleDonation() {
    writeContract({
      abi,
      address: "0x320f75cf83e3e609788f117c5207d07c3f23573d",
      functionName: "donation_recieve",
      args: [donationAmount],
    });
  }

  function toggleDetails() {
    setShowDetails(prev => !prev);
  }

  return (
    <div className="flex flex-col items-center">
      {/* Header Button */}
      <button 
        onClick={toggleDetails}
        className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg border border-pink-500 transition-colors flex items-center justify-center gap-2"
      >
        {/* Gift Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
        Make a Donation
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
          <div className="space-y-4">
            {/* Input Field */}
            <div>
              <div className="text-gray-400 text-sm mb-1">Enter Donation Amount:</div>
              <div className="bg-transparent">
                <Input onChange={(value) => setDonationAmount(value)} />
              </div>
            </div>

            {/* Donate Button */}
            <div>
              <button 
                onClick={handleDonation} 
                disabled={isPending || donationAmount <= 0}
                className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-all flex items-center justify-center gap-2
                  ${isPending ? 'bg-gray-700 cursor-not-allowed' : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700'}`}
              >
                {isPending ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Send Donation
                  </>
                )}
              </button>
            </div>

            {/* Transaction Status */}
            {isSuccess && (
              <div className="mt-4 p-3 bg-green-900/30 border border-green-700/50 rounded-lg">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-green-400 font-medium">Donation successful!</span>
                </div>
                <div className="text-xs text-gray-300 mt-1">Transaction hash: {data ? data.toString().substring(0, 10) + '...' : ''}</div>
              </div>
            )}

            {isError && (
              <div className="mt-4 p-3 bg-red-900/30 border border-red-700/50 rounded-lg">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-red-400 font-medium">Transaction failed</span>
                </div>
                <div className="text-xs text-gray-300 mt-1">Please check your wallet and try again</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}