import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 pointer-events-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 drop-shadow-[0_2px_8px_rgba(255,255,255,0.6)]">
              Modern Tech Portfolio
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-zinc-700/90">
              Interactive, playful, and built for showcasing your best work.
            </p>
            <div className="mt-8 flex gap-3 pointer-events-auto">
              <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-indigo-600 text-white font-medium shadow-lg shadow-indigo-600/20 hover:bg-indigo-500">
                Explore Projects
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/80 backdrop-blur text-zinc-900 font-medium border border-white/60 hover:bg-white">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
    </section>
  );
}
