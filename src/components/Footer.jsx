export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <p>© {new Date().getFullYear()} Alex Rivera. All rights reserved.</p>
        <p className="text-white/40">Built with care, motion, and neon vibes.</p>
      </div>
    </footer>
  );
}
