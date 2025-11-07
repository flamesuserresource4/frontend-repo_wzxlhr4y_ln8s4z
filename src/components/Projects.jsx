import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Neon Commerce',
    description: 'Headless storefront with animations and serverless functions.',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1557264337-e8a93017fe92?q=80&w=1600&auto=format&fit=crop',
    url: '#',
  },
  {
    title: 'Realtime Board',
    description: 'Collaborative whiteboard with WebRTC and socket sync.',
    tags: ['React', 'WebRTC', 'Node'],
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
    url: '#',
  },
  {
    title: 'AI Snippets',
    description: 'Semantic search for code blocks with embeddings.',
    tags: ['Python', 'FastAPI', 'Vector DB'],
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
    url: '#',
  },
  {
    title: 'Motion Portfolio',
    description: 'Personal site with 3D and buttery-smooth transitions.',
    tags: ['Vite', 'Framer Motion', 'Spline'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
    url: '#',
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold text-lg">{project.title}</h3>
          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 shadow-[0_0_20px] shadow-fuchsia-500/40" />
        </div>
        <p className="mt-2 text-white/70 text-sm">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs text-cyan-200/90 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-2 py-1">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-cyan-500/10 via-fuchsia-500/10 to-emerald-500/10" />
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),transparent_50%),radial-gradient(ellipse_at_bottom,_rgba(217,70,239,0.12),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Work</h2>
          <p className="mt-2 text-white/70 max-w-2xl">A selection of projects that blend performance, clean UI, and subtle motion.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
