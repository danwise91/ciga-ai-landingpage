'use client';

import { useAuth } from "@crossmint/client-sdk-react-ui";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  if (!user) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Please log in to view your profile</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold"
            onClick={() => router.push('/')}
          >
            Go to Login
          </motion.button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900 rounded-2xl p-8 shadow-2xl"
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Your Profile</h1>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-700 text-white px-6 py-2 rounded-lg font-semibold"
                onClick={() => router.push('/')}
              >
                Home
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold"
                onClick={logout}
              >
                Logout
              </motion.button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Basic Information</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400">User ID</p>
                    <p className="text-lg">{user.userId}</p>
                  </div>
                  {user.email && (
                    <div>
                      <p className="text-gray-400">Email</p>
                      <p className="text-lg">{user.email}</p>
                    </div>
                  )}
                  {user.phoneNumber && (
                    <div>
                      <p className="text-gray-400">Phone Number</p>
                      <p className="text-lg">{user.phoneNumber}</p>
                    </div>
                  )}
                </div>
              </div>

              {user.google && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Google Account</h2>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-400">Name</p>
                      <p className="text-lg">{user.google.name}</p>
                    </div>
                    {user.google.picture && (
                      <div>
                        <p className="text-gray-400">Profile Picture</p>
                        <img
                          src={user.google.picture}
                          alt="Google Profile"
                          className="w-24 h-24 rounded-full"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {user.farcaster && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Farcaster Account</h2>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-400">Username</p>
                      <p className="text-lg">{user.farcaster.username}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Display Name</p>
                      <p className="text-lg">{user.farcaster.displayName}</p>
                    </div>
                    {user.farcaster.bio && (
                      <div>
                        <p className="text-gray-400">Bio</p>
                        <p className="text-lg">{user.farcaster.bio}</p>
                      </div>
                    )}
                    {user.farcaster.pfpUrl && (
                      <div>
                        <p className="text-gray-400">Profile Picture</p>
                        <img
                          src={user.farcaster.pfpUrl}
                          alt="Farcaster Profile"
                          className="w-24 h-24 rounded-full"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-4">Membership Status</h2>
              <div className="space-y-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Ciga Cigar Club</h3>
                  <p className="text-gray-300">Status: Active</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Elite Club</h3>
                  <p className="text-gray-300">Status: Pending</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Gold Card</h3>
                  <p className="text-gray-300">Status: Not Applied</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 