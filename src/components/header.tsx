import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header 
      // Style inline ini buat jaga-jaga kalau Tailwind belum jalan
      style={{ backgroundColor: '#232631', display: 'flex', alignItems: 'center', padding: '0 16px', height: '64px' }}
      className="flex items-center w-full bg-[#232631] px-4 h-16 shadow-md"
    >
      
      {/* Container Kiri: Menu & Slot Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }} className="flex items-center gap-6">
        
        {/* Tombol Hamburger Menu */}
        <button 
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}
          className="text-white hover:text-gray-300 transition"
        >
          <Menu size={24} />
        </button>

        {/* --- TEMPAT LOGO & NAMA WEB --- */}
        <div style={{ display: 'flex', alignItems: 'center' }} className="flex items-center">
          {/* Taruh Logo kamu di bawah sini */}
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.25rem' }} className="text-white font-bold text-xl">
            Javes Store
          </span>
        </div>

      </div>
    </header>
  );
};

export default Header;
