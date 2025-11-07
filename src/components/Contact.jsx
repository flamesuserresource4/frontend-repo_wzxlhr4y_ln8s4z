import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // Simulate request
    await new Promise((r) => setTimeout(r, 900));
    setStatus('Thanks! I will get back to you soon.');
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Get in touch</h2>
          <p className="mt-2 text-white/70 max-w-2xl">Have a project in mind or want to collaborate? Send a message and I’ll reply shortly.</p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8"
        >
          <div className="space-y-2">
            <label className="text-sm text-white/80">Name</label>
            <input required type="text" placeholder="Your name" className="w-full rounded-md bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-white/80">Email</label>
            <input required type="email" placeholder="you@example.com" className="w-full rounded-md bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-sm text-white/80">Message</label>
            <textarea required rows={5} placeholder="Tell me about your project..." className="w-full rounded-md bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" />
          </div>
          <div className="md:col-span-2 flex items-center justify-between gap-4">
            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ y: 0 }}
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-gradient-to-r from-emerald-500 via-cyan-500 to-fuchsia-500 text-white font-medium shadow-[0_0_40px_-10px] shadow-emerald-500/40 hover:brightness-110 transition"
            >
              <Send size={18} /> Send Message
            </motion.button>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: status ? 1 : 0 }} className="text-sm text-white/70">
              {status}
            </motion.span>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
