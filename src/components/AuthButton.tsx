'use client';

import { useAuth } from '@crossmint/client-sdk-react-ui';

const AuthButton = () => {
  const { login, logout, user } = useAuth();

  return (
    <button
      onClick={() => {
        if (user) {
          logout();
        } else {
          login();
        }
      }}
      className="bg-[#D4AF37] text-black px-4 py-2 rounded-md hover:bg-[#C19B2E] transition-colors"
    >
      {user ? 'Logout' : 'Login With Crossmint'}
    </button>
  );
};

export default AuthButton; 