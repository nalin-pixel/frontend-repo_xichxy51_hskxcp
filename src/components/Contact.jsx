import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // Simple demo handler
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-zinc-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">Get in touch</h2>
          <p className="mt-2 text-zinc-600">Have a project in mind? Let’s build something great.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={onSubmit} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="col-span-1 sm:col-span-2">
                  <label className="block text-sm font-medium text-zinc-700">Email</label>
                  <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required placeholder="you@domain.com" className="mt-1 w-full rounded-lg border-zinc-300 focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <div className="col-span-1 sm:col-span-2">
                  <label className="block text-sm font-medium text-zinc-700">Message</label>
                  <textarea value={message} onChange={(e)=>setMessage(e.target.value)} rows={5} required placeholder="Tell me about your idea..." className="mt-1 w-full rounded-lg border-zinc-300 focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <button type="submit" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-500">
                  <Send className="h-4 w-4" />
                  Send message
                </button>
                {sent && (
                  <p className="text-sm text-green-600">Thanks! I'll get back to you soon.</p>
                )}
              </div>
            </form>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-50 text-indigo-700">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-zinc-600">Email</p>
                <a href="mailto:you@domain.com" className="font-medium text-zinc-900">you@domain.com</a>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-sm text-zinc-600">I’m available for freelance work, collaborations, and full-time roles.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
