import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#102418] text-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-black">Shri Vitthal College of Agriculture</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">A future-ready campus dedicated to agricultural science, practical farm innovation, rural leadership, and student success.</p>
        </div>
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-gold">Quick links</p>
          <div className="mt-4 grid gap-3 text-sm text-white/75">
            <Link href="/about" className="hover:text-gold">About the College</Link>
            <Link href="/#facilities" className="hover:text-gold">Facilities</Link>
            <Link href="/#contact" className="hover:text-gold">Admissions Contact</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-gold">Admissions</p>
          <p className="mt-4 text-sm leading-7 text-white/75">Call: <a href="tel:+919999999999" className="hover:text-gold">+91 99999 99999</a></p>
          <p className="text-sm leading-7 text-white/75">Email: <a href="mailto:admissions@shrivitthalagri.edu.in" className="hover:text-gold">admissions@shrivitthalagri.edu.in</a></p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/55">© {new Date().getFullYear()} Shri Vitthal College of Agriculture. All rights reserved.</div>
    </footer>
  );
}
