import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-32 px-6 bg-[#f6f2ea] text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#3e5b3f]/15 blur-[180px] pointer-events-none" />

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
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="max-w-5xl mx-auto relative z-10"
      >
        <motion.div
          initial={{
            scale: 0.8,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          viewport={{
            once: false,
          }}
          transition={{
            delay: 0.15,
          }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3e5b3f]/10 border border-[#3e5b3f]/20 backdrop-blur-lg mb-8 text-[#3e5b3f] font-semibold"
        >
          <Sparkles size={18} />
          <span>Produk Lokal Berkualitas</span>
        </motion.div>

        <h2 className="text-6xl font-black mb-8 leading-[1.1] text-[#3e5b3f]">
          Siap Menikmati
          <br />
          Cemilan Nusantara?
        </h2>

        <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-[#6a766b]">
          Produk berkualitas dari hasil tani Indonesia, diproses secara higienis dengan standar terbaik untuk menghadirkan cita rasa khas nusantara yang renyah, lezat, dan disukai seluruh keluarga.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <motion.a
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.98,
            }}
            href="https://wa.me/6285294964110"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#3e5b3f] hover:bg-[#2f4730] rounded-2xl font-bold text-lg text-white shadow-2xl transition-all"
          >
            Pesan Sekarang
            <ArrowRight size={20} />
          </motion.a>

          <motion.a
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.98,
            }}
            href="#"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 border-2 border-[#3e5b3f] bg-white rounded-2xl font-bold text-lg text-[#3e5b3f] shadow-lg transition-all"
          >
            Store Resmi
            <ShoppingBag size={20} />
          </motion.a>
        </div>

        <div className="mt-12 text-sm text-[#7d8a7f]">
          Dipercaya pelanggan dari berbagai daerah di Indonesia
        </div>
      </motion.div>
    </section>
  );
}
