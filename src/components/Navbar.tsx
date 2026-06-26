import { useState, useEffect } from 'react';
import './navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Efek Deteksi Scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Efek Lock Scroll Body saat Mobile Menu Terbuka
  useEffect(() => {
    document.body.style.overflow = mobileMenu ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenu]);

  // Efek Auto-Close Mobile Menu kalau layar di-resize ke Desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 769) {
        setMobileMenu(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = ['Tentang', 'Produk', 'Keunggulan', 'Kontak'];

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        
        {/* Sisi Kiri: Logo & Brand */}
        <a href="#" className="navbar__logo" onClick={() => setMobileMenu(false)}>
          <img
            src="/favicon.svg"
            alt="Karya Tani"
            className="navbar__logo-img"
          />
          <div className="navbar__brand-wrapper">
            <span className="navbar__logo-text">
              Karya Tani
            </span>
            <span className="navbar__subtitle">
              Aneka Makanan Ringan
            </span>
          </div>
        </a>

        {/* Sisi Kanan: Desktop Links */}
        <nav className="navbar__links">
          {menuItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="navbar__link">
              {item}
            </a>
          ))}
        </nav>

        {/* Sisi Kanan: Hamburger Button */}
        <div className="navbar__actions">
          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            className="navbar__hamburger-btn"
            style={{ fontSize: "28px", fontWeight: "bold", lineHeight: "1" }}
            aria-label="Toggle Menu"
          >
            {mobileMenu ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (Top Dropdown Glassmorphism) */}
      <div className={`mobile-menu-drawer ${mobileMenu ? 'open' : ''}`}>
        <div className="mobile-menu__links">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="mobile-menu__link"
              onClick={() => setMobileMenu(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      
      {mobileMenu && <div className="mobile-menu-overlay" onClick={() => setMobileMenu(false)} />}
    </header>
  );
}