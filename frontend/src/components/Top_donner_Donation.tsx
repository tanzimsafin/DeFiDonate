import { useReadContract } from "wagmi"
import {abi} from "../../DonationContractAbi";
import { useState } from "react";
export default function Top_donner_Donation() {
    const[showDetails,setShowDetails]=useState(false);
    const {data,isLoading,error}=useReadContract({
        abi,
        address:"0x320f75cf83e3e609788f117c5207d07c3f23573d",
        functionName:"top_Donner_Donation"
    })as { data: any[], isLoading: boolean, error: any }
    const topDonorAddress = data ? data[0] : "N/A";
    const topDonation=data? data[1] :"N/A";
    function seeDetails(){
        setShowDetails(true);
     }
    return (
        <div>
            <div>
            <button onClick={seeDetails}>Top Donner and Donation</button>
            {showDetails && ( 
            <div>
             {isLoading && <div>Loading...</div>}
             {error && <div>Error fetching owner address</div>} 
             <div>Top_donner: {topDonorAddress as string}</div>
             Top_Donation_ammount: {topDonation}</div>
            )}
        </div>
            
        </div>
    )
}
