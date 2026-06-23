import { motion } from 'framer-motion';
import contohGambar from '../assets/contohgambar.png';

export default function Gallery() {
  return (
    <section className="py-28 px-6 bg-[#3e5b3f]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[4px] text-sm text-[#f6f2ea]">
            Galeri
          </p>

          <h2 className="text-5xl font-black mt-4 text-[#f6f2ea]">
            Aktivitas Produksi
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[contohGambar, contohGambar, contohGambar, contohGambar].map((img, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="overflow-hidden rounded-[32px] shadow-2xl"
            >
              <img
                src={img}
                alt={`Galeri ${index + 1}`}
                className="w-full h-[420px] object-cover transition duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
