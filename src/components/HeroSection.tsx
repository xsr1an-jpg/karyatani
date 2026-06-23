import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShoppingBag } from 'lucide-react';
import bgkt from '../assets/bgkt.jpg';
import { Award, Leaf, ShieldCheck } from 'lucide-react';

import '../styles/hero-section.css';

type HeroSectionProps = {
  loading: boolean;
};

export default function HeroSection({ loading }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement | null>(null);

  const heroInView = useInView(heroRef, {
    amount: 0.3,
  });

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 80,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: -50,
        scale: 1.02,
      }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="hero-section"
    >
      <img
        src={bgkt}
        alt="Karya Tani"
        className="hero-background"
      />

      <div className="hero-overlay" />

      <motion.div
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="hero-blob"
      />

      <div className="hero-container">
        <div
          ref={heroRef}
          className="hero-content"
        >
          <motion.span
            animate={{
              opacity: !loading && heroInView ? 1 : 0,
              y: !loading && heroInView ? 0 : 40,
            }}
            transition={{
              duration: 0.9,
            }}
            className="hero-badge"
          >
            Produk UMKM Lokal Indonesia
          </motion.span>

          <motion.h1
            animate={{
              opacity: !loading && heroInView ? 1 : 0,
              y: !loading && heroInView ? 0 : 40,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="hero-title"
          >
            Cita Rasa
            <span> Alami</span>
            <br />
            Dari Hasil Petani
          </motion.h1>

          <motion.p
            animate={{
              opacity: !loading && heroInView ? 1 : 0,
              y: !loading && heroInView ? 0 : 40,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="hero-description"
          >
            Karya Tani menghadirkan berbagai makanan ringan
            berkualitas tinggi berbahan dasar hasil pertanian
            Indonesia yang diproses secara higienis dan modern.
          </motion.p>

          <motion.div
            animate={{
              opacity: !loading && heroInView ? 1 : 0,
              y: !loading && heroInView ? 0 : 40,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="hero-actions"
          >
            <a
  href="https://karyatani-store.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="hero-btn hero-btn-primary"
>
  <span> Lihat Toko</span>
  <ShoppingBag size={18} /> 
</a>

            <a
              href="#kontak"
              className="hero-btn hero-btn-glass"
            >
              Hubungi Kami
            </a>
          </motion.div>

          <motion.div
            animate={{
              opacity: !loading && heroInView ? 1 : 0,
              y: !loading && heroInView ? 0 : 40,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="hero-features"
          >
            <div className="hero-feature">
              <ShieldCheck size={18} />
              <span>Produksi Higienis</span>
            </div>

            <div className="hero-feature">
              <Award size={18} />
              <span>Produk Berkualitas</span>
            </div>

            <div className="hero-feature">
              <Leaf size={18} />
              <span>Bahan Alami</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}