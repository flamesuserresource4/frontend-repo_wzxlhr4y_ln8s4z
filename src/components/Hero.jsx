import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-cyan-300/90 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-3 py-1">Web Developer</span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-emerald-300 bg-clip-text text-transparent leading-tight">
            Hi, I'm Alex Rivera
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/80 max-w-xl">
            I craft sleek, fast, and accessible web experiences with modern stacks. I love bringing ideas to life with clean code, delightful motion, and a dash of neon.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#work" className="px-5 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-medium shadow-[0_0_40px_-10px] shadow-fuchsia-500/50 hover:brightness-110 transition">View Work</a>
            <a href="#contact" className="px-5 py-3 rounded-md border border-white/20 text-white/90 hover:bg-white/5 transition">Contact Me</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="relative hidden md:block"
        >
          <div className="relative mx-auto h-72 w-72 md:h-80 md:w-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
              alt="Alex Rivera portrait"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-fuchsia-500/20 to-emerald-500/20 mix-blend-overlay" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
