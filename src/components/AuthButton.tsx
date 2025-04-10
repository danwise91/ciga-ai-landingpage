'use client';

import { useAuth } from '@crossmint/client-sdk-react-ui';
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function AuthButton() {
  const { login, logout, user } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await login();
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold"
          onClick={() => router.push('/profile')}
        >
          Profile
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-600 text-black px-6 py-2 rounded-lg font-semibold"
          onClick={logout}
        >
          Logout
        </motion.button>
      </div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold"
      onClick={handleLogin}
    >
      Login with Crossmint
    </motion.button>
  );
} 