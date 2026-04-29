import { BookText, Globe2, Home, Search, Users, X } from 'lucide-react';
import '../assets/sidebar.css';
import sidebarLogo from '../assets/sidebar-logo.jpeg';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: 'Beranda', icon: Home },
  { label: 'Lacak Pesanan', icon: Search },
  { label: 'Pusat Informasi', icon: BookText },
  { label: 'Periksa Negara Akun', icon: Globe2 },
  { label: 'Komunitas DarkSystem', icon: Users },
];

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? 'is-open' : ''}`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      <aside className={`site-sidebar ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
        <div className="site-sidebar-top">
          <div className="site-sidebar-brand">
            <img src={sidebarLogo} alt="Logo Javes Store" className="site-sidebar-logo" />
            <div>
              <strong>Javes Store</strong>
              <span>Top up game cepat dan aman</span>
            </div>
          </div>

          <button
            type="button"
            className="site-sidebar-close"
            aria-label="Tutup menu"
            onClick={onClose}
          >
            <X size={22} />
          </button>
        </div>

        <nav className="site-sidebar-nav" aria-label="Menu utama">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                type="button"
                className="site-sidebar-link"
                onClick={onClose}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
