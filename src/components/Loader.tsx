import { AnimatePresence, motion } from 'framer-motion';
import lgo from '../assets/lgo.svg';

type LoaderProps = {
  loading: boolean;
};

export default function Loader({ loading }: LoaderProps) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{
            opacity: 0,
            scale: 1.1,
            filter: 'blur(10px)',
          }}
          transition={{
            duration: 0.8,
          }}
          className="fixed inset-0 z-[9999] bg-[#161616] flex items-center justify-center"
        >
          <div className="relative flex items-center justify-center">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: 'linear',
              }}
              className="absolute w-56 h-56 border-[3px] border-[#3e5b3f]/20 border-t-[#8fc17d] rounded-full"
            />

            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="flex items-center justify-center"
            >
              <img
                src={lgo}
                alt=""
                className="h-[12.5rem] w-auto object-contain"
              />
            </motion.div>

            <motion.div
              animate={{
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="absolute -bottom-20 text-[#dfe9d7] tracking-[8px] text-sm font-semibold"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
