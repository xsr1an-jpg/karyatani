import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { products } from '../data/products';

export default function ProductSlider() {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const sliderInView = useInView(sliderRef, {
    amount: 0.4,
  });

  useEffect(() => {
    if (!sliderInView) {
      setCurrent(0);
      return;
    }

    let index = 0;

    const interval = setInterval(() => {
      index++;

      if (index < products.length) {
        setCurrent(index);
      } else {
        clearInterval(interval);

        setTimeout(() => {
          setCurrent(0);
        }, 800);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [sliderInView]);

  const prevProduct = (current - 1 + products.length) % products.length;
  const nextProduct = (current + 1) % products.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section id="produk" className="py-28 px-6 bg-[#f6f2ea]">
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
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[4px] text-sm text-[#3e5b3f]">
            Produk Unggulan
          </p>

          <h2 className="text-5xl font-black mt-4">
            Produk Favorit Pelanggan
          </h2>
        </motion.div>

        <motion.div
          ref={sliderRef}
          animate={{
            opacity: sliderInView ? 1 : 0,
            y: sliderInView ? 0 : 100,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative px-16 overflow-visible"
        >
          <div
            className="absolute top-3 left-[270px] w-[300px] h-[120px] scale-[0.98] opacity-60 z-10 pointer-events-none"
            style={{
              transform: 'translateX(-92%)',
            }}
          >
            <div className="h-full rounded-[40px] overflow-hidden bg-white shadow-xl">
              <img
                src={products[prevProduct].image}
                alt={products[prevProduct].name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <motion.div
            key={current}
            initial={{
              scale: 0.98,
              opacity: 0.9,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.25,
            }}
            className="relative z-20 overflow-hidden rounded-[40px] bg-white shadow-2xl"
          >
            <div className="grid lg:grid-cols-2">
              <img
                src={products[current].image}
                alt={products[current].name}
                className="h-[500px] w-full object-cover"
              />

              <div className="p-12 flex flex-col justify-center">
                <span className="inline-block w-fit px-4 py-2 rounded-full bg-[#dfe9d7] text-[#3e5b3f] text-sm font-semibold mb-6">
                  Best Seller
                </span>

                <h3 className="text-5xl font-black mb-6">
                  {products[current].name}
                </h3>

                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  {products[current].desc}
                </p>

                <div className="flex items-center gap-4 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-yellow-500 fill-yellow-500"
                    />
                  ))}
                  <span className="text-gray-500">
                    4.9/5 Rating
                  </span>
                </div>

                <h4 className="text-4xl font-black text-[#3e5b3f] mb-8">
                  {products[current].price}
                </h4>

                <div className="flex gap-4">
                  <button className="px-8 py-4 bg-[#3e5b3f] text-white rounded-2xl font-semibold hover:scale-105 transition">
                    Pesan Sekarang
                  </button>

                  <button className="px-8 py-4 border-2 border-[#3e5b3f] rounded-2xl font-semibold text-[#3e5b3f]">
                    Detail Produk
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <div
            className="absolute top-3 right-[260px] w-[300px] h-[120px] scale-[0.96] opacity-40 z-10 pointer-events-none"
            style={{
              transform: 'translateX(92%)',
            }}
          >
            <div className="h-full rounded-[40px] overflow-hidden bg-white shadow-xl">
              <img
                src={products[nextProduct].image}
                alt={products[nextProduct].name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 -left-[15px] z-30 w-16 h-16 rounded-full bg-[#3e5b3f] text-white flex items-center justify-center shadow-xl"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 -right-16 z-30 w-16 h-16 rounded-full bg-[#3e5b3f] text-white flex items-center justify-center shadow-xl"
          >
            <ChevronRight />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
