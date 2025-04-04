import "./App.css";

import {  WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import  {config}  from "../config";
import DonnationComponent from "./components/DonationComponent";
import TotalAmmount from "./components/OwnerOfContract";
import Donation_ammount from "./components/Donation_ammount";
import Top_donner_Donation from "./components/Top_donner_Donation";
import { WalletOptions } from "./components/walletOptions";
import { Account } from "./components/Disconnect";
const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 justify-center">
          <WalletOptions/>
          <Account/>
          </div>
         <div className="flex gap-3">
           <DonnationComponent/>
           <TotalAmmount/>
           <Donation_ammount/>
           <Top_donner_Donation/>
         </div>
        </div>
       
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
