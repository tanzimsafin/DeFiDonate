import { useState } from "react";
import {useReadContract } from "wagmi";
// import { abi } from "../../DonationContractAbi";


export default function TotalAmmount() {
    const[showDetails,setShowDetails]=useState<boolean>(false);
    const{data,isLoading,error}=useReadContract({
          abi:[{
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
    function seeDatails() {
        setShowDetails(true);
    }
    return (
        <div>
          <button onClick={seeDatails}>Owner of the contract</button>
          {showDetails && (
            <div>
              <div>Owner:</div>
              {isLoading && <div>Loading...</div>}
              {error && <div>Error fetching owner address</div>}
              {data && <div>{data.toString()}</div>}
            </div>
          )}
        </div>
      );
}

