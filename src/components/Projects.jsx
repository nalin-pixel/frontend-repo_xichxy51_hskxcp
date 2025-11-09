import { Code2, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'AI Content Generator',
    description: 'Generate marketing copy with GPT-powered prompts and reusable templates.',
    tags: ['React', 'FastAPI', 'OpenAI'],
    link: '#',
  },
  {
    title: 'Realtime Chat',
    description: 'A WebSocket chat with typing indicators, file sharing, and themes.',
    tags: ['React', 'Socket.io', 'Tailwind'],
    link: '#',
  },
  {
    title: 'E‑commerce Dashboard',
    description: 'Sales analytics, inventory tracking, and team roles with beautiful charts.',
    tags: ['React', 'MongoDB', 'Charts'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">Featured Projects</h2>
            <p className="mt-2 text-zinc-600">A few highlights from recent work.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 text-white hover:bg-zinc-800">
            <Code2 className="h-4 w-4" />
            Work with me
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-zinc-200 hover:border-zinc-300 shadow-sm hover:shadow-md transition-all overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-900">{p.title}</h3>
                    <p className="mt-2 text-zinc-600 text-sm">{p.description}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-700">{t}</span>
                  ))}
                </div>
                <div className="mt-6">
                  <a href={p.link} className="inline-flex items-center gap-2 text-indigo-600 group-hover:text-indigo-700">
                    <span>View project</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
