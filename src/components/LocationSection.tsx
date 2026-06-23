import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Clock, MapPin } from 'lucide-react';

export default function LocationSection() {
  const locationRef = useRef<HTMLDivElement | null>(null);
  const locationInView = useInView(locationRef, {
    amount: 0.2,
  });

  return (
    <section id="lokasi" className="py-28 px-6 bg-[#f6f2ea]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          animate={{
            opacity: locationInView ? 1 : 0,
            y: locationInView ? 0 : 100,
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[4px] text-sm text-[#3e5b3f]">
            Lokasi Kami
          </p>

          <h2 className="text-5xl font-black mt-4">
            Temukan Karya Tani
          </h2>
        </motion.div>

        <div ref={locationRef} className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            animate={{
              opacity: locationInView ? 1 : 0,
              x: locationInView ? 0 : -100,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden rounded-[40px] shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507175.329360456!2d106.80569604999995!3d-6.732317600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69016dad23d187%3A0xe141089dc011cfcb!2sKeripik%20Karya%20Tani%20(Teh%20Bohay)!5e0!3m2!1sen!2sid!4v1780508610771!5m2!1sen!2sid"
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            animate={{
              opacity: locationInView ? 1 : 0,
              x: locationInView ? 0 : 100,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Keripik Karya Tani (Teh Bohay)
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Kunjungi lokasi kami untuk melihat proses produksi, membeli produk secara langsung, atau menjalin kerja sama dengan Karya Tani.
            </p>

            <div className="space-y-5">
              <motion.div whileHover={{ x: 10 }} className="flex gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#dfe9d7] flex items-center justify-center shrink-0">
                  <MapPin size={24} className="text-[#3e5b3f]" />
                </div>

                <div>
                  <h4 className="font-bold text-lg">
                    Lokasi
                  </h4>

                  <p className="text-gray-600">
                    Cikuda, RT.01, RW.06, No.77, Margalaksana, Kecamatan Cipeundeuy, Kabupaten Bandung Barat, Jawa Barat
                  </p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 10 }} className="flex gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#dfe9d7] flex items-center justify-center shrink-0">
                  <Clock size={24} className="text-[#3e5b3f]" />
                </div>

                <div>
                  <h4 className="font-bold text-lg">
                    Jam Operasional
                  </h4>

                  <p className="text-gray-600">
                    Senin - Minggu
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.a
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.98,
              }}
              href="https://maps.app.goo.gl/4DRmJjMb9yCQxzqm6"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 mt-8 px-8 py-4 bg-[#3e5b3f] text-white rounded-2xl font-semibold shadow-xl"
            >
              Buka di Google Maps
              <ArrowUpRight size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
