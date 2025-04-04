import Input from "./input";
import { useWriteContract } from "wagmi";
import { abi } from "../../DonationContractAbi";

import { useState } from "react";

export default function DonnationComponent(){
    const { data, writeContract } = useWriteContract();
    const [donationAmount, setDonationAmount] = useState<number>(0);
    function wagmi() {
        writeContract({
          abi,
          address:"0x320f75cf83e3e609788f117c5207d07c3f23573d",
          functionName: "donation_recieve",
          args: [donationAmount],
        });
      }
    return(
      <div className="flex flex-col gap-3">
        <div className="bg-purple-100 text-black">
         <Input onChange={(value) => setDonationAmount(value)}/>
        </div>
        <button onClick={wagmi}>Send Donation</button>
        {data}
      </div>)
      ;
}

