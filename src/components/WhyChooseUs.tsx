import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Leaf, ShieldCheck, Truck } from 'lucide-react';

export default function WhyChooseUs() {
  const advantageTitleRef = useRef<HTMLDivElement | null>(null);
  const advantageTitleInView = useInView(advantageTitleRef, {
    amount: 0.3,
  });

  return (
    <section id="keunggulan" className="py-28 px-6 bg-[#3e5b3f] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={advantageTitleRef}
          animate={{
            opacity: advantageTitleInView ? 1 : 0,
            y: advantageTitleInView ? 0 : 100,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[4px] text-sm text-[#f6f2ea]">
            Keunggulan Kami
          </p>

          <h2 className="text-5xl font-black mt-4 text-[#f6f2ea]">
            Kenapa Memilih Karya Tani?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {[
            {
              icon: Leaf,
              title: 'Bahan Alami',
              desc: 'Menggunakan hasil tani pilihan berkualitas terbaik.',
            },
            {
              icon: ShieldCheck,
              title: 'Produksi Higienis',
              desc: 'Diproses dengan standar kebersihan tinggi.',
            },
            {
              icon: Truck,
              title: 'Distribusi Luas',
              desc: 'Menjangkau berbagai kota di Indonesia.',
            },
            {
              icon: Award,
              title: 'Kualitas Premium',
              desc: 'Rasa konsisten dan disukai pelanggan.',
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
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
                  amount: 0.25,
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
                className="p-8 rounded-[32px] bg-white/10 backdrop-blur-lg border border-white/10"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  <Icon size={34} className="text-[#dfe9d7]" />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-[#e5e5e5] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
