import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function VisionMission() {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const titleInView = useInView(titleRef, {
    amount: 0.3,
  });

  return (
    <section className="py-28 px-6 bg-[#3e5b3f] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={titleRef}
          animate={{
            opacity: titleInView ? 1 : 0,
            y: titleInView ? 0 : 100,
          }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[4px] text-sm text-[#f6f2ea]">
            Visi & Misi
          </p>

          <h2 className="text-5xl font-black mt-4 text-[#f6f2ea]">
            Komitmen Karya Tani
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
            }}
            whileHover={{
              y: -10,
            }}
            className="bg-white/10 border border-white/10 rounded-[40px] p-10 backdrop-blur-lg"
          >
            <h3 className="text-4xl font-bold mb-6">
              Visi
            </h3>

            <p className="text-lg leading-relaxed text-[#e5e5e5]">
              Menjadi brand makanan ringan berbasis hasil pertanian yang dikenal secara nasional dan mampu bersaing di pasar global.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
            }}
            whileHover={{
              y: -10,
            }}
            className="bg-white/10 border border-white/10 rounded-[40px] p-10 backdrop-blur-lg"
          >
            <h3 className="text-4xl font-bold mb-6">
              Misi
            </h3>

            <ul className="space-y-4 text-[#e5e5e5]">
              <li>✓ Menggunakan bahan baku berkualitas tinggi.</li>
              <li>✓ Memberdayakan petani lokal.</li>
              <li>✓ Menjaga kualitas produksi.</li>
              <li>✓ Mengembangkan inovasi produk.</li>
              <li>✓ Memberikan pelayanan terbaik.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
