'use client';

export default function CrossmintLogin() {
  const clientId = "ck_production_AGW9W9qspyuVxf9wrDkDVZBmG8ERjAhenkfkQmv3NKCDcPhg7HVoPFXcEoJS4dm4RiGVTr7yvoJjWuUcBG6Hi3MGfZ9kMUHnBBV1KsBYnXmWfHJbnSMJw3ZtYPH6rZFwqH4qNUQbEoMXxdg41BEqoccC5P3wm2eb6MgN45K3TuxEMoTQ94zZaGYf2p39j8egH6esv1fru4XiT7LRTFR96YPg";
  
  return (
    <button
      onClick={() => {
        window.open(`https://auth.crossmint.com/connect?clientId=${clientId}&redirectUri=${window.location.origin}`, '_blank');
      }}
      className="bg-[#D4AF37] hover:bg-[#B38F2A] text-black font-bold py-2 px-6 rounded-full transition-colors duration-300"
    >
      Connect with Crossmint
    </button>
  );
} 