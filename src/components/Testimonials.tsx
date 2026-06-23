import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-28 px-6 bg-[#3e5b3f] text-white">
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
            Testimoni
          </p>

          <h2 className="text-5xl font-black mt-4 text-[#f6f2ea]">
            Apa Kata Pelanggan?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Fabem Official',
              review: 'Keripiknya enak',
            },
            {
              name: 'Riz Official',
              review: 'Enak Mantap',
            },
            {
              name: 'Rian',
              review: 'Pelayanan ramah, rasa produknya memuaskan. Recommended.',
            },
          ].map((item, index) => (
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
              className="bg-white/10 rounded-[32px] p-8 backdrop-blur-lg border border-white/10"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="fill-yellow-400 text-yellow-400"
                    size={18}
                  />
                ))}
              </div>

              <p className="mb-6 text-[#e5e5e5] leading-relaxed">
                "{item.review}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#dfe9d7] flex items-center justify-center font-bold text-[#3e5b3f]">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-bold">
                    {item.name}
                  </h4>

                  <p className="text-sm text-[#d7d7d7]">
                    Google Review
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
