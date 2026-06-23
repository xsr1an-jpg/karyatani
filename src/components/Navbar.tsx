import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import logoKaryaTani from '../assets/ktlogo.svg';
import '../styles/navbar.css';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
const [mobileMenu, setMobileMenu] = useState(false);
const [navbarVisible] = useState(true);
const [scrolled]= useState(false);


useEffect(() => {
document.body.style.overflow = mobileMenu ? 'hidden' : '';


return () => {
  document.body.style.overflow = '';
};


}, [mobileMenu]);

useEffect(() => {
const handleResize = () => {
if (window.innerWidth >= 1024) {
setMobileMenu(false);
}
};


window.addEventListener('resize', handleResize);

return () => {
  window.removeEventListener('resize', handleResize);
};


}, []);

return (
<motion.header
initial={{ y: -100 }}
animate={{ y: navbarVisible ? 0 : -100 }}
transition={{ duration: 0.4 }}
className={`navbar-shell ${
  scrolled
    ? 'navbar-scrolled'
    : 'navbar-hero'
}`}
> <div className="navbar-container">


    <div className="navbar-brand">
      <img
        src={logoKaryaTani}
        alt="Karya Tani"
        className="navbar-logo"
      />

      <div className="navbar-brand-text">
        <h1 className="navbar-title">
          Karya Tani
        </h1>

        <p className="navbar-subtitle">
          Aneka Cemilan Ringan
        </p>
      </div>
    </div>

    <div className="navbar-actions">

      <button
        type="button"
        onClick={() => setMobileMenu(!mobileMenu)}
        className="menu-button"
      >
        <AnimatePresence mode="wait">

          {mobileMenu ? (
            <motion.div
              key="close"
              initial={{
                rotate: -90,
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                rotate: 0,
                opacity: 1,
                scale: 1,
              }}
              exit={{
                rotate: 90,
                opacity: 0,
                scale: 0.7,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <X size={20} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{
                rotate: 90,
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                rotate: 0,
                opacity: 1,
                scale: 1,
              }}
              exit={{
                rotate: -90,
                opacity: 0,
                scale: 0.7,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <Menu size={20} />
            </motion.div>
          )}

        </AnimatePresence>
      </button>

      <nav className="navbar-menu">
        <a href="#tentang" className="navbar-link">
          Tentang
        </a>

        <a href="#produk" className="navbar-link">
          Produk
        </a>

        <a href="#keunggulan" className="navbar-link">
          Keunggulan
        </a>

        <a href="#kontak" className="navbar-link">
          Kontak
        </a>
      </nav>

    </div>
  </div>

  <AnimatePresence>
    {mobileMenu && (
      <motion.div
        initial={{
          opacity: 0,
          height: 0,
        }}
        animate={{
          opacity: 1,
          height: 'auto',
        }}
        exit={{
          opacity: 0,
          height: 0,
        }}
        transition={{
          duration: 0.25,
        }}
        className="navbar-mobile-menu"
      >
        <div className="mobile-links">

          {[
            'Tentang',
            'Produk',
            'Keunggulan',
            'Kontak',
          ].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="mobile-link"
              onClick={() => setMobileMenu(false)}
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * 0.06,
              }}
            >
              {item}
            </motion.a>
          ))}

        </div>
      </motion.div>
    )}
  </AnimatePresence>
</motion.header>


);
}
