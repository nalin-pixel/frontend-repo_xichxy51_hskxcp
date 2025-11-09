export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500">© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
        <div className="text-sm text-zinc-500">
          Built with love and caffeine.
        </div>
      </div>
    </footer>
  );
}
