import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import halalLogo from '../assets/SertifikatHalal.svg';
import pirtLogo from '../assets/SertifikatPirt.svg';
import nibLogo from '../assets/Sertifikatnib.svg';
import bpomLogo from '../assets/SertifikatBpom.svg';

export default function Certifications() {
  const legalTitleRef = useRef<HTMLDivElement | null>(null);
  const legalTitleInView = useInView(legalTitleRef, {
    amount: 0.3,
  });

  return (
    <section className="py-28 px-6 bg-[#f6f2ea]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={legalTitleRef}
          animate={{
            opacity: legalTitleInView ? 1 : 0,
            y: legalTitleInView ? 0 : 100,
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[4px] text-sm text-[#3e5b3f]">
            Legalitas
          </p>

          <h2 className="text-5xl font-black mt-4">
            Sertifikasi & Perizinan
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {[
            {
              title: 'Sertifikat Halal',
              image: halalLogo,
            },
            {
              title: 'PIRT',
              image: pirtLogo,
            },
            {
              title: 'Nomor Induk Berusaha (NIB)',
              image: nibLogo,
            },
            {
              title: 'BPOM',
              image: bpomLogo,
            },
          ].map((cert, index) => (
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
                scale: 1.02,
              }}
              className="bg-white rounded-[32px] overflow-hidden shadow-xl"
            >
              <div className="h-[320px] overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition duration-300 hover:scale-105"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#3e5b3f]">
                  {cert.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
