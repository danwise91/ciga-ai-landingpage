'use client';

import { useAuth, useWallet } from '@crossmint/client-sdk-react-ui';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProfilePage() {
  const { user, getUser } = useAuth();
  const { wallet, getOrCreateWallet } = useWallet();

  const handleCreateWallet = async () => {
    try {
      const createdWallet = await getOrCreateWallet({
        type: 'evm-smart-wallet',
        args: { chain: 'polygon' }
      });
      console.log('Created Wallet:', createdWallet);
    } catch (error) {
      console.error('Error creating wallet:', error);
    }
  };

  const handleSignOut = () => {
    // Add sign-out logic here
    window.location.href = '/';
  };

  console.log('Wallet object:', wallet);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-white">Please log in to view your profile</h1>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-colors mt-4"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16 relative">
        <button
          onClick={handleSignOut}
          className="absolute top-4 right-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          Sign Out
        </button>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-900 rounded-lg p-8 shadow-xl">
            <div className="flex items-center space-x-6 mb-8">
              <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-700">
                {user.email && (
                  <div className="w-full h-full flex items-center justify-center text-2xl font-bold">
                    {user.email.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">{user.email || 'Anonymous User'}</h1>
                <p className="text-gray-400">{user.email}</p>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <h2 className="text-2xl font-bold mb-6">Wallet Status</h2>
              {wallet ? (
                <div className="bg-gray-800 rounded-lg p-6">
                  <p className="text-green-400 mb-2">Wallet Connected</p>
                  <p className="text-sm text-gray-400 break-all">
                    Wallet Address: {wallet.address || 'Address not available'}
                  </p>
                </div>
              ) : (
                <div className="bg-gray-800 rounded-lg p-6">
                  <p className="text-yellow-400 mb-4">No wallet connected</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCreateWallet}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Create Wallet
                  </motion.button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 