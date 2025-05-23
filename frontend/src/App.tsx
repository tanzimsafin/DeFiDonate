import "./App.css";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "../config";
import DonationComponent from "./components/DonationComponent";
import Owner_Of_contract from "./components/OwnerOfContract";
import DonationAmount from "./components/Donation_ammount";
import TopDonnerDonation from "./components/Top_donner_Donation";
import { WalletOptions } from "./components/walletOptions";
import { Account } from "./components/Disconnect";

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 px-4 py-8 md:px-8">
          {/* Hero Section */}
          <header className="text-center mb-12 md:mb-16 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4 md:text-6xl">
                Decentralized Donation Platform
              </h1>
              <p className="mt-3 text-xl text-gray-300 md:text-2xl">
                Empowering Generosity with Blockchain Technology
              </p>
             
            </div>
          </header>

          {/* Wallet Connection Section */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-700/50">
              <h2 className="text-2xl font-semibold text-center mb-6">Connect Your Wallet</h2>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <div className="flex-1 bg-gray-900/60 p-6 rounded-xl shadow-lg border border-gray-700/50 hover:border-blue-500/50 transition-colors">
                  <h3 className="text-xl font-medium mb-4 text-blue-400">Select Wallet</h3>
                  <WalletOptions />
                </div>
                <div className="flex-1 bg-gray-900/60 p-6 rounded-xl shadow-lg border border-gray-700/50 hover:border-purple-500/50 transition-colors">
                  <h3 className="text-xl font-medium mb-4 text-purple-400">Account Status</h3>
                  <div className="overflow-hidden">
                    <Account />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700/50 hover:border-blue-500/30 transition-all hover:transform hover:scale-105 duration-300">
                <DonationComponent />
              </div>
              <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700/50 hover:border-purple-500/30 transition-all hover:transform hover:scale-105 duration-300">
                <Owner_Of_contract />
              </div>
              <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700/50 hover:border-green-500/30 transition-all hover:transform hover:scale-105 duration-300">
                <DonationAmount />
              </div>
              <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700/50 hover:border-pink-500/30 transition-all hover:transform hover:scale-105 duration-300">
                <TopDonnerDonation />
              </div>
            </div>
          </div>

          {/* Donation Impact Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="bg-gray-800/20 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700/50">
              <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Your Impact Matters
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500/20 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Transparent</h3>
                  <p className="text-gray-400">All donations are recorded on the blockchain, ensuring complete transparency.</p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-500/20 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Secure</h3>
                  <p className="text-gray-400">State-of-the-art blockchain security protects your donations and personal data.</p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-500/20 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Immediate</h3>
                  <p className="text-gray-400">Your donations are processed instantly, bringing immediate support to those in need.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <footer className="mt-16 text-center text-gray-400">
            <div className="max-w-6xl mx-auto border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                    DonateChain
                  </h3>
                </div>
                <div className="flex gap-6">
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
              <p className="mt-6 text-sm">
                Powered by <span className="font-semibold text-blue-400">Blockchain Technology</span> — Secure, Transparent, Decentralized
              </p>
              <p className="mt-2 text-sm text-gray-500">
                © 2025 DonateChain. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;