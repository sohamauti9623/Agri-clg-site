import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/#facilities', label: 'Facilities' },
  { href: '/#contact', label: 'Contact' },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/30 bg-white/70 backdrop-blur-2xl">
      <nav className="container-shell flex h-20 items-center justify-between" aria-label="Primary navigation">
        <Link href="/" className="flex items-center gap-3" aria-label="Shri Vitthal College of Agriculture home">
          <span className="grid size-12 place-items-center rounded-2xl bg-leaf text-xl font-black text-white shadow-lg shadow-leaf/20">SV</span>
          <span className="leading-tight">
            <span className="block text-sm font-black uppercase tracking-[0.2em] text-leaf">Shri Vitthal</span>
            <span className="block font-display text-lg font-black text-[#173322] sm:text-xl">College of Agriculture</span>
          </span>
        </Link>
        <div className="hidden items-center gap-2 rounded-full border border-leaf/10 bg-white/50 p-1 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-5 py-2 text-sm font-bold text-slate-700 transition hover:bg-leaf hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
        <Link href="/#contact" className="hidden rounded-full bg-soil px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-soil/20 transition hover:-translate-y-0.5 hover:bg-leaf sm:inline-flex">
          Apply Now
        </Link>
      </nav>
    </header>
  );
}
