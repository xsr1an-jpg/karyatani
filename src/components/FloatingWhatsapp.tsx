import { useEffect, useRef, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/wa.css';
export default function FloatingWhatsapp() {
  const [visible, setVisible] = useState(true);

  const lastScrollY = useRef(0);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        setVisible(true);
      }, 1500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <a
      href="https://wa.me/6285294964110"
      target="_blank"
      rel="noopener noreferrer"
      className={`floating-wa ${visible ? 'show' : 'hide'}`}
    >
      <FaWhatsapp />
    </a>
  );
}