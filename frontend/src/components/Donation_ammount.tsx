import { useReadContract } from "wagmi"
import { abi } from "../../DonationContractAbi";
import { useState } from "react";
export default function Donation_ammount() {
    const[showDetails,setShowDetails]=useState(false);
    const {data,isLoading,error}=useReadContract({
      abi,
      address:"0x320f75cf83e3e609788f117c5207d07c3f23573d",
      functionName:"getTotalDonation"
    });
    function seeDetails(){
       setShowDetails(true);
    }
    return (
        <div>
            <button onClick={seeDetails}>Donation Balance</button>
            {showDetails && ( 
            <div>
             {isLoading && <div>Loading...</div>}
             {error && <div>Error fetching owner address</div>} 
             Total_Donation_ammount: {data as string}</div>
            )}
        </div>
    )
}


