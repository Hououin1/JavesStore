import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import '../assets/header.css';
import Sidebar from './Sidebar';
import javesLogo from '../assets/javes-logo-clean.png';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = isSidebarOpen ? 'hidden' : '';
    document.body.style.paddingRight = isSidebarOpen && scrollbarWidth > 0 ? `${scrollbarWidth}px` : '';

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isSidebarOpen]);

  return (
    <>
      <header className="site-header">
        <div className="site-header-left">
          <button
            type="button"
            className="site-menu-button"
            aria-label="Buka menu"
            aria-expanded={isSidebarOpen}
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>

          <div className="site-brand">
            <img src={javesLogo} alt="Logo Javes Store" className="site-brand-logo" />
            <span>Javes Store</span>
          </div>
        </div>
      </header>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Header;
