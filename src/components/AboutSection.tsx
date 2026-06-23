import { motion } from 'framer-motion';
import '../styles/about-section.css';

type AboutSectionProps = {
darkMode: boolean;
};

export default function AboutSection({
darkMode,
}: AboutSectionProps) {
return ( <section
   id="tentang"
   className="about-section"
 > <div className="about-bg"> <div className="about-bg-left" /> <div className="about-bg-right" /> </div>

  <div className="about-container">

    {/* IMAGE */}

    <motion.div
      initial={{
        opacity: 0,
        x: -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      viewport={{
        once: true,
      }}
      className="about-image-wrapper"
    >
      <div className="about-image-container">

        <div className="about-image-border" />

        <img
          src="https://images.unsplash.com/photo-1506617420156-8e4536971650?q=80&w=1200&auto=format&fit=crop"
          alt="Tentang Karya Tani"
          className="about-image"
        />

        {/* MOBILE BADGE */}

        <span className="about-badge mobile-badge">
          Tentang Perusahaan
        </span>

      </div>
    </motion.div>

    {/* CONTENT */}

    <motion.div
      initial={{
        opacity: 0,
        x: 50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      viewport={{
        amount: 0.3,
        once: true,
      }}
      className="about-content"
    >

      {/* DESKTOP BADGE */}

      <span className="about-badge desktop-badge">
        Tentang Perusahaan
      </span>

      <h2 className="about-title">
        Mengolah Hasil Tani
        Menjadi Produk
        Bernilai Tinggi
      </h2>

      <p className="about-text">
        Karya Tani merupakan UMKM makanan ringan yang
        berfokus mengolah hasil pertanian lokal menjadi
        produk berkualitas tinggi dengan cita rasa khas
        nusantara.
      </p>

      <p className="about-text">
        Kami percaya bahwa hasil pertanian Indonesia
        memiliki potensi besar untuk bersaing di pasar
        nasional maupun internasional apabila dikemas
        secara modern dan diproduksi dengan standar
        yang baik.
      </p>

      <div className="about-stats">

        <div
          className={`about-stat-card ${
            darkMode
              ? 'about-stat-dark'
              : 'about-stat-light'
          }`}
        >
          <h3>5+</h3>
          <p>Tahun Pengalaman</p>
        </div>

        <div
          className={`about-stat-card ${
            darkMode
              ? 'about-stat-dark'
              : 'about-stat-light'
          }`}
        >
          <h3>20+</h3>
          <p>Varian Produk</p>
        </div>

      </div>

    </motion.div>

  </div>
</section>


);
}
